# T_PCOD.PRG

## General

|  |  |
| --- | --- |
| File | T_PCOD.PRG |
| Type | PRG |
| Jobs | 2 |
| Tables | 1 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.35 |
| Author | BMW TI-430 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | externe Tabelle PCodeTexte |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.35 |  |  |
| AUTHOR | string | BMW TI-430 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.48 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

## Tables

### PCODETEXTE

| PCODE | STRING | TEXT |
| --- | --- | --- |
| 0x0000 | -- |  |
| 0x5001 | C1001 | C1001 Bremskraftverstärker Druck - Messbereichs- oder Leistungsproblem |
| 0x5002 | C1002 | C1002 Bremskraftverstärker Schaltkreis - elektrischer Fehler |
| 0x5003 | C1003 | C1003 Bremskraftverstärker Unterdruckversorgung - Fehlfunktion |
| 0x5010 | C1010 | C1010 Bremskraftverstärker Drucksensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x5011 | C1011 | C1011 Bremskraftverstärker Drucksensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x5012 | C1012 | C1012 Bremskraftverstärker Drucksensor 1 Schaltkreis - elektrischer Fehler |
| 0x5013 | C1013 | C1013 Bremskraftverstärker Drucksensor 2 Schaltkreis - elektrischer Fehler |
| 0x5014 | C1014 | C1014 Bremskraftverstärker Drucksensor Schaltkreis - niedrig |
| 0x5015 | C1015 | C1015 Bremskraftverstärker Drucksensor Schaltkreis - hoch |
| 0x5016 | C1016 | C1016 Bremskraftverstärker Drucksensor 1 und 2 - Initialisierungsfehler |
| 0x5018 | C1018 | C1018 Bremskraftverstärker Drucksensor - Testpuls hoch |
| 0x5019 | C1019 | C1019 Bremskraftverstärker Drucksensor - Testpuls niedrig |
| 0x5020 | C1020 | C1020 Bremskraftverstärker Weggeber Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x5021 | C1021 | C1021 Bremskraftverstärker Weggeber Schaltkreis - elektrischer Fehler |
| 0x5030 | C1030 | C1030 Bremssystem Unterdrucksensor Schaltkreis 1 - elektrischer Fehler |
| 0x5031 | C1031 | C1031 Bremssystem Unterdrucksensor Schaltkreis 2 - elektrischer Fehler |
| 0x5032 | C1032 | C1032 Bremssystem Unterdrucksensor Schaltkreis 1 / 2 - Korrelationsfehler |
| 0x503F | C103F | C103F Bremssystem Sensoren Versorgungsspannungskreis - Fehlfunktion |
| 0x5040 | C1040 | C1040 Bremssystem Unterdruckpumpe Schaltkreis - elektrischer Fehler |
| 0x5050 | C1050 | C1050 Bremssystem Simulator Drucksensor - elektrischer Fehler |
| 0x5051 | C1051 | C1051 Bremssystem Simulator Ventil - elektrischer Fehler |
| 0x5052 | C1052 | C1052 Bremssystem Simulator - Fehlfunktion |
| 0x5060 | C1060 | C1060 Bremspedal Positionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x5061 | C1061 | C1061 Bremspedal Positionssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x5062 | C1062 | C1062 Bremspedal Positionssensor Schaltkreis - niedrig |
| 0x5063 | C1063 | C1063 Bremspedal Positionssensor Schaltkreis - hoch |
| 0x5064 | C1064 | C1064 Bremspedal Positionssensor Schaltkreis Messbereichs- oder Leistungsproblem - Signal zu hoch |
| 0x5065 | C1065 | C1065 Bremspedal Positionssensor Schaltkreis Messbereichs- oder Leistungsproblem - Signal zu niedrig |
| 0x5066 | C1066 | C1066 Bremspedal Positionssensor - elektrischer Fehler oder Sensor defekt |
| 0x5067 | C1067 | C1067 Bremspedal Positionssensor - Überspannung |
| 0x5068 | C1068 | C1068 Bremspedal Positionssensor - Unterspannung |
| 0x5069 | C1069 | C1069 Bremspedal Positionssensor - Initialisierungsfehler |
| 0x506A | C106A | C106A Bremspedal Positionssensor - Gradient zu hoch |
| 0x506B | C106B | C106B Bremspedal Positionssensor - Gradient zu niedrig |
| 0x5070 | C1070 | C1070 Bremssystem Interner Code (Service/Bandendetest) |
| 0x5071 | C1071 | C1071 Bremssystem regeneratives Bremsen Bremsmomente - Messbereichs- oder Leistungsproblem |
| 0x5072 | C1072 | C1072 Bremssystem Überwachung DSC (Dynamic Stability Control) |
| 0x5073 | C1073 | C1073 Bremssystem Fahrgestellnummer - ungültig |
| 0x5080 | C1080 | C1080 Bremssystem-Steuergerät - Unterspannung |
| 0x5081 | C1081 | C1081 Bremssystem-Steuergerät - Überspannung |
| 0x5082 | C1082 | C1082 Bremssystem-Steuergerät - interner Harware Fehler |
| 0x5084 | C1084 | C1084 DSC (Dynamic Stability Control)-Steuergerät - Unterspannung |
| 0x0001 | P0001 | P0001 Kraftstoffvolumenregler Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0002 | P0002 | P0002 Kraftstoffvolumenregler Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0003 | P0003 | P0003 Kraftstoffvolumenregler Steuerkreis - niedrig |
| 0x0004 | P0004 | P0004 Kraftstoffvolumenregler Steuerkreis - hoch |
| 0x0005 | P0005 | P0005 Kraftstoffabsperrventil Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0006 | P0006 | P0006 Kraftstoffabsperrventil Steuerkreis (Bank 1) - niedrig |
| 0x0007 | P0007 | P0007 Kraftstoffabsperrventil Steuerkreis (Bank 1) - hoch |
| 0x0008 | P0008 | P0008 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Bank 1) - Plausibilitätsfehler |
| 0x0009 | P0009 | P0009 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Bank 2) - Plausibilitätsfehler |
| 0x000A | P000A | P000A Nockenwellensteuerung Einlass (Bank 1) - langsame Reaktion |
| 0x000B | P000B | P000B Nockenwellensteuerung Auslass (Bank 1) - langsame Reaktion |
| 0x000C | P000C | P000C Nockenwellensteuerung Einlass (Bank 2) - langsame Reaktion |
| 0x000D | P000D | P000D Nockenwellensteuerung Auslass (Bank 2) - langsame Reaktion |
| 0x000E | P000E | P000E Kraftstoffvolumenregler - gelernter Adaptionswert überschritten |
| 0x000F | P000F | P000F Kraftstoffsystem - Überdruckventil aktiviert |
| 0x0010 | P0010 | P0010 Nockenwellenversteller Einlass Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0011 | P0011 | P0011 Nockenwellensteuerung Einlass (Bank 1) - Adaptionswert Spätposition unplausibel oder Leistungsproblem |
| 0x0012 | P0012 | P0012 Nockenwellensteuerung Einlass (Bank 1) - Regelfehler, unplausible Position |
| 0x0013 | P0013 | P0013 Nockenwellenversteller Auslass Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0014 | P0014 | P0014 Nockenwellensteuerung Auslass (Bank 1) - Adaptionswert Frühposition unplausibel oder Leistungsproblem |
| 0x0015 | P0015 | P0015 Nockenwellensteuerung Auslass (Bank 1) - Regelfehler, unplausible Position |
| 0x0016 | P0016 | P0016 Kurbelwellenstellung - Nockenwellenstellung Einlass (Bank 1) - Korrelationsfehler |
| 0x0017 | P0017 | P0017 Kurbelwellenstellung - Nockenwellenstellung Auslass (Bank 1) - Korrelationsfehler |
| 0x0018 | P0018 | P0018 Kurbelwellenstellung - Nockenwellenstellung Einlass (Bank 2) - Korrelationsfehler |
| 0x0019 | P0019 | P0019 Kurbelwellenstellung - Nockenwellenstellung Auslass (Bank 2) - Korrelationsfehler |
| 0x001A | P001A | P001A Nockenwellenprofil Einlass Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x001B | P001B | P001B Nockenwellenprofil Einlass Steuerkreis (Bank 1) - niedrig |
| 0x001C | P001C | P001C Nockenwellenprofil Einlass Steuerkreis (Bank 1) - hoch |
| 0x001D | P001D | P001D Nockenwellenprofil Einlass Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x001E | P001E | P001E Nockenwellenprofil Einlass Steuerkreis (Bank 2) - niedrig |
| 0x001F | P001F | P001F Nockenwellenprofil Einlass Steuerkreis (Bank 2) - hoch |
| 0x0020 | P0020 | P0020 Nockenwellenversteller Einlass Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0021 | P0021 | P0021 Nockenwellensteuerung Einlass (Bank 2) - Adaptionswert Spätposition unplausibel oder Leistungsproblem |
| 0x0022 | P0022 | P0022 Nockenwellensteuerung Einlass (Bank 2) - Regelfehler, unplausible Position |
| 0x0023 | P0023 | P0023 Nockenwellenversteller Schaltkreis Auslass (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0024 | P0024 | P0024 Nockenwellensteuerung Auslass (Bank 2) - Adaptionswert Frühposition unplausibel oder Leistungsproblem |
| 0x0025 | P0025 | P0025 Nockenwellensteuerung Auslass (Bank 2) - Regelfehler, unplausible Position |
| 0x0026 | P0026 | P0026 Einlassventil Versteller/Aktuator Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem  |
| 0x0027 | P0027 | P0027 Auslassventil Versteller/Aktuator Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0028 | P0028 | P0028 Einlassventil Versteller/Aktuator Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0029 | P0029 | P0029 Auslassventil Versteller/Aktuator Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x002A | P002A | P002A Nockenwellenprofil Auslass Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x002B | P002B | P002B Nockenwellenprofil Auslass Steuerkreis (Bank 1) - niedrig |
| 0x002C | P002C | P002C Nockenwellenprofil Auslass Steuerkreis (Bank 1) - hoch |
| 0x002D | P002D | P002D Nockenwellenprofil Auslass Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x002E | P002E | P002E Nockenwellenprofil Auslass Steuerkreis (Bank 2) - niedrig |
| 0x002F | P002F | P002F Nockenwellenprofil Auslass Steuerkreis (Bank 2) - hoch |
| 0x0030 | P0030 | P0030 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0031 | P0031 | P0031 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, vor Katalysator) - niedrig |
| 0x0032 | P0032 | P0032 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, vor Katalysator) - hoch |
| 0x0033 | P0033 | P0033 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0034 | P0034 | P0034 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 1) - niedrig |
| 0x0035 | P0035 | P0035 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 1) - hoch |
| 0x0036 | P0036 | P0036 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0037 | P0037 | P0037 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, nach Katalysator) - niedrig |
| 0x0038 | P0038 | P0038 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, nach Katalysator) - hoch |
| 0x0039 | P0039 | P0039 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x003A | P003A | P003A Turbolader/Verdichter Ladedruckregelung (Bank 1) - gelernter Adaptionswert überschritten |
| 0x003B | P003B | P003B Turbolader/Verdichter Ladedruckregelung (Bank 2) - gelernter Adaptionswert überschritten |
| 0x003C | P003C | P003C Nockenwellenprofil Einlass (Bank 1) - Leistungsproblem oder klemmt offen |
| 0x003D | P003D | P003D Nockenwellenprofil Einlass (Bank 1) - klemmt geschlossen |
| 0x003E | P003E | P003E Nockenwellenprofil Einlass (Bank 2) - Leistungsproblem oder klemmt offen |
| 0x003F | P003F | P003F Nockenwellenprofil Einlass (Bank 2) - klemmt geschlossen |
| 0x0040 | P0040 | P0040 Lambdasonden Signal Bank 1 vor Katalysator / Bank 2 vor Katalysator - vertauscht  |
| 0x0041 | P0041 | P0041 Lambdasonden Signal Bank 1 nach Katalysator / Bank 2 nach Katalysator - vertauscht  |
| 0x0042 | P0042 | P0042 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, Sonde 3)  - Fehlfunktion oder Leitungsunterbrechung |
| 0x0043 | P0043 | P0043 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, Sonde 3) - niedrig |
| 0x0044 | P0044 | P0044 Beheizte Lambdasonde Heizungssteuerkreis (Bank 1, Sonde 3) - hoch |
| 0x0045 | P0045 | P0045 Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0046 | P0046 | P0046 Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0047 | P0047 | P0047 Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 1) - niedrig |
| 0x0048 | P0048 | P0048 Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 1) - hoch |
| 0x0049 | P0049 | P0049 Turbolader/Verdichter Turbine (Bank 1) - Überdrehzahl |
| 0x004A | P004A | P004A Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x004B | P004B | P004B Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x004C | P004C | P004C Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 2) - niedrig |
| 0x004D | P004D | P004D Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 2) - hoch |
| 0x004E | P004E | P004E Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x004F | P004F | P004F Turbolader/Verdichter Ladedruckregelung Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x0050 | P0050 | P0050 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0051 | P0051 | P0051 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, vor Katalysator) - niedrig |
| 0x0052 | P0052 | P0052 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, vor Katalysator) - hoch |
| 0x0053 | P0053 | P0053 Beheizte Lambdasonde Heizwiderstand (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0054 | P0054 | P0054 Beheizte Lambdasonde Heizwiderstand (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0055 | P0055 | P0055 Beheizte Lambdasonde Heizwiderstand (Bank 1, Sonde 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0056 | P0056 | P0056 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0057 | P0057 | P0057 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, nach Katalysator) - niedrig |
| 0x0058 | P0058 | P0058 Beheizte Lambdasonde Heizungssteuerkreis(Bank 2, nach Katalysator) - hoch |
| 0x0059 | P0059 | P0059 Beheizte Lambdasonde Heizwiderstand (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x005A | P005A | P005A Nockenwellenprofil Auslass (Bank 1) - Leistungsproblem oder klemmt offen |
| 0x005B | P005B | P005B Nockenwellenprofil Auslass (Bank 1) - klemmt geschlossen |
| 0x005C | P005C | P005C Nockenwellenprofil Auslass (Bank 2) - Leistungsproblem oder klemmt offen |
| 0x005D | P005D | P005D Nockenwellenprofil Auslass (Bank 2) - klemmt geschlossen |
| 0x005E | P005E | P005E Turbolader/Verdichter Ladedruckregelung Versorgungsspannungskreis (Bank 2) - niedrig |
| 0x005F | P005F | P005F Turbolader/Verdichter Ladedruckregelung Versorgungsspannungskreis (Bank 2) - hoch |
| 0x0060 | P0060 | P0060 Beheizte Lambdasonde Heizwiderstand (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0061 | P0061 | P0061 Beheizte Lambdasonde Heizwiderstand (Bank 2, Sonde 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0062 | P0062 | P0062 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, Sonde 3)  - Fehlfunktion oder Leitungsunterbrechung |
| 0x0063 | P0063 | P0063 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, Sonde 3) - niedrig |
| 0x0064 | P0064 | P0064 Beheizte Lambdasonde Heizungssteuerkreis (Bank 2, Sonde 3) - hoch |
| 0x0065 | P0065 | P0065 Luftumfasstes Einspritzventil Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0066 | P0066 | P0066 Luftumfasstes Einspritzventil Steuerkreis - Fehlfunktion oder Schaltkreis niedrig |
| 0x0067 | P0067 | P0067 Luftumfasstes Einspritzventil Steuerkreis - hoch |
| 0x0068 | P0068 | P0068 Absoluter Saugrohrdruck, Luftmassendurchsatz / Drosselklappenstellung - Korrelationsfehler |
| 0x0069 | P0069 | P0069 Absoluter Saugrohrdruck / barometrischer Druck - Korrelationsfehler |
| 0x006A | P006A | P006A Absoluter Saugrohrdruck / Luftmassen- oder Luftmengendurchsatz (Bank 1) - Korrelationsfehler |
| 0x006B | P006B | P006B Absoluter Saugrohrdruck / Abgasdruck - Korrelationsfehler |
| 0x006C | P006C | P006C Absoluter Saugrohrdruck / Turbolader/Verdichter Eingangsdruck - Korrelationsfehler |
| 0x006D | P006D | P006D Umgebungsdruck / Turbolader/Verdichter Eingangsdruck - Korrelationsfehler |
| 0x006E | P006E | P006E Turbolader/Verdichter Ladedruckregelung Versorgungsspannungskreis (Bank 1) - niedrig |
| 0x006F | P006F | P006F Turbolader/Verdichter Ladedruckregelung Versorgungsspannungskreis (Bank 1) - hoch |
| 0x0070 | P0070 | P0070 Umgebungstemperaturfühler Schaltkreis -  Fehlfunktion oder Leitungsunterbrechung |
| 0x0071 | P0071 | P0071 Umgebungstemperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0072 | P0072 | P0072 Umgebungstemperaturfühler Schaltkreis - niedrig |
| 0x0073 | P0073 | P0073 Umgebungstemperaturfühler Schaltkreis - hoch |
| 0x0074 | P0074 | P0074 Umgebungstemperaturfühler Schaltkreis - sporadisch |
| 0x0075 | P0075 | P0075 Einlassventil Versteller/Aktuator Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0076 | P0076 | P0076 Einlassventil Versteller/Aktuator Schaltkreis (Bank 1) - niedrig |
| 0x0077 | P0077 | P0077 Einlassventil Versteller/Aktuator Schaltkreis (Bank 1) - hoch |
| 0x0078 | P0078 | P0078 Auslassventil Versteller/Aktuator Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0079 | P0079 | P0079 Auslassventil Versteller/Aktuator Schaltkreis (Bank 1) - niedrig |
| 0x007A | P007A | P007A Ladeluftkühler Temperaturfühler Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x007B | P007B | P007B Ladeluftkühler Temperaturfühler Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x007C | P007C | P007C Ladeluftkühler Temperaturfühler Schaltkreis (Bank 1) - niedrig |
| 0x007D | P007D | P007D Ladeluftkühler Temperaturfühler Schaltkreis (Bank 1) - hoch |
| 0x007E | P007E | P007E Ladeluftkühler Temperaturfühler Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x007F | P007F | P007F Ladeluftkühler Temperaturfühler Bank 1 / Bank 2 - Korrelationsfehler |
| 0x0080 | P0080 | P0080 Auslassventil Versteller/Aktuator Schaltkreis (Bank 1) - hoch |
| 0x0081 | P0081 | P0081 Einlassventil Versteller/Aktuator Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0082 | P0082 | P0082 Einlassventil Versteller/Aktuator Schaltkreis (Bank 2) - niedrig |
| 0x0083 | P0083 | P0083 Einlassventil Versteller/Aktuator Schaltkreis (Bank 2) - hoch |
| 0x0084 | P0084 | P0084 Auslassventil Versteller/Aktuator Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0085 | P0085 | P0085 Auslassventil Versteller/Aktuator Schaltkreis (Bank 2) - niedrig |
| 0x0086 | P0086 | P0086 Auslassventil Versteller/Aktuator Schaltkreis (Bank 2) - hoch |
| 0x0087 | P0087 | P0087 Kraftstoffeinspritzleiste/-system (Bank 1) - Druck zu niedrig |
| 0x0088 | P0088 | P0088 Kraftstoffeinspritzleiste/-system (Bank 1) - Druck zu hoch |
| 0x0089 | P0089 | P0089 Kraftstoffdruckregler 1 - Leistungsproblem |
| 0x008A | P008A | P008A Niederdruck-Kraftstoffsystem - Druck zu niedrig |
| 0x008B | P008B | P008B Niederdruck-Kraftstoffsystem - Druck zu hoch |
| 0x008C | P008C | P008C Kraftstoffkühlerpumpe Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x008D | P008D | P008D Kraftstoffkühlerpumpe Steuerkreis - niedrig |
| 0x008E | P008E | P008E Kraftstoffkühlerpumpe Steuerkreis - hoch |
| 0x008F | P008F | P008F Motorkühlmitteltemperatur / Kraftstofftemperatur - Korrelationsfehler |
| 0x0090 | P0090 | P0090 Kraftstoffdruckregler 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0091 | P0091 | P0091 Kraftstoffdruckregler 1 Steuerkreis - niedrig |
| 0x0092 | P0092 | P0092 Kraftstoffdruckregler 1 Steuerkreis - hoch |
| 0x0093 | P0093 | P0093 Kraftstoffsystem - großes Leck entdeckt |
| 0x0094 | P0094 | P0094 Kraftstoffsystem - kleines Leck entdeckt |
| 0x0095 | P0095 | P0095 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0096 | P0096 | P0096 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0097 | P0097 | P0097 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 1) - niedrig |
| 0x0098 | P0098 | P0098 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 1) - hoch |
| 0x0099 | P0099 | P0099 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x009A | P009A | P009A Ansauglufttemperatur / Umgebungstemperatur- Korrelationsfehler |
| 0x009B | P009B | P009B Kraftstoffdruckminderung Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x009C | P009C | P009C Kraftstoffdruckminderung Steuerkreis - niedrig |
| 0x009D | P009D | P009D Kraftstoffdruckminderung Steuerkreis - hoch |
| 0x009E | P009E | P009E Kraftstoffdruckminderung - Leistungsproblem oder klemmt offen |
| 0x009F | P009F | P009F Kraftstoffdruckminderung - klemmt geschlossen |
| 0x00A0 | P00A0 | P00A0 Ladeluftkühler Temperaturfühler Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x00A1 | P00A1 | P00A1 Ladeluftkühler Temperaturfühler Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x00A2 | P00A2 | P00A2 Ladeluftkühler Temperaturfühler Schaltkreis (Bank 2) - niedrig |
| 0x00A3 | P00A3 | P00A3 Ladeluftkühler Temperaturfühler Schaltkreis (Bank 2) - hoch |
| 0x00A4 | P00A4 | P00A4 Ladeluftkühler Temperaturfühler Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x00A5 | P00A5 | P00A5 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x00A6 | P00A6 | P00A6 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x00A7 | P00A7 | P00A7 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 2) - niedrig |
| 0x00A8 | P00A8 | P00A8 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 2) - hoch |
| 0x00A9 | P00A9 | P00A9 Ansauglufttemperaturfühler 2 Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x00AA | P00AA | P00AA Ansauglufttemperaturfühler 1 Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x00AB | P00AB | P00AB Ansauglufttemperaturfühler 1 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x00AC | P00AC | P00AC Ansauglufttemperaturfühler 1 Schaltkreis (Bank 2) - niedrig |
| 0x00AD | P00AD | P00AD Ansauglufttemperaturfühler 1 Schaltkreis (Bank 2) - hoch |
| 0x00AE | P00AE | P00AE Ansauglufttemperaturfühler 1 Schaltkreis (Bank 2) - sporadisch |
| 0x00AF | P00AF | P00AF Turbolader/Verdichter Ladedruckregelung (Bank 1) - Leistungsproblem |
| 0x00B0 | P00B0 | P00B0 Turbolader/Verdichter Ladedruckregelung (Bank 2) - Leistungsproblem |
| 0x00B1 | P00B1 | P00B1 Kühlmitteltemperaturfühler Kühleraustritt Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x00B2 | P00B2 | P00B2 Kühlmitteltemperaturfühler Kühleraustritt Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x00B3 | P00B3 | P00B3 Kühlmitteltemperaturfühler Kühleraustritt Schaltkreis - niedrig |
| 0x00B4 | P00B4 | P00B4 Kühlmitteltemperaturfühler Kühleraustritt Schaltkreis - hoch |
| 0x00B5 | P00B5 | P00B5 Kühlmitteltemperaturfühler Kühleraustritt Schaltkreis - sporadisch/unregelmäßig |
| 0x00B6 | P00B6 | P00B6 Kühlmitteltemperatur Kühleraustritt / Motorkühlmitteltemperatur - Korrelationsfehler |
| 0x00B7 | P00B7 | P00B7 Motorkühlmittel - Durchsatz niedrig / Leistungsproblem |
| 0x00B8 | P00B8 | P00B8 Absoluter Saugrohrdruck / Luftmassen- oder Luftmengendurchsatz (Bank 2) - Korrelationsfehler |
| 0x00B9 | P00B9 | P00B9 Niederdruck-Kraftstoffsystem - Druck zu niedrig, niedrige Umgebungstemperatur |
| 0x00BA | P00BA | P00BA Niedriger Kraftstoffdruck - Zwangs-Leistungsbegrenzung |
| 0x00BB | P00BB | P00BB Einspritzventil Durchsatz zu gering - Zwangs-Leistungsbegrenzung |
| 0x00BC | P00BC | P00BC Luftmassen- oder Luftmengendurchsatz Messbereichs- oder Leistungsproblem (Bank 1) - Durchsatz zu niedrig |
| 0x00BD | P00BD | P00BD Luftmassen- oder Luftmengendurchsatz Messbereichs- oder Leistungsproblem (Bank 1) - Durchsatz zu hoch |
| 0x00BE | P00BE | P00BE Luftmassen- oder Luftmengendurchsatz Messbereichs- oder Leistungsproblem (Bank 2) - Durchsatz zu niedrig |
| 0x00BF | P00BF | P00BF Luftmassen- oder Luftmengendurchsatz Messbereichs- oder Leistungsproblem (Bank 2) - Durchsatz zu hoch |
| 0x00C0 | P00C0 | P00C0 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x00C1 | P00C1 | P00C1 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 2) - niedrig |
| 0x00C2 | P00C2 | P00C2 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 2) - hoch |
| 0x00C3 | P00C3 | P00C3 Turbolader/Verdichter Bypassventil Steuerkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x00C4 | P00C4 | P00C4 Turbolader/Verdichter Bypassventil (Bank 2) - mechanischer Fehler |
| 0x00C5 | P00C5 | P00C5 Turbolader/Verdichter Turbine (Bank 2) - Überdrehzahl |
| 0x00C6 | P00C6 | P00C6 Kraftstoffeinspritzdruck - zu niedrig bei Motor 'START' |
| 0x00C7 | P00C7 | P00C7 Ansaugluftdruck Messsystem - Mehrfachsensor Korrelationsfehler |
| 0x00C8 | P00C8 | P00C8 Kraftstoffdruckregler Magnetventil Versorgungsspannung Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x00C9 | P00C9 | P00C9 Kraftstoffdruckregler Magnetventil Versorgungsspannung Steuerkreis - niedrig |
| 0x00CA | P00CA | P00CA Kraftstoffdruckregler Magnetventil Versorgungsspannung Steuerkreis - hoch |
| 0x00CB | P00CB | P00CB Kraftstoffvolumenregler Magnetventil Versorgungsspannung Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x00CC | P00CC | P00CC Kraftstoffvolumenregler Magnetventil Versorgungsspannung Steuerkreis - niedrig |
| 0x00CD | P00CD | P00CD Kraftstoffvolumenregler Magnetventil Versorgungsspannung Steuerkreis - hoch |
| 0x00CE | P00CE | P00CE Ansauglufttemperatur Messsystem - Mehrfachsensor Korrelationsfehler |
| 0x00CF | P00CF | P00CF Umgebungsdruck / Turbolader/Verdichter Ladedrucksensor (Bank 1) - Korrelationsfehler |
| 0x00D0 | P00D0 | P00D0 Umgebungsdruck / Turbolader/Verdichter Ladedrucksensor (Bank 2) - Korrelationsfehler |
| 0x0100 | P0100 | P0100 Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0101 | P0101 | P0101 Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0102 | P0102 | P0102 Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 1) - niedrig |
| 0x0103 | P0103 | P0103 Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 1) - hoch |
| 0x0104 | P0104 | P0104 Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 1) - sporadisch |
| 0x0105 | P0105 | P0105 Absoluter Saugrohrdruck / barometrischer Druck - Fehlfunktion |
| 0x0106 | P0106 | P0106 Absoluter Saugrohrdruck / barometrischer Druck - Messbereichs- oder Leistungsproblem |
| 0x0107 | P0107 | P0107 Absoluter Saugrohrdruck / barometrischer Druck - niedrig |
| 0x0108 | P0108 | P0108 Absoluter Saugrohrdruck / barometrischer Druck - hoch |
| 0x0109 | P0109 | P0109 Absoluter Saugrohrdruck / barometrischer Druck - sporadisch |
| 0x010A | P010A | P010A Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x010B | P010B | P010B Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x010C | P010C | P010C Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 2) - niedrig |
| 0x010D | P010D | P010D Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 2) - hoch |
| 0x010E | P010E | P010E Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x010F | P010F | P010F Luftmassen- oder Luftmengenmesser Bank 1 / Bank 2 - Korrelationsfehler |
| 0x0110 | P0110 | P0110 Ansauglufttemperaturfühler 1 Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0111 | P0111 | P0111 Ansauglufttemperaturfühler 1 Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0112 | P0112 | P0112 Ansauglufttemperaturfühler 1 Schaltkreis (Bank 1) - niedrig |
| 0x0113 | P0113 | P0113 Ansauglufttemperaturfühler 1 Schaltkreis (Bank 1) - hoch |
| 0x0114 | P0114 | P0114 Ansauglufttemperaturfühler 1 Schaltkreis (Bank 1) - sporadisch |
| 0x0115 | P0115 | P0115 Motorkühlmitteltemperaturfühler 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0116 | P0116 | P0116 Motorkühlmitteltemperaturfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0117 | P0117 | P0117 Motorkühlmitteltemperaturfühler 1 Schaltkreis - niedrig |
| 0x0118 | P0118 | P0118 Motorkühlmitteltemperaturfühler 1 Schaltkreis - hoch |
| 0x0119 | P0119 | P0119 Motorkühlmitteltemperaturfühler 1 Schaltkreis - sporadisch |
| 0x011A | P011A | P011A Motorkühlmitteltemperaturfühler 1/2 - Korrelationsfehler |
| 0x011B | P011B | P011B Motorkühlmitteltemperatur / Ansauglufttemperatur - Korrelationsfehler |
| 0x011C | P011C | P011C Ladeluftkühlertemperatur / Ansauglufttemperatur (Bank 1) - Korrelationsfehler |
| 0x011D | P011D | P011D Ladeluftkühlertemperatur / Ansauglufttemperatur (Bank 2) - Korrelationsfehler |
| 0x011E | P011E | P011E Motorkühlmitteltemperatur 1 / Umgebungstemperatur - Korrelationsfehler |
| 0x011F | P011F | P011F Motorkühlmitteltemperatur 2 / Umgebungstemperatur - Korrelationsfehler |
| 0x0120 | P0120 | P0120 Drosselklappenpotentiometer 1 Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0121 | P0121 | P0121 Drosselklappenpotentiometer 1 Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0122 | P0122 | P0122 Drosselklappenpotentiometer 1 Schaltkreis (Bank 1) - niedrig |
| 0x0123 | P0123 | P0123 Drosselklappenpotentiometer 1 Schaltkreis (Bank 1) - hoch |
| 0x0124 | P0124 | P0124 Drosselklappenpotentiometer 1 Schaltkreis (Bank 1) - sporadisch |
| 0x0125 | P0125 | P0125 Kühlmitteltemperatur - zu niedrig für Lambdaregelung |
| 0x0126 | P0126 | P0126 Kühlmitteltemperatur - zu niedrig für stetigen Betrieb |
| 0x0127 | P0127 | P0127 Ansauglufttemperatur - zu hoch |
| 0x0128 | P0128 | P0128 Kühlmittelthermostat (Kühlmitteltemperatur unterhalb Thermostat Regeltemperatur) |
| 0x0129 | P0129 | P0129 Umgebungsdruck zu niedrig |
| 0x012A | P012A | P012A Turbolader/Verdichter Eingangsdrucksensor Schaltkreis (nach Drosselklappe) - Fehlfunktion oder Leitungsunterbrechung |
| 0x012B | P012B | P012B Turbolader/Verdichter Eingangsdrucksensor Schaltkreis (nach Drosselklappe) - Messbereichs- oder Leistungsproblem |
| 0x012C | P012C | P012C Turbolader/Verdichter Eingangsdrucksensor Schaltkreis (nach Drosselklappe) - niedrig |
| 0x012D | P012D | P012D Turbolader/Verdichter Eingangsdrucksensor Schaltkreis (nach Drosselklappe) - hoch |
| 0x012E | P012E | P012E Turbolader/Verdichter Eingangsdrucksensor Schaltkreis (nach Drosselklappe) - sporadisch/unregelmäßig |
| 0x0130 | P0130 | P0130 Lambdasonde Schaltkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0131 | P0131 | P0131 Lambdasonde Schaltkreis (Bank 1, vor Katalysator) - Spannung niedrig |
| 0x0132 | P0132 | P0132 Lambdasonde Schaltkreis (Bank 1, vor Katalysator) - Spannung hoch |
| 0x0133 | P0133 | P0133 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion |
| 0x0134 | P0134 | P0134 Lambdasonde (Bank 1, vor Katalysator) - keine Aktivität festzustellen |
| 0x0135 | P0135 | P0135 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x0136 | P0136 | P0136 Lambdasonde Schaltkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0137 | P0137 | P0137 Lambdasonde Schaltkreis (Bank 1, nach Katalysator) - Spannung niedrig |
| 0x0138 | P0138 | P0138 Lambdasonde Schaltkreis (Bank 1, nach Katalysator) - Spannung hoch |
| 0x0139 | P0139 | P0139 Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion |
| 0x013A | P013A | P013A Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion von Fett nach Mager |
| 0x013B | P013B | P013B Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion von Mager nach Fett |
| 0x013C | P013C | P013C Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion von Fett nach Mager |
| 0x013D | P013D | P013D Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion von Mager nach Fett |
| 0x013E | P013E | P013E Lambdasonde (Bank 1, nach Katalysator) - verzögerte Reaktion von Fett nach Mager |
| 0x013F | P013F | P013F Lambdasonde (Bank 1, nach Katalysator) - verzögerte Reaktion von Mager nach Fett |
| 0x0140 | P0140 | P0140 Lambdasonde (Bank 1, nach Katalysator) - keine Aktivität festzustellen |
| 0x0141 | P0141 | P0141 Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x0142 | P0142 | P0142 Lambdasonde Schaltkreis (Bank 1, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0143 | P0143 | P0143 Lambdasonde Schaltkreis (Bank 1, Sensor 3) - Spannung niedrig |
| 0x0144 | P0144 | P0144 Lambdasonde Schaltkreis (Bank 1, Sensor 3) - Spannung hoch |
| 0x0145 | P0145 | P0145 Lambdasonde (Bank 1, Sensor 3) - langsame Reaktion |
| 0x0146 | P0146 | P0146 Lambdasonde (Bank 1, Sensor 3) - keine Aktivität festzustellen |
| 0x0147 | P0147 | P0147 Lambdasonde Heizungsschaltkreis (Bank 1, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0148 | P0148 | P0148 Kraftstoffversorgung - Fehler |
| 0x0149 | P0149 | P0149 Kraftstoff-Einspritzzeitpunkt - Fehler |
| 0x014A | P014A | P014A Lambdasonde (Bank 2, nach Katalysator) - verzögerte Reaktion von Fett nach Mager |
| 0x014B | P014B | P014B Lambdasonde (Bank 2, nach Katalysator) - verzögerte Reaktion von Mager nach Fett |
| 0x014C | P014C | P014C Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion von Fett nach Mager |
| 0x014D | P014D | P014D Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion von Mager nach Fett |
| 0x014E | P014E | P014E Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion von Mager nach Fett |
| 0x014F | P014F | P014F Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion von Mager nach Fett |
| 0x0150 | P0150 | P0150 Lambdasonde Schaltkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0151 | P0151 | P0151 Lambdasonde Schaltkreis (Bank 2, vor Katalysator) - Spannung niedrig |
| 0x0152 | P0152 | P0152 Lambdasonde Schaltkreis (Bank 2, vor Katalysator) - Spannung hoch |
| 0x0153 | P0153 | P0153 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion |
| 0x0154 | P0154 | P0154 Lambdasonde (Bank 2, vor Katalysator) - keine Aktivität festzustellen |
| 0x0155 | P0155 | P0155 Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x0156 | P0156 | P0156 Lambdasonde Schaltkreis (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0157 | P0157 | P0157 Lambdasonde Schaltkreis (Bank 2, nach Katalysator) - Spannung niedrig |
| 0x0158 | P0158 | P0158 Lambdasonde Schaltkreis (Bank 2, nach Katalysator) - Spannung hoch |
| 0x0159 | P0159 | P0159 Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion |
| 0x015A | P015A | P015A Lambdasonde (Bank 1, vor Katalysator) - verzögerte Reaktion von Fett nach Mager |
| 0x015B | P015B | P015B Lambdasonde (Bank 1, vor Katalysator) - verzögerte Reaktion von Mager nach Fett |
| 0x015C | P015C | P015C Lambdasonde (Bank 2, vor Katalysator) - verzögerte Reaktion von Fett nach Mager |
| 0x015D | P015D | P015D Lambdasonde (Bank 2, vor Katalysator) - verzögerte Reaktion von Mager nach Fett |
| 0x0160 | P0160 | P0160 Lambdasonde (Bank 2, nach Katalysator) - keine Aktivität festzustellen |
| 0x0161 | P0161 | P0161 Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x0162 | P0162 | P0162 Lambdasonde Schaltkreis (Bank 2, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0163 | P0163 | P0163 Lambdasonde Schaltkreis (Bank 2, Sensor 3) - Spannung niedrig |
| 0x0164 | P0164 | P0164 Lambdasonde Schaltkreis (Bank 2, Sensor 3) - Spannung hoch |
| 0x0165 | P0165 | P0165 Lambdasonde (Bank 2, Sensor 3) - langsame Reaktion |
| 0x0166 | P0166 | P0166 Lambdasonde (Bank 2, Sensor 3) - keine Aktivität festzustellen |
| 0x0167 | P0167 | P0167 Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0168 | P0168 | P0168 Kraftstofftemperatur - zu hoch |
| 0x0169 | P0169 | P0169 Kraftstoffzusammensetzung - fehlerhaft |
| 0x0170 | P0170 | P0170 Gemischregelung (Bank 1) - Fehlfunktion |
| 0x0171 | P0171 | P0171 Gemischregelung (Bank 1) - System zu mager |
| 0x0172 | P0172 | P0172 Gemischregelung (Bank 1) - System zu fett |
| 0x0173 | P0173 | P0173 Gemischregelung (Bank 2) - Fehlfunktion |
| 0x0174 | P0174 | P0174 Gemischregelung (Bank 2) - System zu mager |
| 0x0175 | P0175 | P0175 Gemischregelung (Bank 2) - System zu fett |
| 0x0176 | P0176 | P0176 Messsonde Kraftstoffzusammensetzung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0177 | P0177 | P0177 Messsonde Kraftstoffzusammensetzung Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0178 | P0178 | P0178 Messsonde Kraftstoffzusammensetzung Schaltkreis - niedrig |
| 0x0179 | P0179 | P0179 Messsonde Kraftstoffzusammensetzung Schaltkreis - hoch |
| 0x0180 | P0180 | P0180 Kraftstofftemperaturfühler Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0181 | P0181 | P0181 Kraftstofftemperaturfühler Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0182 | P0182 | P0182 Kraftstofftemperaturfühler Schaltkreis (Bank 1) - niedrig |
| 0x0183 | P0183 | P0183 Kraftstofftemperaturfühler Schaltkreis (Bank 1) - hoch |
| 0x0184 | P0184 | P0184 Kraftstofftemperaturfühler Schaltkreis (Bank 1) - sporadisch |
| 0x0185 | P0185 | P0185 Kraftstofftemperaturfühler Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0186 | P0186 | P0186 Kraftstofftemperaturfühler Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0187 | P0187 | P0187 Kraftstofftemperaturfühler Schaltkreis (Bank 2) - niedrig |
| 0x0188 | P0188 | P0188 Kraftstofftemperaturfühler Schaltkreis (Bank 2) - hoch |
| 0x0189 | P0189 | P0189 Kraftstofftemperaturfühler Schaltkreis (Bank 2) - sporadisch |
| 0x018A | P018A | P018A Kraftstoffdrucksensor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x018B | P018B | P018B Kraftstoffdrucksensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x018C | P018C | P018C Kraftstoffdrucksensor 2 Schaltkreis - niedrig |
| 0x018D | P018D | P018D Kraftstoffdrucksensor 2 Schaltkreis - hoch |
| 0x018E | P018E | P018E Kraftstoffdrucksensor 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x018F | P018F | P018F Kraftstoffsystem - Überdruckventil häufige Aktivierung |
| 0x0190 | P0190 | P0190 Kraftstoffeinspritzleiste Drucksensor 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0191 | P0191 | P0191 Kraftstoffeinspritzleiste Drucksensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0192 | P0192 | P0192 Kraftstoffeinspritzleiste Drucksensor 1 Schaltkreis - niedrig |
| 0x0193 | P0193 | P0193 Kraftstoffeinspritzleiste Drucksensor 1 Schaltkreis - hoch |
| 0x0194 | P0194 | P0194 Kraftstoffeinspritzleiste Drucksensor 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x0195 | P0195 | P0195 Motoröltemperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0196 | P0196 | P0196 Motoröltemperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0197 | P0197 | P0197 Motoröltemperaturfühler Schaltkreis - niedrig |
| 0x0198 | P0198 | P0198 Motoröltemperaturfühler Schaltkreis - hoch |
| 0x0199 | P0199 | P0199 Motoröltemperaturfühler Schaltkreis - sporadisch/unregelmäßig |
| 0x0200 | P0200 | P0200 Einspritzventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0201 | P0201 | P0201 Einspritzventil Zylinder 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0202 | P0202 | P0202 Einspritzventil Zylinder 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0203 | P0203 | P0203 Einspritzventil Zylinder 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0204 | P0204 | P0204 Einspritzventil Zylinder 4 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0205 | P0205 | P0205 Einspritzventil Zylinder 5 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0206 | P0206 | P0206 Einspritzventil Zylinder 6 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0207 | P0207 | P0207 Einspritzventil Zylinder 7 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0208 | P0208 | P0208 Einspritzventil Zylinder 8 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0209 | P0209 | P0209 Einspritzventil Zylinder 9 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x020A | P020A | P020A Einspritzzeitregelung Zylinder 1 - Fehlfunktion |
| 0x020B | P020B | P020B Einspritzzeitregelung Zylinder 2 - Fehlfunktion |
| 0x020C | P020C | P020C Einspritzzeitregelung Zylinder 3 - Fehlfunktion |
| 0x020D | P020D | P020D Einspritzzeitregelung Zylinder 4 - Fehlfunktion |
| 0x020E | P020E | P020E Einspritzzeitregelung Zylinder 5 - Fehlfunktion |
| 0x020F | P020F | P020F Einspritzzeitregelung Zylinder 6 - Fehlfunktion |
| 0x0210 | P0210 | P0210 Einspritzventil Zylinder 10 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0211 | P0211 | P0211 Einspritzventil Zylinder 11 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0212 | P0212 | P0212 Einspritzventil Zylinder 12 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0213 | P0213 | P0213 Kaltstart Einspritventil 1 - Fehlfunktion |
| 0x0214 | P0214 | P0214 Kaltstart Einspritzventil 2 - Fehlfunktion |
| 0x0215 | P0215 | P0215 Absperrmagnetventil Motor - Fehlfunktion |
| 0x0216 | P0216 | P0216 Einspritzzeitregelung - Fehlfunktion |
| 0x0217 | P0217 | P0217 Motorkühlmitteltemperatur - zu hoch |
| 0x0218 | P0218 | P0218 Getriebeöltemperatur - zu hoch |
| 0x0219 | P0219 | P0219 Motordrehzahl - zu hoch |
| 0x021A | P021A | P021A Einspritzzeitregelung Zylinder 7 - Fehlfunktion |
| 0x021B | P021B | P021B Einspritzzeitregelung Zylinder 8 - Fehlfunktion |
| 0x021C | P021C | P021C Einspritzzeitregelung Zylinder 9 - Fehlfunktion |
| 0x021D | P021D | P021D Einspritzzeitregelung Zylinder 10 - Fehlfunktion |
| 0x021E | P021E | P021E Einspritzzeitregelung Zylinder 11 - Fehlfunktion |
| 0x021F | P021F | P021F Einspritzzeitregelung Zylinder 12 - Fehlfunktion |
| 0x0220 | P0220 | P0220 Drosselklappenpotentiometer 2 Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0221 | P0221 | P0221 Drosselklappenpotentiometer 2 Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0222 | P0222 | P0222 Drosselklappenpotentiometer 2 Schaltkreis (Bank 1) - niedrig |
| 0x0223 | P0223 | P0223 Drosselklappenpotentiometer 2 Schaltkreis (Bank 1) - hoch |
| 0x0224 | P0224 | P0224 Drosselklappenpotentiometer 2 Schaltkreis (Bank 1) - sporadisch |
| 0x0225 | P0225 | P0225 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0226 | P0226 | P0226 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0227 | P0227 | P0227 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - niedrig |
| 0x0228 | P0228 | P0228 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - hoch |
| 0x0229 | P0229 | P0229 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - sporadisch |
| 0x022A | P022A | P022A Ladeluftkühler Bypassregelung Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x022B | P022B | P022B Ladeluftkühler Bypassregelung Schaltkreis (Bank 1) - niedrig |
| 0x022C | P022C | P022C Ladeluftkühler Bypassregelung Schaltkreis (Bank 1) - hoch |
| 0x022D | P022D | P022D Ladeluftkühler Bypassregelung Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x022E | P022E | P022E Ladeluftkühler Bypassregelung Schaltkreis (Bank 2) - niedrig |
| 0x022F | P022F | P022F Ladeluftkühler Bypassregelung Schaltkreis - hoch |
| 0x0230 | P0230 | P0230 Kraftstoffpumpe Primärschaltkreiskreis - Fehlfunktion |
| 0x0231 | P0231 | P0231 Kraftstoffpumpe Sekundärschaltkreis - niedrig |
| 0x0232 | P0232 | P0232 Kraftstoffpumpe Sekundärschaltkreis - hoch |
| 0x0233 | P0233 | P0233 Kraftstoffpumpe Sekundärschaltkreis - sporadisch |
| 0x0234 | P0234 | P0234 Turbolader/Verdichter (Bank 1) - Ladedruck zu hoch |
| 0x0235 | P0235 | P0235 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0236 | P0236 | P0236 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0237 | P0237 | P0237 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 1) - niedrig |
| 0x0238 | P0238 | P0238 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 1) - hoch |
| 0x0239 | P0239 | P0239 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x023A | P023A | P023A Ladeluftkühler Kühlmittelpumpe Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x023B | P023B | P023B Ladeluftkühler Kühlmittelpumpe Steuerkreis - niedrig |
| 0x023C | P023C | P023C Ladeluftkühler Kühlmittelpumpe Steuerkreis - hoch |
| 0x023D | P023D | P023D Absoluter Saugrohrdruck / Turbolader/Verdichter Ladedrucksensor (Bank 1) - Korrelationsfehler |
| 0x023E | P023E | P023E Absoluter Saugrohrdruck / Turbolader/Verdichter Ladedrucksensor (Bank 2) - Korrelationsfehler |
| 0x023F | P023F | P023F Kraftstoffpumpe Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0240 | P0240 | P0240 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0241 | P0241 | P0241 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 2) - niedrig |
| 0x0242 | P0242 | P0242 Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 2) - hoch |
| 0x0243 | P0243 | P0243 Turbolader/Verdichter Ladedruckventil (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0244 | P0244 | P0244 Turbolader/Verdichter Ladedruckventil (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0245 | P0245 | P0245 Turbolader/Verdichter Ladedruckventil (Bank 1) -  niedrig |
| 0x0246 | P0246 | P0246 Turbolader/Verdichter Ladedruckventil (Bank 1) - hoch |
| 0x0247 | P0247 | P0247 Turbolader/Verdichter Ladedruckventil (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0248 | P0248 | P0248 Turbolader/Verdichter Ladedruckventil (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0249 | P0249 | P0249 Turbolader/Verdichter Ladedruckventil (Bank 2) - niedrig |
| 0x024A | P024A | P024A Ladeluftkühler Bypassregelung  (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x024B | P024B | P024B Ladeluftkühler Bypassregelung  (Bank 1) - klemmt |
| 0x024C | P024C | P024C Ladeluftkühler Bypass Positionssensor Schaltkreis (Bank 1) - Fehlfunktion oder Fehlfunktion |
| 0x024D | P024D | P024D Ladeluftkühler Bypass Positionssensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x024E | P024E | P024E Ladeluftkühler Bypass Positionssensor Schaltkreis (Bank 1) - niedrig |
| 0x024F | P024F | P024F Ladeluftkühler Bypass Positionssensor Schaltkreis (Bank 1) - hoch |
| 0x0250 | P0250 | P0250 Turbolader/Verdichter Ladedruckventil (Bank 2) - hoch |
| 0x0251 | P0251 | P0251 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 1) - Fehlfunktion |
| 0x0252 | P0252 | P0252 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0253 | P0253 | P0253 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 1) - niedrig |
| 0x0254 | P0254 | P0254 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 1) - hoch |
| 0x0255 | P0255 | P0255 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 1) - sporadisch |
| 0x0256 | P0256 | P0256 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 2) - Fehlfunktion |
| 0x0257 | P0257 | P0257 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0258 | P0258 | P0258 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 2) - niedrig |
| 0x0259 | P0259 | P0259 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 2) - hoch |
| 0x025A | P025A | P025A Kraftstoffpumpenmodul Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x025B | P025B | P025B Kraftstoffpumpenmodul Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x025C | P025C | P025C Kraftstoffpumpenmodul Steuerkreis - niedrig |
| 0x025D | P025D | P025D Kraftstoffpumpenmodul Steuerkreis - hoch |
| 0x025E | P025E | P025E Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x025F | P025F | P025F Turbolader/Verdichter Ladedrucksensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x0260 | P0260 | P0260 Einspritzpumpe Kraftstoffdosierung (Nocke/Rotor/Injektor) (Bank 2) - sporadisch |
| 0x0261 | P0261 | P0261 Einspritzventil Zylinder 1 Schaltkreis - niedrig |
| 0x0262 | P0262 | P0262 Einspritzventil Zylinder 1 Schaltkreis - hoch |
| 0x0263 | P0263 | P0263 Zylinder 1 - Gleichstellungsfehler |
| 0x0264 | P0264 | P0264 Einspritzventil Zylinder 2 Schaltkreis - niedrig |
| 0x0265 | P0265 | P0265 Einspritzventil Zylinder 2 Schaltkreis - hoch |
| 0x0266 | P0266 | P0266 Zylinder 2 - Gleichstellungsfehler |
| 0x0267 | P0267 | P0267 Einspritzventil Zylinder 3 Schaltkreis - niedrig |
| 0x0268 | P0268 | P0268 Einspritzventil Zylinder 3 Schaltkreis - hoch |
| 0x0269 | P0269 | P0269 Zylinder 3 - Gleichstellungsfehler |
| 0x026A | P026A | P026A Ladeluftkühler - Wirkungsgrad unter Schwellwert |
| 0x026B | P026B | P026B Einspritzzeitregelung - Leistungsproblem |
| 0x0270 | P0270 | P0270 Einspritzventil Zylinder 4 Schaltkreis - niedrig |
| 0x0271 | P0271 | P0271 Einspritzventil Zylinder 4 Schaltkreis - hoch |
| 0x0272 | P0272 | P0272 Zylinder 4 - Gleichstellungsfehler |
| 0x0273 | P0273 | P0273 Einspritzventil Zylinder 5 Schaltkreis - niedrig |
| 0x0274 | P0274 | P0274 Einspritzventil Zylinder 5 Schaltkreis - hoch |
| 0x0275 | P0275 | P0275 Zylinder 5 - Gleichstellungsfehler |
| 0x0276 | P0276 | P0276 Einspritzventil Zylinder 6 Schaltkreis - niedrig |
| 0x0277 | P0277 | P0277 Einspritzventil Zylinder 6 Schaltkreis - hoch |
| 0x0278 | P0278 | P0278 Zylinder 6 - Gleichstellungsfehler |
| 0x0279 | P0279 | P0279 Einspritzventil Zylinder 7 Schaltkreis - niedrig |
| 0x0280 | P0280 | P0280 Einspritzventil Zylinder 7 Schaltkreis - hoch |
| 0x0281 | P0281 | P0281 Zylinder 7 - Gleichstellungsfehler |
| 0x0282 | P0282 | P0282 Einspritzventil Zylinder 8 Schaltkreis - niedrig |
| 0x0283 | P0283 | P0283 Einspritzventil Zylinder 8 Schaltkreis - hoch |
| 0x0284 | P0284 | P0284 Zylinder 8 - Gleichstellungsfehler |
| 0x0285 | P0285 | P0285 Einspritzventil Zylinder 9 Schaltkreis - niedrig |
| 0x0286 | P0286 | P0286 Einspritzventil Zylinder 9 Schaltkreis - hoch |
| 0x0287 | P0287 | P0287 Zylinder 9 - Gleichstellungsfehler |
| 0x0288 | P0288 | P0288 Einspritzventil Zylinder 10 Schaltkreis - niedrig |
| 0x0289 | P0289 | P0289 Einspritzventil Zylinder 10 Schaltkreis - hoch |
| 0x0290 | P0290 | P0290 Zylinder 10 - Gleichstellungsfehler |
| 0x0291 | P0291 | P0291 Einspritzventil Zylinder 11 Schaltkreis - niedrig |
| 0x0292 | P0292 | P0292 Einspritzventil Zylinder 11 Schaltkreis - hoch |
| 0x0293 | P0293 | P0293 Zylinder 11 - Gleichstellungsfehler |
| 0x0294 | P0294 | P0294 Einspritzventil Zylinder 12 Schaltkreis - niedrig |
| 0x0295 | P0295 | P0295 Einspritzventil Zylinder 12 Schaltkreis - hoch |
| 0x0296 | P0296 | P0296 Zylinder 12 - Gleichstellungsfehler |
| 0x0297 | P0297 | P0297 Fahrzeuggeschwindigkeit - zu hoch |
| 0x0298 | P0298 | P0298 Motoröltemperatur - zu hoch |
| 0x0299 | P0299 | P0299 Turbolader/Verdichter (Bank 1) - Ladedruck zu niedrig |
| 0x029A | P029A | P029A Zylinder 1 - Gemischregelung am oberen Limit |
| 0x029B | P029B | P029B Zylinder 1 - Gemischregelung am unteren Limit |
| 0x029C | P029C | P029C Zylinder 1 - Einspritzventil zugesetzt |
| 0x029D | P029D | P029D Zylinder 1 - Einspritzventil leckt |
| 0x029E | P029E | P029E Zylinder 2 - Gemischregelung am oberen Limit |
| 0x029F | P029F | P029F Zylinder 2 - Gemischregelung am unteren Limit |
| 0x02A0 | P02A0 | P02A0 Zylinder 2 - Einspritzventil zugesetzt |
| 0x02A1 | P02A1 | P02A1 Zylinder 2 - Einspritzventil leckt |
| 0x02A2 | P02A2 | P02A2 Zylinder 3 - Gemischregelung am oberen Limit |
| 0x02A3 | P02A3 | P02A3 Zylinder 3 - Gemischregelung am unteren Limit |
| 0x02A4 | P02A4 | P02A4 Zylinder 3 - Einspritzventil zugesetzt |
| 0x02A5 | P02A5 | P02A5 Zylinder 3 - Einspritzventil leckt |
| 0x02A6 | P02A6 | P02A6 Zylinder 4 - Gemischregelung am oberen Limit |
| 0x02A7 | P02A7 | P02A7 Zylinder 4 - Gemischregelung am unteren Limit |
| 0x02A8 | P02A8 | P02A8 Zylinder 4 - Einspritzventil zugesetzt |
| 0x02A9 | P02A9 | P02A9 Zylinder 4 - Einspritzventil leckt |
| 0x02AA | P02AA | P02AA Zylinder 5 - Gemischregelung am oberen Limit |
| 0x02AB | P02AB | P02AB Zylinder 5 - Gemischregelung am unteren Limit |
| 0x02AC | P02AC | P02AC Zylinder 5 - Einspritzventil zugesetzt |
| 0x02AD | P02AD | P02AD Zylinder 5 - Einspritzventil leckt |
| 0x02AE | P02AE | P02AE Zylinder 6 - Gemischregelung am oberen Limit |
| 0x02AF | P02AF | P02AF Zylinder 6 - Gemischregelung am unteren Limit |
| 0x02B0 | P02B0 | P02B0 Zylinder 6 - Einspritzventil zugesetzt |
| 0x02B1 | P02B1 | P02B1 Zylinder 6 - Einspritzventil leckt |
| 0x02B2 | P02B2 | P02B2 Zylinder 7 - Gemischregelung am oberen Limit |
| 0x02B3 | P02B3 | P02B3 Zylinder 7 - Gemischregelung am unteren Limit |
| 0x02B4 | P02B4 | P02B4 Zylinder 7 - Einspritzventil zugesetzt |
| 0x02B5 | P02B5 | P02B5 Zylinder 7 - Einspritzventil leckt |
| 0x02B6 | P02B6 | P02B6 Zylinder 8 - Gemischregelung am oberen Limit |
| 0x02B7 | P02B7 | P02B7 Zylinder 8 - Gemischregelung am unteren Limit |
| 0x02B8 | P02B8 | P02B8 Zylinder 8 - Einspritzventil zugesetzt |
| 0x02B9 | P02B9 | P02B9 Zylinder 8 - Einspritzventil leckt |
| 0x02BA | P02BA | P02BA Zylinder 9 - Gemischregelung am oberen Limit |
| 0x02BB | P02BB | P02BB Zylinder 9 - Gemischregelung am unteren Limit |
| 0x02BC | P02BC | P02BC Zylinder 9 - Einspritzventil zugesetzt |
| 0x02BD | P02BD | P02BD Zylinder 9 - Einspritzventil leckt |
| 0x02BE | P02BE | P02BE Zylinder 10 - Gemischregelung am oberen Limit |
| 0x02BF | P02BF | P02BF Zylinder 10 - Gemischregelung am unteren Limit |
| 0x02C0 | P02C0 | P02C0 Zylinder 10 - Einspritzventil zugesetzt |
| 0x02C1 | P02C1 | P02C1 Zylinder 10 - Einspritzventil leckt |
| 0x02C2 | P02C2 | P02C2 Zylinder 11 - Gemischregelung am oberen Limit |
| 0x02C3 | P02C3 | P02C3 Zylinder 11 - Gemischregelung am unteren Limit |
| 0x02C4 | P02C4 | P02C4 Zylinder 11 - Einspritzventil zugesetzt |
| 0x02C5 | P02C5 | P02C5 Zylinder 11 - Einspritzventil leckt |
| 0x02C6 | P02C6 | P02C6 Zylinder 12 - Gemischregelung am oberen Limit |
| 0x02C7 | P02C7 | P02C7 Zylinder 12 - Gemischregelung am unteren Limit |
| 0x02C8 | P02C8 | P02C8 Zylinder 12 - Einspritzventil zugesetzt |
| 0x02C9 | P02C9 | P02C9 Zylinder 12 - Einspritzventil leckt |
| 0x02CA | P02CA | P02CA Turbolader/Verdichter (Bank 2) - Ladedruck zu hoch |
| 0x02CB | P02CB | P02CB Turbolader/Verdichter (Bank 2) - Ladedruck zu niedrig |
| 0x02CC | P02CC | P02CC Einspritzventil Zylinder 1 - Offset gelernte Adaption am unteren Limit |
| 0x02CD | P02CD | P02CD Einspritzventil Zylinder 1 - Offset gelernte Adaption am oberen Limit |
| 0x02CE | P02CE | P02CE Einspritzventil Zylinder 2 - Offset gelernte Adaption am unteren Limit |
| 0x02CF | P02CF | P02CF Einspritzventil Zylinder 2 - Offset gelernte Adaption am oberen Limit |
| 0x02D0 | P02D0 | P02D0 Einspritzventil Zylinder 3 - Offset gelernte Adaption am unteren Limit |
| 0x02D1 | P02D1 | P02D1 Einspritzventil Zylinder 3 - Offset gelernte Adaption am oberen Limit |
| 0x02D2 | P02D2 | P02D2 Einspritzventil Zylinder 4 - Offset gelernte Adaption am unteren Limit |
| 0x02D3 | P02D3 | P02D3 Einspritzventil Zylinder 4 - Offset gelernte Adaption am oberen Limit |
| 0x02D4 | P02D4 | P02D4 Einspritzventil Zylinder 5 - Offset gelernte Adaption am unteren Limit |
| 0x02D5 | P02D5 | P02D5 Einspritzventil Zylinder 5 - Offset gelernte Adaption am oberen Limit |
| 0x02D6 | P02D6 | P02D6 Einspritzventil Zylinder 6 - Offset gelernte Adaption am unteren Limit |
| 0x02D7 | P02D7 | P02D7 Einspritzventil Zylinder 6 - Offset gelernte Adaption am oberen Limit |
| 0x02D8 | P02D8 | P02D8 Einspritzventil Zylinder 7 - Offset gelernte Adaption am unteren Limit |
| 0x02D9 | P02D9 | P02D9 Einspritzventil Zylinder 7 - Offset gelernte Adaption am oberen Limit |
| 0x02DA | P02DA | P02DA Einspritzventil Zylinder 8 - Offset gelernte Adaption am unteren Limit |
| 0x02DB | P02DB | P02DB Einspritzventil Zylinder 8 - Offset gelernte Adaption am oberen Limit |
| 0x02DC | P02DC | P02DC Einspritzventil Zylinder 9 - Offset gelernte Adaption am unteren Limit |
| 0x02DD | P02DD | P02DD Einspritzventil Zylinder 9 - Offset gelernte Adaption am oberen Limit |
| 0x02DE | P02DE | P02DE Einspritzventil Zylinder 10 - Offset gelernte Adaption am unteren Limit |
| 0x02DF | P02DF | P02DF Einspritzventil Zylinder 10 - Offset gelernte Adaption am oberen Limit |
| 0x02E0 | P02E0 | P02E0 Diesel Einlassluftmengenregelung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x02E1 | P02E1 | P02E1 Diesel Einlassluftmengenregelung - Leistungsproblem |
| 0x02E2 | P02E2 | P02E2 Diesel Einlassluftmengenregelung Schaltkreis - niedrig |
| 0x02E3 | P02E3 | P02E3 Diesel Einlassluftmengenregelung Schaltkreis - hoch |
| 0x02E4 | P02E4 | P02E4 Diesel Einlassluftmengenregelung - klemmt offen |
| 0x02E5 | P02E5 | P02E5 Diesel Einlassluftmengenregelung - klemmt geschlossen |
| 0x02E6 | P02E6 | P02E6 Diesel Einlassluftmenge Positionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x02E7 | P02E7 | P02E7 Diesel Einlassluftmenge Positionssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02E8 | P02E8 | P02E8 Diesel Einlassluftmenge Positionssensor Schaltkreis - niedrig |
| 0x02E9 | P02E9 | P02E9 Diesel Einlassluftmenge Positionssensor Schaltkreis - hoch |
| 0x02EA | P02EA | P02EA Diesel Einlassluftmenge Positionssensor Schaltkreis - sporadisch/unregelmäßig |
| 0x02EB | P02EB | P02EB Diesel Einlassluftmengenregelung Motorstrom - Messbereichs- oder Leistungsproblem |
| 0x02EC | P02EC | P02EC Diesel Einlassluftmengenregelungssystem - hoher Luftdurchsatz erkannt |
| 0x02ED | P02ED | P02ED Diesel Einlassluftmengenregelungssystem - niedriger Luftdurchsatz erkannt |
| 0x02EE | P02EE | P02EE Einspritzventil Zylinder 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02EF | P02EF | P02EF Einspritzventil Zylinder 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F0 | P02F0 | P02F0 Einspritzventil Zylinder 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F1 | P02F1 | P02F1 Einspritzventil Zylinder 4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F2 | P02F2 | P02F2 Einspritzventil Zylinder 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F3 | P02F3 | P02F3 Einspritzventil Zylinder 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F4 | P02F4 | P02F4 Einspritzventil Zylinder 7 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F5 | P02F5 | P02F5 Einspritzventil Zylinder 8 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F6 | P02F6 | P02F6 Einspritzventil Zylinder 9 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F7 | P02F7 | P02F7 Einspritzventil Zylinder 10 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F8 | P02F8 | P02F8 Einspritzventil Zylinder 11 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02F9 | P02F9 | P02F9 Einspritzventil Zylinder 12 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x02FA | P02FA | P02FA Diesel Einlassluftmenge Positionssensor Minimal/Maximalanschlag - Leistungsproblem |
| 0x0300 | P0300 | P0300 Verbrennungsaussetzer erkannt - mehrere Zylinder |
| 0x0301 | P0301 | P0301 Verbrennungsaussetzer erkannt - Zylinder 1 |
| 0x0302 | P0302 | P0302 Verbrennungsaussetzer erkannt - Zylinder 2 |
| 0x0303 | P0303 | P0303 Verbrennungsaussetzer erkannt - Zylinder 3 |
| 0x0304 | P0304 | P0304 Verbrennungsaussetzer erkannt - Zylinder 4 |
| 0x0305 | P0305 | P0305 Verbrennungsaussetzer erkannt - Zylinder 5 |
| 0x0306 | P0306 | P0306 Verbrennungsaussetzer erkannt - Zylinder 6 |
| 0x0307 | P0307 | P0307 Verbrennungsaussetzer erkannt - Zylinder 7 |
| 0x0308 | P0308 | P0308 Verbrennungsaussetzer erkannt - Zylinder 8 |
| 0x0309 | P0309 | P0309 Verbrennungsaussetzer erkannt - Zylinder 9 |
| 0x0310 | P0310 | P0310 Verbrennungsaussetzer erkannt - Zylinder 10 |
| 0x0311 | P0311 | P0311 Verbrennungsaussetzer erkannt - Zylinder 11 |
| 0x0312 | P0312 | P0312 Verbrennungsaussetzer erkannt - Zylinder 12 |
| 0x0313 | P0313 | P0313 Verbrennungsaussetzer erkannt bei niedrigem Kraftstoffstand |
| 0x0314 | P0314 | P0314 Verbrennungsaussetzer, Einzelzylinder (Zylinder nicht angegeben) |
| 0x0315 | P0315 | P0315 Kurbelwellenstellung - Variation nicht gelernt |
| 0x0316 | P0316 | P0316 Verbrennungsaussetzer erkannt im Start (erste 1000 Umdrehungen) |
| 0x0317 | P0317 | P0317 Schlechtwegstreckenerkennung - Hardware nicht vorhanden |
| 0x0318 | P0318 | P0318 Schlechtwegstreckensensor 'A 'Signalstromkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0319 | P0319 | P0319 Schlechtwegstreckensensor 'B' Signalstromkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0320 | P0320 | P0320 Zündverteiler Motordrehzahl Eingangsschaltkreis - Fehlfunktion |
| 0x0321 | P0321 | P0321 Zündverteiler Motordrehzahl Eingangsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0322 | P0322 | P0322 Zündverteiler Motordrehzahl Eingangsschaltkreis - kein Signal |
| 0x0323 | P0323 | P0323 Zündverteiler Motordrehzahl Eingangsschaltkreis - sporadisch |
| 0x0324 | P0324 | P0324 Klopfregelsystem - Fehler |
| 0x0325 | P0325 | P0325 Klopfsensor 1 Schaltkreis (Bank 1 oder Einzelsensor) - Fehlfunktion |
| 0x0326 | P0326 | P0326 Klopfsensor 1 Schaltkreis (Bank 1 oder Einzelsensor) - Messbereichs- oder Leistungsproblem |
| 0x0327 | P0327 | P0327 Klopfsensor 1 Schaltkreis (Bank 1 oder Einzelsensor) - niedrig |
| 0x0328 | P0328 | P0328 Klopfsensor 1 Schaltkreis (Bank 1 oder Einzelsensor) - hoch |
| 0x0329 | P0329 | P0329 Klopfsensor 1 Schaltkreis (Bank 1 oder Einzelsensor) - sporadisch |
| 0x032A | P032A | P032A Klopfsensor 3 Schaltkreis (Bank 1) - Fehlfunktion |
| 0x032B | P032B | P032B Klpfsensor 3 Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x032C | P032C | P032C Klopfsensor 3 Schaltkreis (Bank 1) - niedrig |
| 0x032D | P032D | P032D Klopfsensor 3 Schaltkreis (Bank 1) - hoch |
| 0x032E | P032E | P032E Klopfsensor 3 Schaltkreis (Bank 1) - sporadisch |
| 0x0330 | P0330 | P0330 Klopfsensor 2 Schaltkreis (Bank 2) - Fehlfunktion |
| 0x0331 | P0331 | P0331 Klopfsensor 2 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0332 | P0332 | P0332 Klopfsensor 2 Schaltkreis (Bank 2) - niedrig |
| 0x0333 | P0333 | P0333 Klopfsensor 2 Schaltkreis (Bank 2) - hoch |
| 0x0334 | P0334 | P0334 Klopfsensor 2 Schaltkreis (Bank 2) - sporadisch |
| 0x0335 | P0335 | P0335 Kurbelwellengeber Schaltkreis (Bank 1) - Fehlfunktion |
| 0x0336 | P0336 | P0336 Kurbelwellengeber Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0337 | P0337 | P0337 Kurbelwellengeber Schaltkreis (Bank 1) - niedrig |
| 0x0338 | P0338 | P0338 Kurbelwellengeber Schaltkreis (Bank 1) - hoch |
| 0x0339 | P0339 | P0339 Kurbelwellengeber Schaltkreis (Bank 1) - sporadisch |
| 0x033A | P033A | P033A Klopfsensor 4 Schaltkreis (Bank 2) - Fehlfunktion |
| 0x033B | P033B | P033B Klopfsensor 4 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x033C | P033C | P033C Klopfsensor 4 Schaltkreis (Bank 2) - niedrig |
| 0x033D | P033D | P033D Klopfsensor 4 Schaltkreis (Bank 2) - hoch |
| 0x033E | P033E | P033E Klopfsensor 4 Schaltkreis (Bank 2) - sporadisch |
| 0x0340 | P0340 | P0340 Nockenwellengeber Einlass Schaltkreis (Bank 1 oder Einzelsensor) - Fehlfunktion |
| 0x0341 | P0341 | P0341 Nockenwellengeber Einlass Schaltkreis (Bank 1 oder Einzelsensor) - Messbereichs- oder Leistungsproblem |
| 0x0342 | P0342 | P0342 Nockenwellengeber Einlass Schaltkreis (Bank 1 oder Einzelsensor) - niedrig |
| 0x0343 | P0343 | P0343 Nockenwellengeber Einlass Schaltkreis (Bank 1 oder Einzelsensor) - hoch |
| 0x0344 | P0344 | P0344 Nockenwellengeber Einlass Schaltkreis (Bank 1 oder Einzelsensor) - sporadisch |
| 0x0345 | P0345 | P0345 Nockenwellengeber Einlass Schaltkreis (Bank 2) - Fehlfunktion |
| 0x0346 | P0346 | P0346 Nockenwellengeber Einlass Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0347 | P0347 | P0347 Nockenwellengeber Einlass Schaltkreis (Bank 2) - niedrig |
| 0x0348 | P0348 | P0348 Nockenwellengeber Einlass Schaltkreis (Bank 2) - hoch |
| 0x0349 | P0349 | P0349 Nockenwellengeber Einlass Schaltkreis (Bank 2) - sporadisch |
| 0x0350 | P0350 | P0350 Zündspule, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0351 | P0351 | P0351 Zündspule 1, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0352 | P0352 | P0352 Zündspule 2, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0353 | P0353 | P0353 Zündspule 3, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0354 | P0354 | P0354 Zündspule 4, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0355 | P0355 | P0355 Zündspule 5, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0356 | P0356 | P0356 Zündspule 6, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0357 | P0357 | P0357 Zündspule 7, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0358 | P0358 | P0358 Zündspule 8, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0359 | P0359 | P0359 Zündspule 9, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0360 | P0360 | P0360 Zündspule 10, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0361 | P0361 | P0361 Zündspule 11, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0362 | P0362 | P0362 Zündspule 12, Primär-/Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0363 | P0363 | P0363 Verbrennungsaussetzer erkannt mit Kraftstoffabschaltung |
| 0x0365 | P0365 | P0365 Nockenwellengeber Auslass Schaltkreis (Bank 1) - Fehlfunktion |
| 0x0366 | P0366 | P0366 Nockenwellengeber Auslass Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0367 | P0367 | P0367 Nockenwellengeber Auslass Schaltkreis (Bank 1) - niedrig |
| 0x0368 | P0368 | P0368 Nockenwellengeber Auslass Schaltkreis (Bank 1) - hoch |
| 0x0369 | P0369 | P0369 Nockenwellengeber Auslass Schaltkreis (Bank 1) - sporadisch |
| 0x0370 | P0370 | P0370 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Fehlfunktion |
| 0x0371 | P0371 | P0371 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - zu viele Impulse |
| 0x0372 | P0372 | P0372 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - zu wenige Impulse |
| 0x0373 | P0373 | P0373 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Impulse sporadisch/unregelmäßig |
| 0x0374 | P0374 | P0374 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - keine Impulse |
| 0x0375 | P0375 | P0375 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - Fehlfunktion |
| 0x0376 | P0376 | P0376 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - zu viele Impulse |
| 0x0377 | P0377 | P0377 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - zu wenige Impulse |
| 0x0378 | P0378 | P0378 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - Impulse sporadisch/unregelmäßig |
| 0x0379 | P0379 | P0379 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - keine Impulse |
| 0x037D | P037D | P037D Glühkerze Überwachungsschaltkreis - Fehlfunktion |
| 0x037E | P037E | P037E Glühkerze Überwachungsschaltkreis - niedrig |
| 0x037F | P037F | P037F Glühkerze Überwachungsschaltkreis - hoch |
| 0x0380 | P0380 | P0380 Glühkerzen-Heizungsschaltkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0381 | P0381 | P0381 Glühkerzen-Heizung, Anzeige - Fehlfunktion oder Leitungsunterbrechung |
| 0x0382 | P0382 | P0382 Glühkerzen-Heizungsschaltkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0383 | P0383 | P0383 Glühkerzen-Steuergerät Steuerkreis - niedrig |
| 0x0384 | P0384 | P0384 Glühkerzen-Steuergerät Steuerkreis - hoch |
| 0x0385 | P0385 | P0385 Kurbelwellengeber Schaltkreis (Bank 2) - Fehlfunktion |
| 0x0386 | P0386 | P0386 Kurbelwellengeber Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0387 | P0387 | P0387 Kurbelwellengeber Schaltkreis (Bank 2) - niedrig |
| 0x0388 | P0388 | P0388 Kurbelwellengeber Schaltkreis (Bank 2) - hoch |
| 0x0389 | P0389 | P0389 Kurbelwellengeber Schaltkreis (Bank 2) - sporadisch |
| 0x0390 | P0390 | P0390 Nockenwellengeber Auslass Schaltkreis (Bank 2) - Fehlfunktion |
| 0x0391 | P0391 | P0391 Nockenwellengeber Auslass Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x0392 | P0392 | P0392 Nockenwellengeber Auslass Schaltkreis (Bank 2) - niedrig |
| 0x0393 | P0393 | P0393 Nockenwellengeber Auslass Schaltkreis (Bank 2) - hoch |
| 0x0394 | P0394 | P0394 Nockenwellengeber Auslass Schaltkreis (Bank 2) - sporadisch |
| 0x0395 | P0395 | P0395 Drucksensor Zylinder 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0396 | P0396 | P0396 Drucksensor Zylinder 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0397 | P0397 | P0397 Drucksensor Zylinder 1 Schaltkreis - niedrig |
| 0x0398 | P0398 | P0398 Drucksensor Zylinder 1 Schaltkreis - hoch |
| 0x0399 | P0399 | P0399 Drucksensor Zylinder 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x039A | P039A | P039A Zylinder 1 - Druck zu niedrig |
| 0x039B | P039B | P039B Zylinder 1 - Druck zu hoch |
| 0x039C | P039C | P039C Zylinder 1 Druckschwankung - niedrig |
| 0x039D | P039D | P039D Zylinder 1 Druckschwankung - hoch |
| 0x039E | P039E | P039E Zylinder 1 Verbrennung - Leistungsproblem |
| 0x039F | P039F | P039F Drucksensor Zylinder 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x03A0 | P03A0 | P03A0 Drucksensor Zylinder 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x03A1 | P03A1 | P03A1 Drucksensor Zylinder 2 Schaltkreis - niedrig |
| 0x03A2 | P03A2 | P03A2 Drucksensor Zylinder 2 Schaltkreis - hoch |
| 0x03A3 | P03A3 | P03A3 Drucksensor Zylinder 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x03A4 | P03A4 | P03A4 Zylinder 2 - Druck zu niedrig |
| 0x03A5 | P03A5 | P03A5 Zylinder 2 - Druck zu hoch |
| 0x03A6 | P03A6 | P03A6 Zylinder 2 Druckschwankung - niedrig |
| 0x03A7 | P03A7 | P03A7 Zylinder 2 Druckschwankung - hoch |
| 0x03A8 | P03A8 | P03A8 Zylinder 2 Verbrennung - Leistungsproblem |
| 0x03A9 | P03A9 | P03A9 Drucksensor Zylinder 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x03AA | P03AA | P03AA Drucksensor Zylinder 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x03AB | P03AB | P03AB Drucksensor Zylinder 3 Schaltkreis - niedrig |
| 0x03AC | P03AC | P03AC Drucksensor Zylinder 3 Schaltkreis - hoch |
| 0x03AD | P03AD | P03AD Drucksensor Zylinder 3 Schaltkreis - sporadisch/unregelmäßig |
| 0x03AE | P03AE | P03AE Zylinder 3 - Druck zu niedrig |
| 0x03AF | P03AF | P03AF Zylinder 3 - Druck zu hoch |
| 0x03B0 | P03B0 | P03B0 Zylinder 3 Druckschwankung - niedrig |
| 0x03B1 | P03B1 | P03B1 Zylinder 3 Druckschwankung - hoch |
| 0x03B2 | P03B2 | P03B2 Zylinder 3 Verbrennung - Leistungsproblem |
| 0x03B3 | P03B3 | P03B3 Drucksensor Zylinder 4 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x03B4 | P03B4 | P03B4 Drucksensor Zylinder 4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x03B5 | P03B5 | P03B5 Drucksensor Zylinder 4 Schaltkreis - niedrig |
| 0x03B6 | P03B6 | P03B6 Drucksensor Zylinder 4 Schaltkreis - hoch |
| 0x03B7 | P03B7 | P03B7 Drucksensor Zylinder 4 Schaltkreis - sporadisch/unregelmäßig |
| 0x03B8 | P03B8 | P03B8 Zylinder 4 - Druck zu niedrig |
| 0x03B9 | P03B9 | P03B9 Zylinder 4 - Druck zu hoch |
| 0x03BA | P03BA | P03BA Zylinder 4 Druckschwankung - niedrig |
| 0x03BB | P03BB | P03BB Zylinder 4 Druckschwankung - hoch |
| 0x03BC | P03BC | P03BC Zylinder 4 Verbrennung - Leistungsproblem |
| 0x03BD | P03BD | P03BD Drucksensor Zylinder 5 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x03BE | P03BE | P03BE Drucksensor Zylinder 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x03BF | P03BF | P03BF Drucksensor Zylinder 5 Schaltkreis - niedrig |
| 0x03C0 | P03C0 | P03C0 Drucksensor Zylinder 5 Schaltkreis - hoch |
| 0x03C1 | P03C1 | P03C1 Drucksensor Zylinder 5 Schaltkreis - sporadisch/unregelmäßig |
| 0x03C2 | P03C2 | P03C2 Zylinder 5 - Druck zu niedrig |
| 0x03C3 | P03C3 | P03C3 Zylinder 5 - Druck zu hoch |
| 0x03C4 | P03C4 | P03C4 Zylinder 5 Druckschwankung - niedrig |
| 0x03C5 | P03C5 | P03C5 Zylinder 5 Druckschwankung - hoch |
| 0x03C6 | P03C6 | P03C6 Zylinder 5 Verbrennung - Leistungsproblem |
| 0x03C7 | P03C7 | P03C7 Drucksensor Zylinder 6 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x03C8 | P03C8 | P03C8 Drucksensor Zylinder 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x03C9 | P03C9 | P03C9 Drucksensor Zylinder 6 Schaltkreis - niedrig |
| 0x03CA | P03CA | P03CA Drucksensor Zylinder 6 Schaltkreis - hoch |
| 0x03CB | P03CB | P03CB Drucksensor Zylinder 6 Schaltkreis - sporadisch/unregelmäßig |
| 0x03CC | P03CC | P03CC Zylinder 6 - Druck zu niedrig |
| 0x03CD | P03CD | P03CD Zylinder 6 - Druck zu hoch |
| 0x03CE | P03CE | P03CE Zylinder 6 Druckschwankung - niedrig |
| 0x03CF | P03CF | P03CF Zylinder 6 Druckschwankung - hoch |
| 0x03D0 | P03D0 | P03D0 Zylinder 6 Verbrennung - Leistungsproblem |
| 0x03D1 | P03D1 | P03D1 Drucksensor Zylinder 7 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x03D2 | P03D2 | P03D2 Drucksensor Zylinder 7 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x03D3 | P03D3 | P03D3 Drucksensor Zylinder 7 Schaltkreis - niedrig |
| 0x03D4 | P03D4 | P03D4 Drucksensor Zylinder 7 Schaltkreis - hoch |
| 0x03D5 | P03D5 | P03D5 Drucksensor Zylinder 7 Schaltkreis - sporadisch/unregelmäßig |
| 0x03D6 | P03D6 | P03D6 Zylinder 7 - Druck zu niedrig |
| 0x03D7 | P03D7 | P03D7 Zylinder 7 - Druck zu hoch |
| 0x03D8 | P03D8 | P03D8 Zylinder 7 Druckschwankung - niedrig |
| 0x03D9 | P03D9 | P03D9 Zylinder 7 Druckschwankung - hoch |
| 0x03DA | P03DA | P03DA Zylinder 7 Verbrennung - Leistungsproblem |
| 0x03DB | P03DB | P03DB Drucksensor Zylinder 8 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x03DC | P03DC | P03DC Drucksensor Zylinder 8 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x03DD | P03DD | P03DD Drucksensor Zylinder 8 Schaltkreis - niedrig |
| 0x03DE | P03DE | P03DE Drucksensor Zylinder 8 Schaltkreis - hoch |
| 0x03DF | P03DF | P03DF Drucksensor Zylinder 8 Schaltkreis - sporadisch/unregelmäßig |
| 0x03E0 | P03E0 | P03E0 Zylinder 8 - Druck zu niedrig |
| 0x03E1 | P03E1 | P03E1 Zylinder 8 - Druck zu hoch |
| 0x03E2 | P03E2 | P03E2 Zylinder 8 Druckschwankung - niedrig |
| 0x03E3 | P03E3 | P03E3 Zylinder 8 Druckschwankung - hoch |
| 0x03E4 | P03E4 | P03E4 Zylinder 8 Verbrennung - Leistungsproblem |
| 0x0400 | P0400 | P0400 Abgasrückführung (Bank 1) - Durchsatzfehler |
| 0x0401 | P0401 | P0401 Abgasrückführung (Bank 1) - zu geringer Durchsatz erkannt |
| 0x0402 | P0402 | P0402 Abgasrückführung (Bank 1) - zu hoher Durchsatz erkannt |
| 0x0403 | P0403 | P0403 Abgasrückführung Steuerkreis (Bank 1) - Fehlfunktion |
| 0x0404 | P0404 | P0404 Abgasrückführung Steuerkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0405 | P0405 | P0405 Abgasrückführungssensor 1 Schaltkreis - niedrig |
| 0x0406 | P0406 | P0406 Abgasrückführungssensor 1 Schaltkreis - hoch |
| 0x0407 | P0407 | P0407 Abgasrückführungssensor 2 Schaltkreis - niedrig |
| 0x0408 | P0408 | P0408 Abgasrückführungssensor 2 Schaltkreis - hoch |
| 0x0409 | P0409 | P0409 Abgasrückführungssensor 1 Schaltkreis - Fehlfunktion |
| 0x040A | P040A | P040A Abgasrückführung Temperaturfühler 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x040B | P040B | P040B Abgasrückführung Temperaturfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x040C | P040C | P040C Abgasrückführung Temperaturfühler 1 Schaltkreis - niedrig |
| 0x040D | P040D | P040D Abgasrückführung Temperaturfühler 1 Schaltkreis - hoch |
| 0x040E | P040E | P040E Abgasrückführung Temperaturfühler 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x040F | P040F | P040F Abgasrückführung Temperaturfühler 1/2 - Korrelationsfehler |
| 0x0410 | P0410 | P0410 Sekundärluftsystem - Fehlfunktion |
| 0x0411 | P0411 | P0411 Sekundärluftsystem - Durchsatzfehler erkannt |
| 0x0412 | P0412 | P0412 Sekundärluftventil Schaltkreis (Bank 1) - Fehlfunktion |
| 0x0413 | P0413 | P0413 Sekundärluftventil Schaltkreis (Bank 1) - Leitungsunterbrechung |
| 0x0414 | P0414 | P0414 Sekundärluftventil Schaltkreis (Bank 1) - kurzgeschlossen |
| 0x0415 | P0415 | P0415 Sekundärluftventil Schaltkreis (Bank 2) - Fehlfunktion |
| 0x0416 | P0416 | P0416 Sekundärluftventil Schaltkreis (Bank 2) - Leitungsunterbrechung |
| 0x0417 | P0417 | P0417 Sekundärluftventil Schaltkreis (Bank 2) - kurzgeschlossen |
| 0x0418 | P0418 | P0418 Sekundärluftsystem (Bank 1) - Fehlfunktion |
| 0x0419 | P0419 | P0419 Sekundärluftsystem (Bank 2) - Fehlfunktion |
| 0x041A | P041A | P041A Abgasrückführung Temperaturfühler 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x041B | P041B | P041B Abgasrückführung Temperaturfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x041C | P041C | P041C Abgasrückführung Temperaturfühler 2 Schaltkreis - niedrig |
| 0x041D | P041D | P041D Abgasrückführung Temperaturfühler 2 Schaltkreis - hoch |
| 0x041E | P041E | P041E Abgasrückführung Temperaturfühler 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x041F | P041F | P041F Sekundärluftventil Schaltkreis (Bank 1) - niedrig |
| 0x0420 | P0420 | P0420 Katalysatorsystem (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0421 | P0421 | P0421 Katalysator 1 (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0422 | P0422 | P0422 Katalysator 2 (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0423 | P0423 | P0423 E-Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0424 | P0424 | P0424 E-Katalysator (Bank 1) - Temperatur unter Schwellwert |
| 0x0425 | P0425 | P0425 Katalysatortemperaturfühler Schaltkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0426 | P0426 | P0426 Katalysatortemperaturfühler Schaltkreis (Bank 1, vor Katalysator) - Messbereichs- oder Leistungsproblem |
| 0x0427 | P0427 | P0427 Katalysatortemperaturfühler Schaltkreis (Bank 1, vor Katalysator) - niedrig |
| 0x0428 | P0428 | P0428 Katalysatortemperaturfühler Schaltkreis (Bank 1, vor Katalysator) - hoch |
| 0x0429 | P0429 | P0429 Katalysator Heizungssteuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x042A | P042A | P042A Katalysatortemperaturfühler Schaltkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x042B | P042B | P042B Katalysatortemperaturfühler Schaltkreis (Bank 1, nach Katalysator) - Messbereichs- oder Leistungsproblem |
| 0x042C | P042C | P042C Katalysatortemperaturfühler Schaltkreis (Bank 1, nach Katalysator) - niedrig |
| 0x042D | P042D | P042D Katalysatortemperaturfühler Schaltkreis (Bank 1, nach Katalysator) - hoch |
| 0x042E | P042E | P042E Abgasrückführung (Bank 1) - klemmt offen |
| 0x042F | P042F | P042F Abgasrückführung (Bank 1) - klemmt geschlossen |
| 0x0430 | P0430 | P0430 Katalysatorsystem (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0431 | P0431 | P0431 Katalysator 2 (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0432 | P0432 | P0432 Katalysator 2 (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0433 | P0433 | P0433 E-Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0434 | P0434 | P0434 E-Katalysator (Bank 2) - Temperatur unter Schwellwert |
| 0x0435 | P0435 | P0435 Katalysatortemperaturfühler Schaltkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0436 | P0436 | P0436 Katalysatortemperaturfühler Schaltkreis (Bank 2, vor Katalysaator) - Messbereichs- oder Leistungsproblem |
| 0x0437 | P0437 | P0437 Katalysatortemperaturfühler Schaltkreis (Bank 2, vor Katalysator) - niedrig |
| 0x0438 | P0438 | P0438 Katalysatortemperaturfühler Schaltkreis (Bank 2, vor Katalysator) - hoch |
| 0x0439 | P0439 | P0439 Katalysator Heizungssteuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x043A | P043A | P043A Katalysatortemperaturfühler Schaltkreis (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x043B | P043B | P043B Katalysatortemperaturfühler Schaltkreis (Bank 2, nach Katalysator) - Messbereichs- oder Leistungsproblem |
| 0x043C | P043C | P043C Katalysatortemperaturfühler Schaltkreis (Bank 2, nach Katalysator) - niedrig |
| 0x043D | P043D | P043D Katalysatortemperaturfühler Schaltkreis (Bank 2, nach Katalysator) - hoch |
| 0x043E | P043E | P043E Tankentlüftungssystem Leckdiagnose Referenzbohrung - Durchsatz niedrig |
| 0x043F | P043F | P043F Tankentlüftungssystem Leckdiagnose Referenzbohrung - Durchsatz hoch |
| 0x0440 | P0440 | P0440 Tankentlüftungssystem - Fehlfunktion |
| 0x0441 | P0441 | P0441 Tankentlüftungssystem - fehlerhafter Durchsatz |
| 0x0442 | P0442 | P0442 Tankentlüftungssystem - kleines Leck entdeckt |
| 0x0443 | P0443 | P0443 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 1) - Fehlfunktion |
| 0x0444 | P0444 | P0444 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 1) - Leitungsunterbrechung |
| 0x0445 | P0445 | P0445 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 1) - Kurzschluss |
| 0x0446 | P0446 | P0446 Tankentlüftungssystem Entlüftungskreislauf - Fehlfunktion |
| 0x0447 | P0447 | P0447 Tankentlüftungssystem Entlüftungskreislauf - Leitungsunterbrechung |
| 0x0448 | P0448 | P0448 Tankentlüftungssystem Entlüftungskreislauf - Kurzschluss |
| 0x0449 | P0449 | P0449 Tankentlüftungssystem Entlüftungsventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x044A | P044A | P044A Abgasrückführungssensor 3 Schaltkreis - Fehlfunktion |
| 0x044B | P044B | P044B Abgasrückführungssensor 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x044C | P044C | P044C Abgasrückführungssensor 3 Schaltkreis - niedrig |
| 0x044D | P044D | P044D Abgasrückführungssensor 3 Schaltkreis - hoch |
| 0x044E | P044E | P044E Abgasrückführungssensor 3 Schaltkreis - sporadisch/unregelmäßig |
| 0x044F | P044F | P044F Sekundärluftventil Schaltkreis (Bank 1) - hoch |
| 0x0450 | P0450 | P0450 Tankentlüftungssystem Drucksensor/-schalter - Fehlfunktion oder Leitungsunterbrechung |
| 0x0451 | P0451 | P0451 Tankentlüftungssystem Drucksensor/-schalter - Messbereichs- oder Leistungsproblem |
| 0x0452 | P0452 | P0452 Tankentlüftungssystem Drucksensor/-schalter - niedrig |
| 0x0453 | P0453 | P0453 Tankentlüftungssystem Drucksensor/-schalter - hoch |
| 0x0454 | P0454 | P0454 Tankentlüftungssystem Drucksensor/-schalter - sporadisch |
| 0x0455 | P0455 | P0455 Tankentlüftungssystem - großes Leck entdeckt |
| 0x0456 | P0456 | P0456 Tankentlüftungssystem - sehr kleines Leck entdeckt |
| 0x0457 | P0457 | P0457 Tankentlüftungssystem - Leck entdeckt (Tankdeckel lose/weg) |
| 0x0458 | P0458 | P0458 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 1) - niedrig |
| 0x0459 | P0459 | P0459 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 1) - hoch |
| 0x045A | P045A | P045A Abgasrückführung Steuerkreis (Bank 2) - Fehlfunktion |
| 0x045B | P045B | P045B Abgasrückführung Steuerkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x045C | P045C | P045C Abgasrückführung Steuerkreis (Bank 2) - niedrig |
| 0x045D | P045D | P045D Abgasrückführung Steuerkreis (Bank 2) - hoch |
| 0x045E | P045E | P045E Abgasrückführung (Bank 2) - klemmt offen |
| 0x045F | P045F | P045F Abgasrückführung (Bank 2) - klemmt geschlossen |
| 0x0460 | P0460 | P0460 Kraftstoff-Füllstandssensor 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0461 | P0461 | P0461 Kraftstoff-Füllstandssensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0462 | P0462 | P0462 Kraftstoff-Füllstandssensor 1 Schaltkreis - niedrig |
| 0x0463 | P0463 | P0463 Kraftstoff-Füllstandssensor 1 Schaltkreis - hoch |
| 0x0464 | P0464 | P0464 Kraftstoff-Füllstandssensor 1 Schaltkreis - sporadisch |
| 0x0465 | P0465 | P0465 Tankentlüftungssystem Spülluftdurchflusssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0466 | P0466 | P0466 Tankentlüftungssystem Spülluftdurchflusssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0467 | P0467 | P0467 Tankentlüftungssystem Spülluftdurchflusssensor Schaltkreis - niedrig |
| 0x0468 | P0468 | P0468 Tankentlüftungssystem Spülluftdurchflusssensor Schaltkreis - hoch |
| 0x0469 | P0469 | P0469 Tankentlüftungssystem Spülluftdurchflusssensor Schaltkreis - sporadisch |
| 0x046A | P046A | P046A Katalysatortemperaturfühler (Bank 1, vor/nach Katalysator) - Korrelationsfehler |
| 0x046B | P046B | P046B Katalysatortemperaturfühler (Bank 2, vor/nach Katalysator) - Korrelationsfehler |
| 0x046C | P046C | P046C Abgasrückführungssensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x046D | P046D | P046D Abgasrückführungssensor 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x046E | P046E | P046E Abgasrückführungssensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x046F | P046F | P046F Abgasrückführungssensor 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x0470 | P0470 | P0470 Abgasdrucksensor Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0471 | P0471 | P0471 Abgasdrucksensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0472 | P0472 | P0472 Abgasdrucksensor Schaltkreis (Bank 1) - niedrig |
| 0x0473 | P0473 | P0473 Abgasdrucksensor Schaltkreis (Bank 1) - hoch |
| 0x0474 | P0474 | P0474 Abgasdrucksensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x0475 | P0475 | P0475 Abgasdruckregelventil (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0476 | P0476 | P0476 Abgasdruckregelventil (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0477 | P0477 | P0477 Abgasdruckregelventil (Bank 1) - niedrig |
| 0x0478 | P0478 | P0478 Abgasdruckregelventil (Bank 1) - hoch |
| 0x0479 | P0479 | P0479 Abgasdruckregelventil (Bank 1) - sporadisch |
| 0x047A | P047A | P047A Abgasdrucksensor Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x047B | P047B | P047B Abgasdrucksensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x047C | P047C | P047C Abgasdrucksensor Schaltkreis (Bank 2) - niedrig |
| 0x047D | P047D | P047D Abgasdrucksensor Schaltkreis (Bank 2) - hoch |
| 0x047E | P047E | P047E Abgasdrucksensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x047F | P047F | P047F Abgasdruckregelventil (Bank 1) - klemmt offen |
| 0x0480 | P0480 | P0480 Motorlüfter 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0481 | P0481 | P0481 Motorlüfter 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0482 | P0482 | P0482 Motorlüfter 3 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0483 | P0483 | P0483 Motorlüfter - Plausibilitätsfehler |
| 0x0484 | P0484 | P0484 Motorlüfter - Überstrom |
| 0x0485 | P0485 | P0485 Motorlüfter Haupstrom-/Masseschaltkreis - Fehlfunktion |
| 0x0486 | P0486 | P0486 Abgasrückführungssensor 2 Schaltkreis - Fehlfunktion |
| 0x0487 | P0487 | P0487 Abgasrückführungsdrossel Steuerkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0488 | P0488 | P0488 Abgasrückführungsdrossel Steuerkreis 1 - Messbereichs- oder Leistungsproblem |
| 0x0489 | P0489 | P0489 Abgasrückführung Steuerkreis (Bank 1) - niedrig |
| 0x048A | P048A | P048A Abgasdruckregelventil (Bank 1) - klemmt geschlossen |
| 0x048B | P048B | P048B Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x048C | P048C | P048C Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x048D | P048D | P048D Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 1) - niedrig |
| 0x048E | P048E | P048E Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 1) - hoch |
| 0x048F | P048F | P048F Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x0490 | P0490 | P0490 Abgasrückführung Steuerkreis (Bank 1) - hoch |
| 0x0491 | P0491 | P0491 Sekundärluftsystem (Bank 1) - Durchsatz zu gering |
| 0x0492 | P0492 | P0492 Sekundärluftsystem (Bank 2) - Durchsatz zu gering |
| 0x0493 | P0493 | P0493 Motorlüfter - Überdrehzahl |
| 0x0494 | P0494 | P0494 Motorlüfter - Drehzahl niedrig |
| 0x0495 | P0495 | P0495 Motorlüfter - Drehzahl hoch |
| 0x0496 | P0496 | P0496 Tankentlüftungssystem - Durchsatz hoch |
| 0x0497 | P0497 | P0497 Tankentlüftungssystem - Durchsatz niedrig |
| 0x0498 | P0498 | P0498 Tankentlüftungssystem Entlüftungsventil Steuerkreis - niedrig |
| 0x0499 | P0499 | P0499 Tankentlüftungssystem Entlüftungsventil Steuerkreis - hoch |
| 0x049A | P049A | P049A Abgasrückführung (Bank 2) - Durchsatzfehler |
| 0x049B | P049B | P049B Abgasrückführung (Bank 2) - zu geringer Durchsatz erkannt |
| 0x049C | P049C | P049C Abgasrückführung (Bank 2) - zu hoher Durchsatz erkannt |
| 0x049D | P049D | P049D Abgasrückführung Position (Bank 1) - gelernter Adaptionswert überschritten |
| 0x049E | P049E | P049E Abgasrückführung Position (Bank 2) - gelernter Adaptionswert überschritten |
| 0x049F | P049F | P049F Abgasdruckregelventil (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x04A0 | P04A0 | P04A0 Abgasdruckregelventil (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x04A1 | P04A1 | P04A1 Abgasdruckregelventil (Bank 2) - niedrig |
| 0x04A2 | P04A2 | P04A2 Abgasdruckregelventil (Bank 2) - hoch |
| 0x04A3 | P04A3 | P04A3 Abgasdruckregelventil (Bank 2) - sporadisch |
| 0x04A4 | P04A4 | P04A4 Abgasdruckregelventil (Bank 2) - klemmt offen |
| 0x04A5 | P04A5 | P04A5 Abgasdruckregelventil (Bank 2) - klemmt geschlossen |
| 0x04A6 | P04A6 | P04A6 Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x04A7 | P04A7 | P04A7 Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x04A8 | P04A8 | P04A8 Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 2) - niedrig |
| 0x04A9 | P04A9 | P04A9 Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 2) - hoch |
| 0x04AA | P04AA | P04AA Abgasdruckregelventil Positionssensor/-schalter Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x04AB | P04AB | P04AB Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x04AC | P04AC | P04AC Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 2) - niedrig |
| 0x04AD | P04AD | P04AD Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 2) - hoch |
| 0x04B0 | P04B0 | P04B0 Betankung Kraftstoffverdunstungs-Steuerventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x04B1 | P04B1 | P04B1 Betankung Kraftstoffverdunstungs-Steuerventil Schaltkreis - niedrig |
| 0x04B2 | P04B2 | P04B2 Betankung Kraftstoffverdunstungs-Steuerventil Schaltkreis - hoch |
| 0x04B3 | P04B3 | P04B3 Betankung Kraftstoffverdunstungs-Steuerventil - Leistungsproblem oder klemmt offen |
| 0x04B4 | P04B4 | P04B4 Betankung Kraftstoffverdunstungs-Steuerventil - klemmt geschlossen |
| 0x04B5 | P04B5 | P04B5 Tankklappe - klemmt offen |
| 0x04B6 | P04B6 | P04B6 Tankklappe - klemmt geschlossen |
| 0x04B7 | P04B7 | P04B7 Tankklappe Positionssensor/-schalter Schaltkreis sporadisch/unregelmäßig |
| 0x04B8 | P04B8 | P04B8 Tankklappe Positionssensor/-schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x04B9 | P04B9 | P04B9 Tankklappe Positionssensor/-schalter Schaltkreis - niedrig |
| 0x04BA | P04BA | P04BA Tankklappe Positionssensor/-schalter Schaltkreis - hoch |
| 0x04BB | P04BB | P04BB Tankklappe Verriegelungsteuerung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x04BC | P04BC | P04BC Tankklappe Verriegelungsteuerung - Messbereichs- oder Leistungsproblem |
| 0x04BD | P04BD | P04BD Tankklappe Verriegelungsteuerung Schaltkreis - niedrig |
| 0x04BE | P04BE | P04BE Tankklappe Verriegelungsteuerung Schaltkreis - hoch |
| 0x04BF | P04BF | P04BF Tankklappe Entriegelungsteuerung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x04C0 | P04C0 | P04C0 Tankklappe Entriegelungsteuerung - Messbereichs- oder Leistungsproblem |
| 0x04C1 | P04C1 | P04C1 Tankklappe Entriegelungsteuerung Schaltkreis - niedrig |
| 0x04C2 | P04C2 | P04C2 Tankklappe Entriegelungsteuerung Schaltkreis - hoch |
| 0x04C3 | P04C3 | P04C3 Tankklappe Verriegelungspositionssensor/-schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x04C4 | P04C4 | P04C4 Tankklappe Verriegelungspositionssensor/-schalter Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x04C5 | P04C5 | P04C5 Tankklappe Verriegelungspositionssensor/-schalter Schaltkreis - niedrig |
| 0x04C6 | P04C6 | P04C6 Tankklappe Verriegelungspositionssensor/-schalter Schaltkreis - hoch |
| 0x04C7 | P04C7 | P04C7 Tankklappe Verriegelungspositionssensor/-schalter Schaltkreis - sporadisch/unregelmäßig |
| 0x04C8 | P04C8 | P04C8 Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x04C9 | P04C9 | P04C9 Tankklappe Öffnungsanforderungssensor/-schalter - Leistungsproblem oder klemmt offen |
| 0x04CA | P04CA | P04CA Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - niedrig |
| 0x04CB | P04CB | P04CB Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - hoch |
| 0x04CC | P04CC | P04CC Tankklappe Öffnungsanforderungssensor/-schalter Schaltkreis - sporadisch/unregelmäßig |
| 0x04CD | P04CD | P04CD Tankklappe Öffnungsanforderungssensor/-schalter - klemmt geschlossen |
| 0x04CE | P04CE | P04CE Abgasrückführung Temperaturfühler 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x04CF | P04CF | P04CF Abgasrückführung Temperaturfühler 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x04D0 | P04D0 | P04D0 Abgasrückführung Temperaturfühler 3 Schaltkreis - niedrig |
| 0x04D1 | P04D1 | P04D1 Abgasrückführung Temperaturfühler 3 Schaltkreis - hoch |
| 0x04D2 | P04D2 | P04D2 Abgasrückführung Temperaturfühler 3 Schaltkreis - sporadisch/unregelmäßig |
| 0x04D3 | P04D3 | P04D3 Staudruckbremse Eingangsschaltkreis - Fehlfunktion |
| 0x04D4 | P04D4 | P04D4 Staudruckbremse Eingangsschaltkreis - Messbereichs - oder Leistungsproblem |
| 0x04D5 | P04D5 | P04D5 Staudruckbremse Eingangsschaltkreis - niedrig |
| 0x04D6 | P04D6 | P04D6 Staudruckbremse Eingangsschaltkreis - hoch |
| 0x04D7 | P04D7 | P04D7 Staudruckbremse Eingangsschaltkreis - sporadisch/unregelmäßig |
| 0x0500 | P0500 | P0500 Fahrzeuggeschwindigkeitssensor 1 - Fehlfunktion |
| 0x0501 | P0501 | P0501 Fahrzeuggeschwindigkeitssensor 1 - Messbereichs- oder Leistungsproblem |
| 0x0502 | P0502 | P0502 Fahrzeuggeschwindigkeitssensor 1 Schaltkreis - niedrig |
| 0x0503 | P0503 | P0503 Fahrzeuggeschwindigkeitssensor 1 - sporadisch/unregelmäßig/zu hoch |
| 0x0504 | P0504 | P0504 Bremsschalter/Bremstestschalter - Korrelationsfehler |
| 0x0505 | P0505 | P0505 Leerlaufregelsystem - Fehlfunktion |
| 0x0506 | P0506 | P0506 Leerlaufregelsystem - Drehzahl niedriger als erwartet |
| 0x0507 | P0507 | P0507 Leerlaufregelsystem - Drehzahl höher als erwartet |
| 0x0508 | P0508 | P0508 Leerlaufregelsystem Luftkreislauf - niedrig |
| 0x0509 | P0509 | P0509 Leerlaufregelsystem Luftkreislauf - hoch |
| 0x050A | P050A | P050A Kaltstart Leerlaufregelsystem - Leistungsproblem |
| 0x050B | P050B | P050B Kaltstart Zündwinkelverstellung - Leistungsproblem |
| 0x050C | P050C | P050C Kaltstart Motorkühlmitteltemperatur - Leistungsproblem |
| 0x050D | P050D | P050D Kaltstart - unrunder Leerlauf |
| 0x050E | P050E | P050E Kaltstart - Abgastemperatur zu niedrig |
| 0x050F | P050F | P050F Bremsassistent - Unterdruck zu niedrig |
| 0x0510 | P0510 | P0510 Geschlossene Drosselklappe, Schalter - Fehlfunktion |
| 0x0511 | P0511 | P0511 Leerlaufluft - Fehlfunktion |
| 0x0512 | P0512 | P0512 Startautomatik Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0513 | P0513 | P0513 EWS (elektronische Wegfahrsperre) - falsche Schlüsseldaten |
| 0x0514 | P0514 | P0514 Batterietemperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0515 | P0515 | P0515 Batterietemperaturfühler Schaltkreis - Fehlfunktion |
| 0x0516 | P0516 | P0516 Batterietemperaturfühler Schaltkreis - niedrig |
| 0x0517 | P0517 | P0517 Batterietemperaturfühler Schaltkreis - hoch |
| 0x0518 | P0518 | P0518 Leerlaufluft - sporadisch |
| 0x0519 | P0519 | P0519 Leerlaufregelsystem - Leistungsproblem |
| 0x051A | P051A | P051A Kurbelgehäuse Drucksensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x051B | P051B | P051B Kurbelgehäuse Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x051C | P051C | P051C Kurbelgehäuse Drucksensor Schaltkreis - niedrig |
| 0x051D | P051D | P051D Kurbelgehäuse Drucksensor Schaltkreis - hoch |
| 0x051E | P051E | P051E Kurbelgehäuse Drucksensor Schaltkreis - sporadisch/unregelmäßig |
| 0x051F | P051F | P051F Kurbelgehäuseentlüftung Filtereinschränkung |
| 0x0520 | P0520 | P0520 Motoröldruck Sensor/Schalter Schaltkreis (Bank 1) - Fehlfunktion |
| 0x0521 | P0521 | P0521 Motoröldruck Sensor/Schalter Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0522 | P0522 | P0522 Motoröldruck Sensor/Schalter Schaltkreis (Bank 1) - niedrig |
| 0x0523 | P0523 | P0523 Motoröldruck Sensor/Schalter Schaltkreis (Bank 1) - hoch |
| 0x0524 | P0524 | P0524 Motoröldruck - zu niedrig |
| 0x0525 | P0525 | P0525 Fahrgeschwindigkeitsregelung Servosteuerung Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0526 | P0526 | P0526 Motorlüfter Drehzahlsensor Schaltkreis - Fehlfunktion |
| 0x0527 | P0527 | P0527 Motorlüfter Drehzahlsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0528 | P0528 | P0528 Motorlüfter Drehzahlsensor Schaltkreis - kein Signal |
| 0x0529 | P0529 | P0529 Motorlüfter Drehzahlsensor Schaltkreis - sporadisch |
| 0x052A | P052A | P052A Kaltstart Nockenwellensteuerung  Einlass (Bank 1) - Adaptionswert Spätposition unplausibel |
| 0x052B | P052B | P052B Kaltstart Nockenwellensteuerung Einlass (Bank 1) - Regelfehler, unplausible Position |
| 0x052C | P052C | P052C Kaltstart Nockenwellensteuerung Einlass (Bank 2) - Adaptionswert Spätposition unplausibel |
| 0x052D | P052D | P052D Kaltstart Nockenwellensteuerung Einlass (Bank 2) - Regelfehler, unplausible Position |
| 0x052E | P052E | P052E Kurbelgehäuseentlüftung Regelventil - Leistungsproblem |
| 0x052F | P052F | P052F Glühkerzen-Steuergerät Bordnetzspannung - Fehlfunktion |
| 0x0530 | P0530 | P0530 Klimaanlage Kältemitteldrucksensor 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0531 | P0531 | P0531 Klimaanlage Kältemitteldrucksensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0532 | P0532 | P0532 Klimaanlage Kältemitteldrucksensor 1 Schaltkreis - niedrig |
| 0x0533 | P0533 | P0533 Klimaanlage Kältemitteldrucksensor 1 Schaltkreis - hoch |
| 0x0534 | P0534 | P0534 Klimaanlage Kältemittel - Füllungsverlust |
| 0x0535 | P0535 | P0535 Klimaanlage Verdampfer Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0536 | P0536 | P0536 Klimaanlage Verdampfer Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0537 | P0537 | P0537 Klimaanlage Verdampfer Temperaturfühler Schaltkreis - niedrig |
| 0x0538 | P0538 | P0538 Klimaanlage Verdampfer Temperaturfühler Schaltkreis - hoch |
| 0x0539 | P0539 | P0539 Klimaanlage Verdampfer Temperaturfühler Schaltkreis - sporadisch |
| 0x053A | P053A | P053A Kurbelgehäuseentlüftung Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x053B | P053B | P053B Kurbelgehäuseentlüftung Heizungssteuerkreis - niedrig |
| 0x053C | P053C | P053C Kurbelgehäuseentlüftung Heizungssteuerkreis - hoch |
| 0x053D | P053D | P053D Kurbelgehäuseentlüftung Heizung - Leistungsproblem |
| 0x053F | P053F | P053F Kaltstart Kraftstoffdruck - Leistungsproblem |
| 0x0540 | P0540 | P0540 Ansaugluftvorwärmer Schaltkreis (Bank 1) - Fehlfunktion |
| 0x0541 | P0541 | P0541 Ansaugluftvorwärmer Schaltkreis (Bank 1) - niedrig |
| 0x0542 | P0542 | P0542 Ansaugluftvorwärmer Schaltkreis (Bank 1) - hoch |
| 0x0543 | P0543 | P0543 Ansaugluftvorwärmer Schaltkreis (Bank 1) - Leitungsunterbrechung |
| 0x0544 | P0544 | P0544 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0545 | P0545 | P0545 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 1) - niedrig |
| 0x0546 | P0546 | P0546 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 1) - hoch |
| 0x0547 | P0547 | P0547 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0548 | P0548 | P0548 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 1) - niedrig |
| 0x0549 | P0549 | P0549 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 1) - hoch |
| 0x054A | P054A | P054A Kaltstart Nockenwellensteuerung  Auslass (Bank 1) - Adaptionswert Spätposition unplausibel |
| 0x054B | P054B | P054B Kaltstart Nockenwellensteuerung Auslass (Bank 1) - Regelfehler, unplausible Position |
| 0x054C | P054C | P054C Kaltstart Nockenwellensteuerung Auslass (Bank 2) - Adaptionswert Spätposition unplausibel |
| 0x054D | P054D | P054D Kaltstart Nockenwellensteuerung Auslass (Bank 2) - Regelfehler, unplausible Position |
| 0x0550 | P0550 | P0550 Servolenkung, Drucksensor/-schalter Schaltkreis - Fehlfunktion |
| 0x0551 | P0551 | P0551 Servolenkung, Drucksensor/-schalter Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0552 | P0552 | P0552 Servolenkung, Drucksensor/-schalter Schaltkreis - niedrig |
| 0x0553 | P0553 | P0553 Servolenkung, Drucksensor/-schalter Schaltkreis - hoch |
| 0x0554 | P0554 | P0554 Servolenkung, Drucksensor/-schalter Schaltkreis - sporadisch |
| 0x0555 | P0555 | P0555 Bremskraftverstärker Drucksensor Schaltkreis - Fehlfunktion |
| 0x0556 | P0556 | P0556 Bremskraftverstärker Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0557 | P0557 | P0557 Bremskraftverstärker Drucksensor Schaltkreis - niedrig |
| 0x0558 | P0558 | P0558 Bremskraftverstärker Drucksensor Schaltkreis - hoch |
| 0x0559 | P0559 | P0559 Bremskraftverstärker Drucksensor Schaltkreis - sporadisch |
| 0x055A | P055A | P055A Motoröldruck Sensor/Schalter Schaltkreis (Bank 2) - Fehlfunktion |
| 0x055B | P055B | P055B Motoröldruck Sensor/Schalter Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x055C | P055C | P055C Motoröldruck Sensor/Schalter Schaltkreis (Bank 2) - niedrig |
| 0x055D | P055D | P055D Motoröldruck Sensor/Schalter Schaltkreis (Bank 2) - hoch |
| 0x0560 | P0560 | P0560 Bordnetzspannung - Fehlfunktion |
| 0x0561 | P0561 | P0561 Bordnetzspannung - Instabil |
| 0x0562 | P0562 | P0562 Bordnetzspannung - Unterspannung |
| 0x0563 | P0563 | P0563 Bordnetzspannung - Überspannung |
| 0x0564 | P0564 | P0564 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0565 | P0565 | P0565 Fahrgeschwindigkeitsregelung, Signal 'an' - Fehlfunktion |
| 0x0566 | P0566 | P0566 Fahrgeschwindigkeitsregelung, Signal 'aus' - Fehlfunktion |
| 0x0567 | P0567 | P0567 Fahrgeschwindigkeitsregelung, Signal 'wiederaufnehmen' - Fehlfunktion |
| 0x0568 | P0568 | P0568 Fahrgeschwindigkeitsregelung, Signal 'einstellen' - Fehlfunktion |
| 0x0569 | P0569 | P0569 Fahrgeschwindigkeitsregelung, Signal 'ausrollen' - Fehlfunktion |
| 0x056A | P056A | P056A Fahrgeschwindigkeitsregelung, Signal 'Abstand vergrößern' - Fehlfunktion |
| 0x056B | P056B | P056B Fahrgeschwindigkeitsregelung, Signal 'Abstand verkleinern' - Fehlfunktion |
| 0x056C | P056C | P056C Fahrgeschwindigkeitsregelung, Signal 'löschen' - Fehlfunktion |
| 0x0570 | P0570 | P0570 Fahrgeschwindigkeitsregelung, Signal 'beschleunigen' - Fehlfunktion |
| 0x0571 | P0571 | P0571 Bremsschalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0572 | P0572 | P0572 Bremsschalter Schaltkreis - niedrig |
| 0x0573 | P0573 | P0573 Bremsschalter Schaltkreis - hoch |
| 0x0574 | P0574 | P0574 Fahrgeschwindigkeitsregelung - Fahrzeuggeschwindigkeit zu hoch |
| 0x0575 | P0575 | P0575 Fahrgeschwindigkeitsregelung Eingangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0576 | P0576 | P0576 Fahrgeschwindigkeitsregelung Eingangsschaltkreis - niedrig |
| 0x0577 | P0577 | P0577 Fahrgeschwindigkeitsregelung Eingangsschaltkreis - hoch |
| 0x0578 | P0578 | P0578 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' Schaltkreis - Signal festliegend |
| 0x0579 | P0579 | P0579 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x057A | P057A | P057A Bremspedal Positionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x057B | P057B | P057B Bremspedal Positionssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x057C | P057C | P057C Bremspedal Positionssensor Schaltkreis - niedrig |
| 0x057D | P057D | P057D Bremspedal Positionssensor Schaltkreis - hoch |
| 0x057E | P057E | P057E Bremspedal Positionssensor Schaltkreis - sporadisch/unregelmäßig |
| 0x0580 | P0580 | P0580 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' Schaltkreis - niedrig |
| 0x0581 | P0581 | P0581 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' Schaltkreis - hoch |
| 0x0582 | P0582 | P0582 Fahrgeschwindigkeitsregelung Unterdrucksteuerung Schaltkreis - Fehlfunktion oder Leitungunterbrechung |
| 0x0583 | P0583 | P0583 Fahrgeschwindigkeitsregelung Unterdrucksteuerung Schaltkreis - niedrig |
| 0x0584 | P0584 | P0584 Fahrgeschwindigkeitsregelung Unterdrucksteuerung Schaltkreis - hoch |
| 0x0585 | P0585 | P0585 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A'/'B' - Korrelationsfehler |
| 0x0586 | P0586 | P0586 Fahrgeschwindigkeitsregelung Entlüftungskreislauf - Fehlfunktion oder Leitungsunterbrechung |
| 0x0587 | P0587 | P0587 Fahrgeschwindigkeitsregelung Entlüftungskreislauf - niedrig |
| 0x0588 | P0588 | P0588 Fahrgeschwindigkeitsregelung Entlüftungskreislauf - hoch |
| 0x0589 | P0589 | P0589 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0590 | P0590 | P0590 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' Schaltkreis - Signal festliegend |
| 0x0591 | P0591 | P0591 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0592 | P0592 | P0592 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' Schaltkreis - niedrig |
| 0x0593 | P0593 | P0593 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' Schaltkreis - hoch |
| 0x0594 | P0594 | P0594 Fahrgeschwindigkeitsregelung Servosteuerung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0595 | P0595 | P0595 Fahrgeschwindigkeitsregelung Servosteuerung Schaltkreis - niedrig |
| 0x0596 | P0596 | P0596 Fahrgeschwindigkeitsregelung Servosteuerung Schaltkreis - hoch |
| 0x0597 | P0597 | P0597 Thermostat Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0598 | P0598 | P0598 Thermostat Heizungssteuerkreis - niedrig |
| 0x0599 | P0599 | P0599 Thermostat Heizungssteuerkreis - hoch |
| 0x0600 | P0600 | P0600 Serielle Kommunikationsverbindung - Fehlfunktion |
| 0x0601 | P0601 | P0601 Steuergerät - interner Prüfsummenfehler |
| 0x0602 | P0602 | P0602 Steuergerät - Programmierfehler |
| 0x0603 | P0603 | P0603 Steuergerät - interner 'Keep Alive Memory' (KAM) Fehler |
| 0x0604 | P0604 | P0604 Steuergerät - interner 'Random Access Memory' (RAM) Fehler |
| 0x0605 | P0605 | P0605 Steuergerät - interner 'Read only Memory' (ROM) Fehler |
| 0x0606 | P0606 | P0606 Steuergerät  - Prozessorfehler |
| 0x0607 | P0607 | P0607 Steuergerät - Leistungsproblem |
| 0x0608 | P0608 | P0608 Fahrzeuggeschwindigkeitssensor-Steuergerät Ausgang 'A' - Fehlfunktion |
| 0x0609 | P0609 | P0609 Fahrzeuggeschwindigkeitssensor-Steuergerät Ausgang 'B' - Fehlfunktion |
| 0x060A | P060A | P060A Steuergerät - internes Leistungsproblem Prozessorüberwachung |
| 0x060B | P060B | P060B Steuergerät - internes Leistungsproblem A/D Verarbeitung |
| 0x060C | P060C | P060C Steuergerät - internes Leistungsproblem Hauptprozessor |
| 0x060D | P060D | P060D Steuergerät - internes Leistungsproblem Gaspedalstellung |
| 0x060E | P060E | P060E Steuergerät - internes Leistungsproblem Drosselklappenstellung |
| 0x060F | P060F | P060F Steuergerät - internes Leistungsproblem Kühlmitteltemperatur |
| 0x0610 | P0610 | P0610 Sonderfunktionen-Steuergerät - Fehlfunktion |
| 0x0611 | P0611 | P0611 Einspritzventil-Steuergerät - Leistungsproblem |
| 0x0612 | P0612 | P0612 Einspritzventil-Steuergerät Relais - Fehlfunktion |
| 0x0613 | P0613 | P0613 Getriebesteuergerät - Prozessorfehler |
| 0x0614 | P0614 | P0614 Motorsteuergerät/Getriebesteuergerät - Kompatibilitätsfehler |
| 0x0615 | P0615 | P0615 Anlasserrelais Schaltkreis - Fehlfunktion |
| 0x0616 | P0616 | P0616 Anlasserrelais Schaltkreis - niedrig |
| 0x0617 | P0617 | P0617 Anlasserrelais Schaltkreis - hoch |
| 0x0618 | P0618 | P0618 Alternativkraftstoff-Steuergerät - interner 'Keep Alive Memory' (KAM) Fehler |
| 0x0619 | P0619 | P0619 Alternativkraftstoff-Steuergerät - interner 'Random Access Memory'/ 'Read only Memory' (RAM/ROM) Fehler |
| 0x061A | P061A | P061A Steuergerät - internes Leistungsproblem Drehmoment |
| 0x061B | P061B | P061B Steuergerät - internes Leistungsproblem Momentenberechnung |
| 0x061C | P061C | P061C Steuergerät - internes Leistungsproblem Drehzahl |
| 0x061D | P061D | P061D Steuergerät - internes Leistungsproblem Luftmasse |
| 0x061E | P061E | P061E Steuergerät - internes Leistungsproblem Bremssignal |
| 0x061F | P061F | P061F Steuergerät - internes Leistungsproblem Drosselklappensteller |
| 0x0620 | P0620 | P0620 Generatorsteuerung Schaltkreis - Fehlfunktion |
| 0x0621 | P0621 | P0621 Generator-Kontrollleuchte / Klemme 'L' Schaltkreis - Fehlfunktion |
| 0x0622 | P0622 | P0622 Generatorfeld / Klemme 'F' Schaltkreis - Fehlfunktion |
| 0x0623 | P0623 | P0623 Generator-Kontrollleuchte Schaltkreis - Fehlfunktion |
| 0x0624 | P0624 | P0624 Tankdeckel-Kontrollleuchte Schaltkreis - Fehlfunktion |
| 0x0625 | P0625 | P0625 Generatorfeld / Klemme 'F' Schaltkreis - niedrig |
| 0x0626 | P0626 | P0626 Generatorfeld / Klemme 'F' Schaltkreis - hoch |
| 0x0627 | P0627 | P0627 Kraftstoffpumpe 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0628 | P0628 | P0628 Kraftstoffpumpe 1 Steuerkreis - niedrig |
| 0x0629 | P0629 | P0629 Kraftstoffpumpe 1 Steuerkreis - hoch |
| 0x062A | P062A | P062A Kraftstoffpumpe 1 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x062B | P062B | P062B Steuergerät - internes Leistungsproblem Einspritzregelung |
| 0x062C | P062C | P062C Steuergerät - internes Leistungsproblem Fahrzeuggeschwindigkeit |
| 0x062D | P062D | P062D Einspritzventil Treiber Schaltkreis (Bank 1) - Leistungsproblem |
| 0x062E | P062E | P062E Einspritzventil Treiber Schaltkreis (Bank 2) - Leistungsproblem |
| 0x062F | P062F | P062F Steuergerät - interner EEPROM Fehler |
| 0x0630 | P0630 | P0630 Motorsteuergerät/Powertrain Steuergerät - Fahrgestellnummer nicht programmiert oder inkompatibel |
| 0x0631 | P0631 | P0631 Getriebesteuergerät - Fahrgestellnummer nicht programmiert oder inkompatibel |
| 0x0632 | P0632 | P0632 Motorsteuergerät/Powertrain Steuergerät - Kilometerzähler nicht programmiert |
| 0x0633 | P0633 | P0633 Motorsteuergerät/Powerstrain Steuergerät; EWS (elektronische Wegfahrsperre) - Schlüsseldaten nicht programmiert |
| 0x0634 | P0634 | P0634 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät - Innentemperatur 1 zu hoch |
| 0x0635 | P0635 | P0635 Servolenkungssteuerung Schaltkreis - Fehlfunktion |
| 0x0636 | P0636 | P0636 Servolenkungssteuerung Schaltkreis - niedrig |
| 0x0637 | P0637 | P0637 Servolenkungssteuerung Schaltkreis - hoch |
| 0x0638 | P0638 | P0638 Drosselklappensteller (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x0639 | P0639 | P0639 Drosselklappensteller (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x063A | P063A | P063A Generator Spannungsüberwachungskreis - Fehlfunktion |
| 0x063B | P063B | P063B Generator Spannungsüberwachungskreis - Messbereichs- oder Leistungsproblem |
| 0x063C | P063C | P063C Generator Spannungsüberwachungskreis - niedrig |
| 0x063D | P063D | P063D Generator Spannungsüberwachungskreis - hoch |
| 0x063E | P063E | P063E Automatische Konfiguration Drosselklappe - Input nicht vorhanden |
| 0x063F | P063F | P063F Automatische Konfiguration Motorkühlmitteltemperatur - Input nicht vorhanden |
| 0x0640 | P0640 | P0640 Ansaugluftvorwärmer Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0641 | P0641 | P0641 Sensor-Referenzspannung 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0642 | P0642 | P0642 Sensor-Referenzspannung 1 Schaltkreis - niedrig |
| 0x0643 | P0643 | P0643 Sensor-Referenzspannung 1 Schaltkreis - hoch |
| 0x0644 | P0644 | P0644 Serielle Kommunikationsverbindung Treiber Display |
| 0x0645 | P0645 | P0645 Klimakompressor-Kupplung Relaissteuerung Schaltkreis- Fehlfunktion |
| 0x0646 | P0646 | P0646 Klimakompressor-Kupplung Relaissteuerung Schaltkreis- niedrig |
| 0x0647 | P0647 | P0647 Klimakompressor-Kupplung Relaissteuerung Schaltkreis- hoch |
| 0x0648 | P0648 | P0648 EWS (elektronische Wegfahrsperre) Kontrollleuchte Schaltkreis - Fehlfunktion |
| 0x0649 | P0649 | P0649 Motordrehzahl Kontrollleuchte Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x064A | P064A | P064A Kraftstoffpumpen-Steuergerät - Fehlfunktion |
| 0x064B | P064B | P064B Nebenabtrieb-Steuergerät - Fehlfunktion |
| 0x064C | P064C | P064C Glühkerzen-Steuergerät - Fehlfunktion |
| 0x064D | P064D | P064D Steuergerät - internes Leistungsproblem Lambdasondenprozessor (Bank 1) |
| 0x064E | P064E | P064E Steuergerät - internes Leistungsproblem Lambdasondenprozessor (Bank 2) |
| 0x064F | P064F | P064F Unzulässige Software/Kalibrierung entdeckt |
| 0x0650 | P0650 | P0650 Malfunction Indicator Lamp (MIL) Schaltkreis - Fehlfunktion |
| 0x0651 | P0651 | P0651 Sensor-Referenzspannung 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0652 | P0652 | P0652 Sensor-Referenzspannung 2 Schaltkreis - niedrig |
| 0x0653 | P0653 | P0653 Sensor-Referenzspannung 2 Schaltkreis - hoch |
| 0x0654 | P0654 | P0654 Motordrehzahl Ausgangsschaltkreis - Fehlfunktion |
| 0x0655 | P0655 | P0655 Motorüberhitzungs-Warnleuchte Ausgangsschaltkreis - Fehlfunktion |
| 0x0656 | P0656 | P0656 Kraftstoff-Füllstand Ausgangsschaltkreis - Fehlfunktion |
| 0x0657 | P0657 | P0657 Aktuator Versorgungsspannung 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0658 | P0658 | P0658 Aktuator Versorgungsspannung 1 Schaltkreis - niedrig |
| 0x0659 | P0659 | P0659 Aktuator Versorgungsspannung 1 Schaltkreis - hoch |
| 0x065A | P065A | P065A Generatorsystem - Leistungsproblem |
| 0x065B | P065B | P065B Generatorsteuerung Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x065C | P065C | P065C Generator - mechanisches Leistungsproblem |
| 0x065D | P065D | P065D Reduktionssystem Malfunction Lamp Steuerkreis - Fehlfunktion |
| 0x065E | P065E | P065E Ansaugkrümmer Steller/Steuerklappe (Bank 1) - Leistungsproblem |
| 0x065F | P065F | P065F Ansaugkrümmer Steller/Steuerklappe (Bank 2) - Leistungsproblem |
| 0x0660 | P0660 | P0660 Ansaugkrümmer Steller/Steuerklappe Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0661 | P0661 | P0661 Ansaugkrümmer Steller/Steuerklappe Steuerkreis (Bank 1) - niedrig |
| 0x0662 | P0662 | P0662 Ansaugkrümmer Steller/Steuerklappe Steuerkreis (Bank 1) - hoch |
| 0x0663 | P0663 | P0663 Ansaugkrümmer Steller/Steuerklappe Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0664 | P0664 | P0664 Ansaugkrümmer Steller/Steuerklappe Steuerkreis (Bank 2) - niedrig |
| 0x0665 | P0665 | P0665 Ansaugkrümmer Steller/Steuerklappe Steuerkreis (Bank 2) - hoch |
| 0x0666 | P0666 | P0666 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 1 Schaltkreis - Fehlfunktion |
| 0x0667 | P0667 | P0667 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 1 - Messbereichs- oder Leistungsproblem |
| 0x0668 | P0668 | P0668 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 1 Schaltkreis - niedrig |
| 0x0669 | P0669 | P0669 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 1 Schaltkreis - hoch |
| 0x066A | P066A | P066A Glühkerze Zylinder 1 Steuerkreis - niedrig |
| 0x066B | P066B | P066B Glühkerze Zylinder 1 Steuerkreis - hoch |
| 0x066C | P066C | P066C Glühkerze Zylinder 2 Steuerkreis - niedrig |
| 0x066D | P066D | P066D Glühkerze Zylinder 2 Steuerkreis - hoch |
| 0x066E | P066E | P066E Glühkerze Zylinder 3 Steuerkreis - niedrig |
| 0x066F | P066F | P066F Glühkerze Zylinder 3 Steuerkreis - hoch |
| 0x0670 | P0670 | P0670 Glühkerzen-Steuergerät Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0671 | P0671 | P0671 Glühkerze Zylinder 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0672 | P0672 | P0672 Glühkerze Zylinder 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0673 | P0673 | P0673 Glühkerze Zylinder 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0674 | P0674 | P0674 Glühkerze Zylinder 4 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0675 | P0675 | P0675 Glühkerze Zylinder 5 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0676 | P0676 | P0676 Glühkerze Zylinder 6 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0677 | P0677 | P0677 Glühkerze Zylinder 7 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0678 | P0678 | P0678 Glühkerze Zylinder 8 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0679 | P0679 | P0679 Glühkerze Zylinder 9 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x067A | P067A | P067A Glühkerze Zylinder 4 Steuerkreis - niedrig |
| 0x067B | P067B | P067B Glühkerze Zylinder 4 Steuerkreis - hoch |
| 0x067C | P067C | P067C Glühkerze Zylinder 5 Steuerkreis - niedrig |
| 0x067D | P067D | P067D Glühkerze Zylinder 5 Steuerkreis - hoch |
| 0x067E | P067E | P067E Glühkerze Zylinder 6 Steuerkreis - niedrig |
| 0x067F | P067F | P067F Glühkerze Zylinder 6 Steuerkreis - hoch |
| 0x0680 | P0680 | P0680 Glühkerze Zylinder 10 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0681 | P0681 | P0681 Glühkerze Zylinder 11 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0682 | P0682 | P0682 Glühkerze Zylinder 12 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0683 | P0683 | P0683 Glühkerzen-Steuergerät an Powertrain Steuergerät Kommunikationsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0684 | P0684 | P0684 Glühkerzen-Steuergerät an Powertrain Steuergerät Kommunikationsschaltkreis - Messbereichs- oder Leistungsprobelm |
| 0x0685 | P0685 | P0685 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0686 | P0686 | P0686 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Steuerkreis - niedrig |
| 0x0687 | P0687 | P0687 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Steuerkreis - hoch |
| 0x0688 | P0688 | P0688 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0689 | P0689 | P0689 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungsschaltkreis - niedrig |
| 0x068A | P068A | P068A Motorsteuergerät/Powertrain Steuergerät Hauptrelais unbestromt Leistungsproblem - zu früh |
| 0x068B | P068B | P068B Motorsteuergerät/Powertrain Steuergerät Hauptrelais unbestromt Leistungsproblem - zu spät |
| 0x068C | P068C | P068C Glühkerze Zylinder 7 Steuerkreis - niedrig |
| 0x068D | P068D | P068D Glühkerze Zylinder 7 Steuerkreis - hoch |
| 0x068E | P068E | P068E Glühkerze Zylinder 8 Steuerkreis - niedrig |
| 0x068F | P068F | P068F Glühkerze Zylinder 8 Steuerkreis - hoch |
| 0x0690 | P0690 | P0690 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungsschaltkreis - hoch |
| 0x0691 | P0691 | P0691 Motorlüfter 1 Steuerkreis - niedrig |
| 0x0692 | P0692 | P0692 Motorlüfter 1 Steuerkreis - hoch |
| 0x0693 | P0693 | P0693 Motorlüfter 2 Steuerkreis - niedrig |
| 0x0694 | P0694 | P0694 Motorlüfter 2 Steuerkreis - hoch |
| 0x0695 | P0695 | P0695 Motorlüfter 3 Steuerkreis - niedrig |
| 0x0696 | P0696 | P0696 Motorlüfter 3 Steuerkreis - hoch |
| 0x0697 | P0697 | P0697 Sensor-Referenzspannung 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0698 | P0698 | P0698 Sensor-Referenzspannung 3 Schaltkreis - niedrig |
| 0x0699 | P0699 | P0699 Sensor-Referenzspannung 3 Schaltkreis - hoch |
| 0x069A | P069A | P069A Glühkerze Zylinder 9 Steuerkreis - niedrig |
| 0x069B | P069B | P069B Glühkerze Zylinder 9 Steuerkreis - hoch |
| 0x069C | P069C | P069C Glühkerze Zylinder 10 Steuerkreis - niedrig |
| 0x069D | P069D | P069D Glühkerze Zylinder 10 Steuerkreis - hoch |
| 0x069E | P069E | P069E Kraftstoffpumpen-Steuergerät Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion |
| 0x069F | P069F | P069F Drosselklappensteller Kontrollleuchte Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x06A0 | P06A0 | P06A0 Variabler Klimakompressor Steuerkreis - Fehlfunktion |
| 0x06A1 | P06A1 | P06A1 Variabler Klimakompressor Steuerkreis - niedrig |
| 0x06A2 | P06A2 | P06A2 Variabler Klimakompressor Steuerkreis - hoch |
| 0x06A3 | P06A3 | P06A3 Sensor-Referenzspannung 4 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x06A4 | P06A4 | P06A4 Sensor-Referenzspannung 4 Schaltkreis - niedrig |
| 0x06A5 | P06A5 | P06A5 Sensor-Referenzspannung 4 Schaltkreis - hoch |
| 0x06A6 | P06A6 | P06A6 Sensor-Referenzspannung 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06A7 | P06A7 | P06A7 Sensor-Referenzspannung 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06A8 | P06A8 | P06A8 Sensor-Referenzspannung 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06A9 | P06A9 | P06A9 Sensor-Referenzspannung 4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06AA | P06AA | P06AA Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät - Innentemperatur 2 zu hoch |
| 0x06AB | P06AB | P06AB Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 2 Schaltkreis - Fehlfunktion |
| 0x06AC | P06AC | P06AC Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 2 - Messbereichs- oder Leistungsproblem |
| 0x06AD | P06AD | P06AD Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 2 Schaltkreis - niedrig |
| 0x06AE | P06AE | P06AE Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 2 Schaltkreis - hoch |
| 0x06AF | P06AF | P06AF Drehmomentsanforderungssystem - Zwangs-Motorabschaltung |
| 0x06B0 | P06B0 | P06B0 Sensor Spannungsversorgungsschaltkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x06B1 | P06B1 | P06B1 Sensor Spannungsversorgungsschaltkreis 1 - niedrig |
| 0x06B2 | P06B2 | P06B2 Sensor Spannungsversorgungsschaltkreis 1 - hoch |
| 0x06B3 | P06B3 | P06B3 Sensor Spannungsversorgungsschaltkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x06B4 | P06B4 | P06B4 Sensor Spannungsversorgungsschaltkreis 2 - niedrig |
| 0x06B5 | P06B5 | P06B5 Sensor Spannungsversorgungsschaltkreis 2 - hoch |
| 0x06B6 | P06B6 | P06B6 Steuergerät - internes Leistungsproblem Klopfsensorprozessor 1 (Bank 1) |
| 0x06B7 | P06B7 | P06B7 Steuergerät - internes Leistungsproblem Klopfsensorprozessor 2 (Bank 2) |
| 0x06B8 | P06B8 | P06B8 Steuergerät - interner Non-Volatile Random Access Memory (NVRAM) Fehler |
| 0x06B9 | P06B9 | P06B9 Glühkerze Zylinder 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06BA | P06BA | P06BA Glühkerze Zylinder 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06BB | P06BB | P06BB Glühkerze Zylinder 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06BC | P06BC | P06BC Glühkerze Zylinder 4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06BD | P06BD | P06BD Glühkerze Zylinder 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06BE | P06BE | P06BE Glühkerze Zylinder 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06BF | P06BF | P06BF Glühkerze Zylinder 7 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06C0 | P06C0 | P06C0 Glühkerze Zylinder 8 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06C1 | P06C1 | P06C1 Glühkerze Zylinder 9 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06C2 | P06C2 | P06C2 Glühkerze Zylinder 10 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06C3 | P06C3 | P06C3 Glühkerze Zylinder 11 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06C4 | P06C4 | P06C4 Glühkerze Zylinder 12 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06C5 | P06C5 | P06C5 Glühkerze Zylinder 1 - fehlerhaft |
| 0x06C6 | P06C6 | P06C6 Glühkerze Zylinder 2 - fehlerhaft |
| 0x06C7 | P06C7 | P06C7 Glühkerze Zylinder 3 - fehlerhaft |
| 0x06C8 | P06C8 | P06C8 Glühkerze Zylinder 4 - fehlerhaft |
| 0x06C9 | P06C9 | P06C9 Glühkerze Zylinder 5 - fehlerhaft |
| 0x06CA | P06CA | P06CA Glühkerze Zylinder 6 - fehlerhaft |
| 0x06CB | P06CB | P06CB Glühkerze Zylinder 7 - fehlerhaft |
| 0x06CC | P06CC | P06CC Glühkerze Zylinder 8 - fehlerhaft |
| 0x06CD | P06CD | P06CD Glühkerze Zylinder 9 - fehlerhaft |
| 0x06CE | P06CE | P06CE Glühkerze Zylinder 10 - fehlerhaft |
| 0x06CF | P06CF | P06CF Glühkerze Zylinder 11 - fehlerhaft |
| 0x06D0 | P06D0 | P06D0 Glühkerze Zylinder 12 - fehlerhaft |
| 0x06D1 | P06D1 | P06D1 Steuergerät - internes Leistungsproblem Zündspule |
| 0x06D2 | P06D2 | P06D2 Sensor-Referenzspannung 5 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x06D3 | P06D3 | P06D3 Sensor-Referenzspannung 5 Schaltkreis - niedrig |
| 0x06D4 | P06D4 | P06D4 Sensor-Referenzspannung 5 Schaltkreis - hoch |
| 0x06D5 | P06D5 | P06D5 Sensor-Referenzspannung 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06D6 | P06D6 | P06D6 Sensor-Referenzspannung 6 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x06D7 | P06D7 | P06D7 Sensor-Referenzspannung 6 Schaltkreis - niedrig |
| 0x06D8 | P06D8 | P06D8 Sensor-Referenzspannung 6 Schaltkreis - hoch |
| 0x06D9 | P06D9 | P06D9 Sensor-Referenzspannung 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x06DA | P06DA | P06DA Motoröldruck Steuerkreis - Fehlfunkion oder Leitungsunterbrechung |
| 0x06DB | P06DB | P06DB Motoröldruck Steuerkreis - niedrig |
| 0x06DC | P06DC | P06DC Motoröldruck Steuerkreis - hoch |
| 0x06DD | P06DD | P06DD Motoröldruck Steuerkreis - Leistungsproblem oder klemmt offen |
| 0x06DE | P06DE | P06DE Motoröldruck Steuerkreis - klemmt geschlossen |
| 0x06DF | P06DF | P06DF Glühkerzen-Steuergerät - Prüfsummenfehler |
| 0x06E0 | P06E0 | P06E0 Glühkerze Zylinder 11 Steuerkreis - niedrig |
| 0x06E1 | P06E1 | P06E1 Glühkerze Zylinder 11 Steuerkreis - hoch |
| 0x06E2 | P06E2 | P06E2 Glühkerze Zylinder 12 Steuerkreis - niedrig |
| 0x06E3 | P06E3 | P06E3 Glühkerze Zylinder 12 Steuerkreis - hoch |
| 0x06E4 | P06E4 | P06E4 Wakeup-Steuergerät Schaltkreis - Leistungsproblem |
| 0x0700 | P0700 | P0700 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion  |
| 0x0701 | P0701 | P0701 Getriebesteuersystem - Messbereichs- oder Leistungsproblem |
| 0x0702 | P0702 | P0702 Getriebesteuersystem - elektrischer Fehler |
| 0x0703 | P0703 | P0703 Bremstestschalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0704 | P0704 | P0704 Kupplungsschalter Eingangsschaltkreis - Fehlfunktion |
| 0x0705 | P0705 | P0705 Getriebepositionssensor 1 (PRNDL) Schaltkreis - Fehlfunktion |
| 0x0706 | P0706 | P0706 Getriebepositionssensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0707 | P0707 | P0707 Getriebepositionssensor 1 Schaltkreis - niedrig |
| 0x0708 | P0708 | P0708 Getriebepositionssensor 1 Schaltkreis - hoch |
| 0x0709 | P0709 | P0709 Getriebepositionssensor 1 Schaltkreis - sporadisch |
| 0x070A | P070A | P070A Getriebeöl-Füllstandssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x070B | P070B | P070B Getriebeöl-Füllstandssensor Schaltkreis - Messbereichs- oder Leitungsunterbrechung |
| 0x070C | P070C | P070C Getriebeöl-Füllstandssensor Schaltkreis - niedrig |
| 0x070D | P070D | P070D Getriebeöl-Füllstandssensor Schaltkreis - hoch |
| 0x070E | P070E | P070E Getriebeöl-Füllstandssensor Schaltkreis - sporadisch/unregelmäßig |
| 0x070F | P070F | P070F Getriebeöl-Füllstand - zu niedrig |
| 0x0710 | P0710 | P0710 Getriebeöltemperaturfühler 1 Schaltkreis - Fehlfunktion |
| 0x0711 | P0711 | P0711 Getriebeöltemperaturfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0712 | P0712 | P0712 Getriebeöltemperaturfühler 1 Schaltkreis - niedrig |
| 0x0713 | P0713 | P0713 Getriebeöltemperaturfühler 1 Schaltkreis - hoch |
| 0x0714 | P0714 | P0714 Getriebeöltemperaturfühler 1 Schaltkreis - sporadisch |
| 0x0715 | P0715 | P0715 Eingangsdrehzahlfühler 1 Turbine Schaltkreis - Fehlfunktion |
| 0x0716 | P0716 | P0716 Eingangsdrehzahlfühler 1 Turbine Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0717 | P0717 | P0717 Eingangsdrehzahlfühler 1 Turbine Schaltkreis - kein Signal |
| 0x0718 | P0718 | P0718 Eingangsdrehzahlfühler 1 Turbine Schaltkreis - sporadisch |
| 0x0719 | P0719 | P0719 Bremstestschalter Schaltkreis - niedrig |
| 0x071A | P071A | P071A Getriebewählschalter 1 Schaltkreis - Fehlfunktion |
| 0x071B | P071B | P071B Getriebewählschalter 1 Schaltkreis - niedrig |
| 0x071C | P071C | P071C Getriebewählschalter 1 Schaltkreis - hoch |
| 0x071D | P071D | P071D Getriebewählschalter 2 Schaltkreis - Fehlfunktion |
| 0x071E | P071E | P071E Getriebewählschalter 2 Schaltkreis - niedrig |
| 0x071F | P071F | P071F Getriebewählschalter 2 Schaltkreis - hoch |
| 0x0720 | P0720 | P0720 Abtriebsdrehzahlfühler Schaltkreis - Fehlfunktion |
| 0x0721 | P0721 | P0721 Abtriebsdrehzahlfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0722 | P0722 | P0722 Abtriebsdrehzahlfühler Schaltkreis - kein Signal |
| 0x0723 | P0723 | P0723 Abtriebsdrehzahlfühler Schaltkreis - sporadisch |
| 0x0724 | P0724 | P0724 Bremstestschalter Schaltkreis - hoch |
| 0x0725 | P0725 | P0725 Motordrehzahl Eingangsschaltkreis - Fehlfunktion |
| 0x0726 | P0726 | P0726 Motordrehzahl Eingangsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0727 | P0727 | P0727 Motordrehzahl Eingangsschaltkreis - kein Signal |
| 0x0728 | P0728 | P0728 Motordrehzahl Eingangsschaltkreis - sporadisch |
| 0x0729 | P0729 | P0729 Falsches Übersetzungsverhältnis - 6. Gang |
| 0x072A | P072A | P072A Leerlaufstellung - klemmt |
| 0x072B | P072B | P072B Rückwärtsgang - klemmt |
| 0x072C | P072C | P072C Gang 1 - klemmt |
| 0x072D | P072D | P072D Gang 2 - klemmt |
| 0x072E | P072E | P072E Gang 3 - klemmt |
| 0x072F | P072F | P072F Gang 4 - klemmt |
| 0x0730 | P0730 | P0730 Falsches Übersetzungsverhältnis |
| 0x0731 | P0731 | P0731 Falsches Übersetzungsverhältnis - 1. Gang |
| 0x0732 | P0732 | P0732 Falsches Übersetzungsverhältnis - 2. Gang |
| 0x0733 | P0733 | P0733 Falsches Übersetzungsverhältnis - 3. Gang |
| 0x0734 | P0734 | P0734 Falsches Übersetzungsverhältnis - 4. Gang |
| 0x0735 | P0735 | P0735 Falsches Übersetzungsverhältnis - 5. Gang |
| 0x0736 | P0736 | P0736 Falsches Übersetzungsverhältnis - Rückwärtsgang |
| 0x0737 | P0737 | P0737 Getriebesteuergerät, Motordrehzahl Ausgangsschaltkreis - Fehlfunktion |
| 0x0738 | P0738 | P0738 Getriebesteuergerät, Motordrehzahl Ausgangsschaltkreis - niedrig |
| 0x0739 | P0739 | P0739 Getriebesteuergerät, Motordrehzahl Ausgangsschaltkreis - hoch |
| 0x073A | P073A | P073A Gang 5 - klemmt |
| 0x073B | P073B | P073B Gang 6 - klemmt |
| 0x073C | P073C | P073C Gang 7 - klemmt |
| 0x073D | P073D | P073D Leerlaufstellung - nicht einlegbar |
| 0x073E | P073E | P073E Rückwärtsgang - nicht einlegbar |
| 0x073F | P073F | P073F Gang 1 - nicht einlegbar |
| 0x0740 | P0740 | P0740 Wandlerüberbrückungskupplung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0741 | P0741 | P0741 Wandlerüberbrückungskupplung Schaltkreis - Leistungsproblem oder klemmt offen |
| 0x0742 | P0742 | P0742 Wandlerüberbrückungskupplung Schaltkreis - klemmt geschlossen |
| 0x0743 | P0743 | P0743 Wandlerüberbrückungskupplung Schaltkreis - elektrischer Fehler |
| 0x0744 | P0744 | P0744 Wandlerüberbrückungskupplung Schaltkreis - sporadisch |
| 0x0745 | P0745 | P0745 Elektrischer Drucksteller 1 - Fehlfunktion |
| 0x0746 | P0746 | P0746 Elektrischer Drucksteller 1 - Leistungsproblem oder klemmt offen |
| 0x0747 | P0747 | P0747 Elektrischer Drucksteller 1 - klemmt geschlossen |
| 0x0748 | P0748 | P0748 Elektrischer Drucksteller 1 - elektrischer Fehler |
| 0x0749 | P0749 | P0749 Elektrischer Drucksteller 1 - sporadisch |
| 0x074A | P074A | P074A Gang 2 - nicht einlegbar |
| 0x074B | P074B | P074B Gang 3 - nicht einlegbar |
| 0x074C | P074C | P074C Gang 4 - nicht einlegbar |
| 0x074D | P074D | P074D Gang 5 - nicht einlegbar |
| 0x074E | P074E | P074E Gang 6 - nicht einlegbar |
| 0x074F | P074F | P074F Gang 7 - nicht einlegbar |
| 0x0750 | P0750 | P0750 Magnetventil 1 - Fehlfunktion |
| 0x0751 | P0751 | P0751 Magnetventil 1 - Leistungsproblem oder klemmt offen |
| 0x0752 | P0752 | P0752 Magnetventil 1 - klemmt geschlossen |
| 0x0753 | P0753 | P0753 Magnetventil 1 - elektrischer Fehler |
| 0x0754 | P0754 | P0754 Magnetventil 1 - sporadisch |
| 0x0755 | P0755 | P0755 Magnetventil 2 - Fehlfunktion |
| 0x0756 | P0756 | P0756 Magnetventil 2 - Leistungsproblem oder klemmt offen |
| 0x0757 | P0757 | P0757 Magnetventil 2 - klemmt geschlossen |
| 0x0758 | P0758 | P0758 Magnetventil 2 - elektrischer Fehler |
| 0x0759 | P0759 | P0759 Magnetventil 2 - sporadisch |
| 0x075A | P075A | P075A Magnetventil 7 - Fehlfunktion |
| 0x075B | P075B | P075B Magnetventil 7 - Leistungsproblem oder klemmt offen |
| 0x075C | P075C | P075C Magnetventil 7 - klemmt geschlossen |
| 0x075D | P075D | P075D Magnetventil 7 - elektrischer Fehler |
| 0x075E | P075E | P075E Magnetventil 7 - sporadisch |
| 0x075F | P075F | P075F Getriebeöl-Füllstand - zu hoch |
| 0x0760 | P0760 | P0760 Magnetventil 3 - Fehlfunktion |
| 0x0761 | P0761 | P0761 Magnetventil 3 - Leistungsproblem oder klemmt offen |
| 0x0762 | P0762 | P0762 Magnetventil 2 - klemmt geschlossen |
| 0x0763 | P0763 | P0763 Magnetventil 3 - elektrischer Fehler |
| 0x0764 | P0764 | P0764 Magnetventil 3 - sporadisch |
| 0x0765 | P0765 | P0765 Magnetventil 4 - Fehlfunktion |
| 0x0766 | P0766 | P0766 Magnetventil 4 - Leistungsproblem oder klemmt offen |
| 0x0767 | P0767 | P0767 Magnetventil 4 - klemmt geschlossen |
| 0x0768 | P0768 | P0768 Magnetventil 4 - elektrischer Fehler |
| 0x0769 | P0769 | P0769 Magnetventil 4 - sporadisch |
| 0x076A | P076A | P076A Magnetventil 8 - Fehlfunktion |
| 0x076B | P076B | P076B Magnetventil 8 - Leistungsproblem oder klemmt offen |
| 0x076C | P076C | P076C Magnetventil 8 - klemmt geschlossen |
| 0x076D | P076D | P076D Magnetventil 8 - elektrischer Fehler |
| 0x076E | P076E | P076E Magnetventil 8 - sporadisch |
| 0x076F | P076F | P076F Falsches Übersetzungsverhältnis - 7. Gang |
| 0x0770 | P0770 | P0770 Magnetventil 5 - Fehlfunktion |
| 0x0771 | P0771 | P0771 Magnetventil 5 - Leistungsproblem oder klemmt offen |
| 0x0772 | P0772 | P0772 Magnetventil 5 - klemmt geschlossen |
| 0x0773 | P0773 | P0773 Magnetventil 5 - elektrischer Fehler |
| 0x0774 | P0774 | P0774 Magnetventil 5 - sporadisch |
| 0x0775 | P0775 | P0775 Elektrischer Drucksteller 2 - Fehlfunktion |
| 0x0776 | P0776 | P0776 Elektrischer Drucksteller 2 - Leistungsproblem oder klemmt offen |
| 0x0777 | P0777 | P0777 Elektrischer Drucksteller 2 - klemmt geschlossen |
| 0x0778 | P0778 | P0778 Elektrischer Drucksteller 2 - elektrischer Fehler |
| 0x0779 | P0779 | P0779 Elektrischer Drucksteller 2 - sporadisch |
| 0x077A | P077A | P077A Abtriebsdrehzahlfühler Schaltkreis - Verlust des Richtungssignals |
| 0x077B | P077B | P077B Abtriebsdrehzahlfühler Schaltkreis - Richtungsfehler |
| 0x077C | P077C | P077C Abtriebsdrehzahlfühler Schaltkreis - niedrig |
| 0x077D | P077D | P077D Abtriebsdrehzahlfühler Schaltkreis - hoch |
| 0x077E | P077E | P077E Getriebeöltemperatur Messsystem - Mehrfachsensor Korrelationsfehler |
| 0x077F | P077F | P077F Falsches Übersetzungsverhältnis - Rückwärtsgang 2 |
| 0x0780 | P0780 | P0780 Schaltvorgang - Fehler |
| 0x0781 | P0781 | P0781 Schaltvorgang 1./2. Gang - Fehlfunktion |
| 0x0782 | P0782 | P0782 Schaltvorgang 2./3. Gang - Fehlfunktion |
| 0x0783 | P0783 | P0783 Schaltvorgang 3./4. Gang - Fehlfunktion |
| 0x0784 | P0784 | P0784 Schaltvorgang 4./5. Gang - Fehlfunktion |
| 0x0785 | P0785 | P0785 Schaltzeit Magnetventil 1 - Fehlfunktion |
| 0x0786 | P0786 | P0786 Schaltzeit Magnetventil 1 - Messbereichs- oder Leistungsproblem |
| 0x0787 | P0787 | P0787 Schaltzeit Magnetventil 1 - niedrig |
| 0x0788 | P0788 | P0788 Schaltzeit Magnetventil 1 - hoch |
| 0x0789 | P0789 | P0789 Schaltzeit Magnetventil 1 - sporadisch |
| 0x078A | P078A | P078A Schaltzeit Magnetventil 2 - Fehlfunktion |
| 0x078B | P078B | P078B Schaltzeit Magnetventil 2 - Messbereichs- oder Leistungsproblem |
| 0x078C | P078C | P078C Schaltzeit Magnetventil 2 - niedrig |
| 0x078D | P078D | P078D Schaltzeit Magnetventil 2 - hoch |
| 0x078E | P078E | P078E Schaltzeit Magnetventil 2 - sporadisch |
| 0x078F | P078F | P078F Getriebewählschalter 3 Schaltkreis - Fehlfunktion |
| 0x0790 | P0790 | P0790 Getriebeprogrammschalter Schaltkreis - Fehlfunktion |
| 0x0791 | P0791 | P0791 Zwischenwelle Drehzahlfühler 1 Schaltkreis - Fehlfunktion |
| 0x0792 | P0792 | P0792 Zwischenwelle Drehzahlfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0793 | P0793 | P0793 Zwischenwelle Drehzahlfühler 1 Schaltkreis - kein Signal |
| 0x0794 | P0794 | P0794 Zwischenwelle Drehzahlfühler 1 Schaltkreis - sporadisch |
| 0x0795 | P0795 | P0795 Elektrischer Drucksteller 3 - Fehlfunktion |
| 0x0796 | P0796 | P0796 Elektrischer Drucksteller 3 - Leistungsproblem oder klemmt offen |
| 0x0797 | P0797 | P0797 Elektrischer Drucksteller 3 - klemmt geschlossen |
| 0x0798 | P0798 | P0798 Elektrischer Drucksteller 3 - elektrischer Fehler |
| 0x0799 | P0799 | P0799 Elektrischer Drucksteller 3 - sporadisch |
| 0x079A | P079A | P079A Getriebe-Reibelement 1 - Schlupf entdeckt |
| 0x079B | P079B | P079B Getriebe-Reibelement 2 - Schlupf entdeckt |
| 0x079C | P079C | P079C Getriebe-Reibelement 3 - Schlupf entdeckt |
| 0x079D | P079D | P079D Getriebe-Reibelement 4 - Schlupf entdeckt |
| 0x079E | P079E | P079E Getriebe-Reibelement 5 - Schlupf entdeckt |
| 0x079F | P079F | P079F Getriebe-Reibelement 6 - Schlupf entdeckt |
| 0x07A0 | P07A0 | P07A0 Getriebe-Reibelement 7 - Schlupf entdeckt |
| 0x07A1 | P07A1 | P07A1 Getriebe-Reibelement 8 - Schlupf entdeckt |
| 0x07A2 | P07A2 | P07A2 Getriebe-Reibelement 1 - Leistungsproblem/klemmt offen |
| 0x07A3 | P07A3 | P07A3 Getriebe-Reibelement 1 - klemmt geschlossen |
| 0x07A4 | P07A4 | P07A4 Getriebe-Reibelement 2 - Leistungsproblem/klemmt offen |
| 0x07A5 | P07A5 | P07A5 Getriebe-Reibelement 2 - klemmt geschlossen |
| 0x07A6 | P07A6 | P07A6 Getriebe-Reibelement 3 - Leistungsproblem/klemmt offen |
| 0x07A7 | P07A7 | P07A7 Getriebe-Reibelement 3 - klemmt geschlossen |
| 0x07A8 | P07A8 | P07A8 Getriebe-Reibelement 4 - Leistungsproblem/klemmt offen |
| 0x07A9 | P07A9 | P07A9 Getriebe-Reibelement 4 - klemmt geschlossen |
| 0x07AA | P07AA | P07AA Getriebe-Reibelement 5 - Leistungsproblem/klemmt offen |
| 0x07AB | P07AB | P07AB Getriebe-Reibelement 5 - klemmt geschlossen |
| 0x07AC | P07AC | P07AC Getriebe-Reibelement 6 - Leistungsproblem/klemmt offen |
| 0x07AD | P07AD | P07AD Getriebe-Reibelement 6 - klemmt geschlossen |
| 0x07AE | P07AE | P07AE Getriebe-Reibelement 7 - Leistungsproblem/klemmt offen |
| 0x07AF | P07AF | P07AF Getriebe-Reibelement 7 - klemmt geschlossen |
| 0x07B0 | P07B0 | P07B0 Getriebe-Reibelement 8 - Leistungsproblem/klemmt offen |
| 0x07B1 | P07B1 | P07B1 Getriebe-Reibelement 8 - klemmt geschlossen |
| 0x07B2 | P07B2 | P07B2 Getriebe Parkstellungssensor/-schalter 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x07B3 | P07B3 | P07B3 Getriebe Parkstellungssensor/-schalter 1 Schaltkreis - niedrig |
| 0x07B4 | P07B4 | P07B4 Getriebe Parkstellungssensor/-schalter 1 Schaltkreis - hoch |
| 0x07B5 | P07B5 | P07B5 Getriebe Parkstellungssensor/-schalter 1 Schaltkreis - Leistungsproblem niedrig |
| 0x07B6 | P07B6 | P07B6 Getriebe Parkstellungssensor/-schalter 1 Schaltkreis - Leistungsproblem hoch |
| 0x07B7 | P07B7 | P07B7 Getriebe Parkstellungssensor/-schalter 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x07B8 | P07B8 | P07B8 Getriebe Parkstellungssensor/-schalter 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x07B9 | P07B9 | P07B9 Getriebe Parkstellungssensor/-schalter 2 Schaltkreis - niedrig |
| 0x07BA | P07BA | P07BA Getriebe Parkstellungssensor/-schalter 2 Schaltkreis - hoch |
| 0x07BB | P07BB | P07BB Getriebe Parkstellungssensor/-schalter 2 Schaltkreis - Leistungsproblem niedrig |
| 0x07BC | P07BC | P07BC Getriebe Parkstellungssensor/-schalter 2 Schaltkreis - Leistungsproblem hoch |
| 0x07BD | P07BD | P07BD Getriebe Parkstellungssensor/-schalter 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x07BE | P07BE | P07BE Getriebe Parkstellungssensor/-schalter 1 / 2 - Korrelationsfehler |
| 0x07BF | P07BF | P07BF Eingangsdrehzahlfühler 1 Turbine Schaltkreis - niedrig |
| 0x07C0 | P07C0 | P07C0 Eingangsdrehzahlfühler 1 Turbine Schaltkreis - hoch |
| 0x07C1 | P07C1 | P07C1 Eingangsdrehzahlfühler 2 Turbine Schaltkreis - niedrig |
| 0x07C2 | P07C2 | P07C2 Eingangsdrehzahlfühler 2 Turbine Schaltkreis - hoch |
| 0x07C3 | P07C3 | P07C3 Eingangsdrehzahlfühler 3 Turbine Schaltkreis - niedrig |
| 0x07C4 | P07C4 | P07C4 Eingangsdrehzahlfühler 3 Turbine Schaltkreis - hoch |
| 0x07C5 | P07C5 | P07C5 Zwischenwelle Drehzahlfühler 1 Schaltkreis - niedrig |
| 0x07C6 | P07C6 | P07C6 Zwischenwelle Drehzahlfühler 1 Schaltkreis - hoch |
| 0x07C7 | P07C7 | P07C7 Zwischenwelle Drehzahlfühler 2 Schaltkreis - niedrig |
| 0x07C8 | P07C8 | P07C8 Zwischenwelle Drehzahlfühler 2 Schaltkreis - hoch |
| 0x07C9 | P07C9 | P07C9 Zwischenwelle Drehzahlfühler 3 Schaltkreis - niedrig |
| 0x07CA | P07CA | P07CA Zwischenwelle Drehzahlfühler 3 Schaltkreis - hoch |
| 0x07CB | P07CB | P07CB Getriebeölthermostat - Leistungsproblem |
| 0x0800 | P0800 | P0800 Verteilergetriebesteuersystem (Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion  |
| 0x0801 | P0801 | P0801 Rückfahrsperre Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0802 | P0802 | P0802 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung Schaltkreis- Fehlfunktion oder Leitungsunterbrechung |
| 0x0803 | P0803 | P0803 Hochschaltungs-/Schaltüberspringungs-Magnetventil Steuerkreis - Fehlfunktion |
| 0x0804 | P0804 | P0804 Hochschaltungs-/Schaltüberspringungs-Lampe Schaltkreis - Fehlfunktion |
| 0x0805 | P0805 | P0805 Kupplungspositionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0806 | P0806 | P0806 Kupplungspositionssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0807 | P0807 | P0807 Kupplungspositionssensor Schaltkreis - niedrig |
| 0x0808 | P0808 | P0808 Kupplungspositionssensor Schaltkreis - hoch |
| 0x0809 | P0809 | P0809 Kupplungspositionssensor Schaltkreis - sporadisch |
| 0x080A | P080A | P080A Kupplung - Position nicht gelernt |
| 0x080B | P080B | P080B Hochschaltungs-/Schaltüberspringungs-Magnetventil Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x080C | P080C | P080C Hochschaltungs-/Schaltüberspringungs-Magnetventil Steuerkreis - niedrig |
| 0x080D | P080D | P080D Hochschaltungs-/Schaltüberspringungs-Magnetventil Steuerkreis - hoch |
| 0x0810 | P0810 | P0810 Kupplungsposition - Steuerungsfehler |
| 0x0811 | P0811 | P0811 Kupplung A - zu hoher Schlupf |
| 0x0812 | P0812 | P0812 Rückwärtsgang Eingangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0813 | P0813 | P0813 Rückwärtsgang Ausgangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0814 | P0814 | P0814 Getriebepositionsanzeige Schaltkreis - Fehlfunktion |
| 0x0815 | P0815 | P0815 Hochschaltungs-Schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0816 | P0816 | P0816 Zurückschaltungs-Schalter Schaltkreis - Fehlfunktion |
| 0x0817 | P0817 | P0817 Anlassersperre Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0818 | P0818 | P0818 Antriebsstrang Trennschalter Eingangsschaltkreis - Fehlfunktion |
| 0x0819 | P0819 | P0819 Hochschaltungs- und Zurückschaltungs-Schalter / Getriebeposition - Korrelationsfehler |
| 0x081A | P081A | P081A Anlassersperre Schaltkreis - niedrig |
| 0x081B | P081B | P081B Anlassersperre Schaltkreis - hoch |
| 0x081C | P081C | P081C Parkstellung Eingangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x081D | P081D | P081D Leerlaufstellung Eingangsschaltkreis - Fehlfunktion |
| 0x081E | P081E | P081E Kupplung B - zu hoher Schlupf |
| 0x0820 | P0820 | P0820 Wählhebel X-Y Positionssensor Schaltkreis - Fehlfunktion |
| 0x0821 | P0821 | P0821 Wählhebel X-Position Schaltkreis - Fehlfunktion |
| 0x0822 | P0822 | P0822 Wählhebel Y-Position Schaltkreis - Fehlfunktion |
| 0x0823 | P0823 | P0823 Wählhebel X-Position Schaltkreis - sporadisch |
| 0x0824 | P0824 | P0824 Wählhebel Y-Position Schaltkreis - sporadisch |
| 0x0825 | P0825 | P0825 Wählhebel Zug-Druck-Schalter (Schalterkennung) - Fehlfunktion |
| 0x0826 | P0826 | P0826 Hochschaltungs- und Zurückschaltungs-Schalter Schaltkreis - Fehlfunktion |
| 0x0827 | P0827 | P0827 Hochschaltungs- und Zurückschaltungs-Schalter Schaltkreis - niedrig |
| 0x0828 | P0828 | P0828 Hochschaltungs- und Zurückschaltungs-Schalter Schaltkreis - hoch |
| 0x0829 | P0829 | P0829 Schaltvorgang 5./6. Gang - Fehlfunktion |
| 0x082A | P082A | P082A Wählhebel X-Position Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x082B | P082B | P082B Wählhebel X-Position Schaltkreis - niedrig |
| 0x082C | P082C | P082C Wählhebel X-Position Schaltkreis - hoch |
| 0x082D | P082D | P082D Wählhebel Y-Position Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x082E | P082E | P082E Wählhebel Y-Position Schaltkreis - niedrig |
| 0x082F | P082F | P082F Wählhebel Y-Position Schaltkreis - hoch |
| 0x0830 | P0830 | P0830 Kupplungspedalschalter 1 Schaltkreis - Fehlfunktion |
| 0x0831 | P0831 | P0831 Kupplungspedalschalter 1 Schaltkreis - niedrig |
| 0x0832 | P0832 | P0832 Kupplungspedalschalter 1 Schaltkreis - hoch |
| 0x0833 | P0833 | P0833 Kupplungspedalschalter 2 Schaltkreis - Fehlfunktion |
| 0x0834 | P0834 | P0834 Kupplungspedalschalter 2 Schaltkreis - niedrig |
| 0x0835 | P0835 | P0835 Kupplungspedalschalter 2 Schaltkreis - hoch |
| 0x0836 | P0836 | P0836 Allradschalter Schaltkreis - Fehlfunktion |
| 0x0837 | P0837 | P0837 Allradschalter Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0838 | P0838 | P0838 Allradschalter Schaltkreis - niedrig |
| 0x0839 | P0839 | P0839 Allradschalter Schaltkreis - hoch |
| 0x083A | P083A | P083A Getriebeöldrucksensor/-schalter 7 Schaltkreis - Fehlfunktion |
| 0x083B | P083B | P083B Getriebeöldrucksensor/-schalter 7 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x083C | P083C | P083C Getriebeöldrucksensor/-schalter 7 Schaltkreis - niedrig |
| 0x083D | P083D | P083D Getriebeöldrucksensor/-schalter 7 Schaltkreis - hoch |
| 0x083E | P083E | P083E Getriebeöldrucksensor/-schalter 7 Schaltkreis - sporadisch |
| 0x083F | P083F | P083F Kupplungspedalschalter 1/2 - Korrelationsfehler |
| 0x0840 | P0840 | P0840 Getriebeöldrucksensor/-schalter 1 Schaltkreis - Fehlfunktion |
| 0x0841 | P0841 | P0841 Getriebeöldrucksensor/-schalter 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0842 | P0842 | P0842 Getriebeöldrucksensor/-schalter 1 Schaltkreis - niedrig |
| 0x0843 | P0843 | P0843 Getriebeöldrucksensor/-schalter 1 Schaltkreis - hoch |
| 0x0844 | P0844 | P0844 Getriebeöldrucksensor/-schalter 1 Schaltkreis - sporadisch |
| 0x0845 | P0845 | P0845 Getriebeöldrucksensor/-schalter 2 Schaltkreis - Fehlfunktion |
| 0x0846 | P0846 | P0846 Getriebeöldrucksensor/-schalter 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0847 | P0847 | P0847 Getriebeöldrucksensor/-schalter 2 Schaltkreis - niedrig |
| 0x0848 | P0848 | P0848 Getriebeöldrucksensor/-schalter 2 Schaltkreis - hoch |
| 0x0849 | P0849 | P0849 Getriebeöldrucksensor/-schalter 2 Schaltkreis - sporadisch |
| 0x084A | P084A | P084A Getriebeöldrucksensor/-schalter 8 Schaltkreis - Fehlfunktion |
| 0x084B | P084B | P084B Getriebeöldrucksensor/-schalter 8 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x084C | P084C | P084C Getriebeöldrucksensor/-schalter 8 Schaltkreis - niedrig |
| 0x084D | P084D | P084D Getriebeöldrucksensor/-schalter 8 Schaltkreis - hoch |
| 0x084E | P084E | P084E Getriebeöldrucksensor/-schalter 8 Schaltkreis - sporadisch |
| 0x084F | P084F | P084F Parkstellungs-/Leerlaufschalter Ausgangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0850 | P0850 | P0850 Parkstellungs-/Leerlaufschalter Eingangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0851 | P0851 | P0851 Parkstellungs-/Leerlaufschalter Eingangsschaltkreis - niedrig |
| 0x0852 | P0852 | P0852 Parkstellungs-/Leerlaufschalter Eingangsschaltkreis - hoch |
| 0x0853 | P0853 | P0853 Fahrstellungsschalter Eingangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0854 | P0854 | P0854 Fahrstellungsschalter Eingangsschaltkreis - niedrig |
| 0x0855 | P0855 | P0855 Fahrstellungsschalter Eingangsschaltkreis - hoch |
| 0x0856 | P0856 | P0856 Schlupfregelung Eingangssignal - Fehlfunktion |
| 0x0857 | P0857 | P0857 Schlupfregelung Eingangssignal - Messbereichs- oder Leistungsproblem |
| 0x0858 | P0858 | P0858 Schlupfregelung Eingangssignal - niedrig |
| 0x0859 | P0859 | P0859 Schlupfregelung Eingangssignal - hoch |
| 0x085A | P085A | P085A Schaltungs-Steuergerät 2 Kommunikationsschaltkreis - Fehlfunktion |
| 0x085B | P085B | P085B Schaltungs-Steuergerät 2 Kommunikationsschaltkreis - niedrig |
| 0x085C | P085C | P085C Schaltungs-Steuergerät 2 Kommunikationsschaltkreis - hoch |
| 0x085D | P085D | P085D Schaltungs-Steuergerät 1 - Leistungsproblem |
| 0x085E | P085E | P085E Schaltungs-Steuergerät 2 - Leistungsproblem |
| 0x0860 | P0860 | P0860 Schaltungs-Steuergerät 1 Kommunikationsschaltkreis - Fehlfunktion |
| 0x0861 | P0861 | P0861 Schaltungs-Steuergerät 1 Kommunikationsschaltkreis - niedrig |
| 0x0862 | P0862 | P0862 Schaltungs-Steuergerät 1 Kommunikationsschaltkreis - hoch |
| 0x0863 | P0863 | P0863 Getriebesteuergerät Kommunikationsschaltkreis - Fehlfunktion |
| 0x0864 | P0864 | P0864 Getriebesteuergerät Kommunikationsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0865 | P0865 | P0865 Getriebesteuergerät Kommunikationsschaltkreis - niedrig |
| 0x0866 | P0866 | P0866 Getriebesteuergerät Kommunikationsschaltkreis - hoch |
| 0x0867 | P0867 | P0867 Getriebeöldruck - Fehlfunktion |
| 0x0868 | P0868 | P0868 Getriebeöldruck - niedrig |
| 0x0869 | P0869 | P0869 Getriebeöldruck - hoch |
| 0x0870 | P0870 | P0870 Getriebeöldrucksensor/-schalter 3 Schaltkreis - Fehlfunktion |
| 0x0871 | P0871 | P0871 Getriebeöldrucksensor/-schalter 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0872 | P0872 | P0872 Getriebeöldrucksensor/-schalter 3 Schaltkreis - niedrig |
| 0x0873 | P0873 | P0873 Getriebeöldrucksensor/-schalter 3 Schaltkreis - hoch |
| 0x0874 | P0874 | P0874 Getriebeöldrucksensor/-schalter 3 Schaltkreis - sporadisch |
| 0x0875 | P0875 | P0875 Getriebeöldrucksensor/-schalter 4 Schaltkreis - Fehlfunktion |
| 0x0876 | P0876 | P0876 Getriebeöldrucksensor/-schalter 4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0877 | P0877 | P0877 Getriebeöldrucksensor/-schalter 4 Schaltkreis - niedrig |
| 0x0878 | P0878 | P0878 Getriebeöldrucksensor/-schalter 4 Schaltkreis - hoch |
| 0x0879 | P0879 | P0879 Getriebeöldrucksensor/-schalter 4 Schaltkreis - sporadisch |
| 0x0880 | P0880 | P0880 Getriebesteuergerät Versorgungsspannungssignal - Fehlfunktion |
| 0x0881 | P0881 | P0881 Getriebesteuergerät Versorgungsspannungssignal - Messbereichs- oder Leistungsproblem |
| 0x0882 | P0882 | P0882 Getriebesteuergerät Versorgungsspannungssignal - niedrig |
| 0x0883 | P0883 | P0883 Getriebesteuergerät Versorgungsspannungssignal - hoch |
| 0x0884 | P0884 | P0884 Getriebesteuergerät Versorgungsspannungssignal - sporadisch |
| 0x0885 | P0885 | P0885 Getriebesteuergerät Hauptrelais Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0886 | P0886 | P0886 Getriebesteuergerät Hauptrelais Steuerkreis - niedrig |
| 0x0887 | P0887 | P0887 Getriebesteuergerät Hauptrelais Steuerkreis - hoch |
| 0x0888 | P0888 | P0888 Getriebesteuergerät Hauptrelais Überwachungsschaltkreis - Fehlfunktion |
| 0x0889 | P0889 | P0889 Getriebesteuergerät Hauptrelais Überwachungsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x088A | P088A | P088A Getriebeölfilter - verschlissen |
| 0x088B | P088B | P088B Getriebeölfilterfilter - sehr verschlissen |
| 0x0890 | P0890 | P0890 Getriebesteuergerät Hauptrelais Überwachungsschaltkreis - niedrig |
| 0x0891 | P0891 | P0891 Getriebesteuergerät Hauptrelais Überwachungsschaltkreis - hoch |
| 0x0892 | P0892 | P0892 Getriebesteuergerät Hauptrelais Überwachungsschaltkreis - sporadisch |
| 0x0893 | P0893 | P0893 Zahnräder - Mehrfacheingriff |
| 0x0894 | P0894 | P0894 Getriebekomponente - Schlupf |
| 0x0895 | P0895 | P0895 Schaltzeit - zu kurz |
| 0x0896 | P0896 | P0896 Schaltzeit - zu lang |
| 0x0897 | P0897 | P0897 Getriebeöl - verschlissen |
| 0x0898 | P0898 | P0898 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung Schaltkreis - niedrig |
| 0x0899 | P0899 | P0899 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung Schaltkreis - hoch |
| 0x0900 | P0900 | P0900 Kupplungssteller Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0901 | P0901 | P0901 Kupplungssteller Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0902 | P0902 | P0902 Kupplungssteller Schaltkreis - niedrig |
| 0x0903 | P0903 | P0903 Kupplungssteller Schaltkreis - hoch |
| 0x0904 | P0904 | P0904 Wählwinkel Positionsgeber Schaltkreis - Fehlfunktion |
| 0x0905 | P0905 | P0905 Wählwinkel Positionsgeber Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0906 | P0906 | P0906 Wählwinkel Positionsgeber Schaltkreis - niedrig |
| 0x0907 | P0907 | P0907 Wählwinkel Positionsgeber Schaltkreis - hoch |
| 0x0908 | P0908 | P0908 Wählwinkel Positionsgeber Schaltkreis - sporadisch |
| 0x0909 | P0909 | P0909 Wählwinkel Positionsgeber - Steuerungsfehler |
| 0x0910 | P0910 | P0910 Wählwinkel Stellelement Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0911 | P0911 | P0911 Wählwinkel Stellelement Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0912 | P0912 | P0912 Wählwinkel Stellelement Schaltkreis - niedrig |
| 0x0913 | P0913 | P0913 Wählwinkel Stellelement Schaltkreis - hoch |
| 0x0914 | P0914 | P0914 Getriebeposition Schaltkreis - Fehlfunktion |
| 0x0915 | P0915 | P0915 Getriebeposition Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0916 | P0916 | P0916 Getriebeposition Schaltkreis - niedrig |
| 0x0917 | P0917 | P0917 Getriebeposition Schaltkreis - hoch |
| 0x0918 | P0918 | P0918 Getriebeposition Schaltkreis - sporadisch |
| 0x0919 | P0919 | P0919 Getriebeposition Schaltkreis - Steuerungsfehler |
| 0x0920 | P0920 | P0920 Schaltaktuator Vorwärtsgang Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0921 | P0921 | P0921 Schaltaktuator Vorwärtsgang Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0922 | P0922 | P0922 Schaltaktuator Vorwärtsgang Schaltkreis - niedrig |
| 0x0923 | P0923 | P0923 Schaltaktuator Vorwärtsgang Schaltkreis - hoch |
| 0x0924 | P0924 | P0924 Schaltaktuator Rückwärtsgang Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0925 | P0925 | P0925 Schaltaktuator Rückwärtsgang Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0926 | P0926 | P0926 Schaltaktuator Rückwärtsgang Schaltkreis - niedrig |
| 0x0927 | P0927 | P0927 Schaltaktuator Rückwärtsgang Schaltkreis - hoch |
| 0x0928 | P0928 | P0928 Magnetventil/Aktuator Shiftlock Steuerkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0929 | P0929 | P0929 Magnetventil/Aktuator Shiftlock Steuerkreis 1 - Messbereichs- oder Leistungsproblem |
| 0x092A | P092A | P092A Magnetventil/Aktuator Shiftlock Steuerkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x092B | P092B | P092B Magnetventil/Aktuator Shiftlock Steuerkreis 2 - Messbereichs- oder Leistungsproblem |
| 0x092C | P092C | P092C Magnetventil/Aktuator Shiftlock Steuerkreis 2 - niedrig |
| 0x092D | P092D | P092D Magnetventil/Aktuator Shiftlock Steuerkreis 2 - hoch |
| 0x0930 | P0930 | P0930 Magnetventil/Aktuator Shiftlock Steuerkreis 1 - niedrig |
| 0x0931 | P0931 | P0931 Magnetventil/Aktuator Shiftlock Steuerkreis 1 - hoch |
| 0x0932 | P0932 | P0932 Hydraulikdrucksensor Schaltkreis - Fehlfunktion |
| 0x0933 | P0933 | P0933 Hydraulikdrucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0934 | P0934 | P0934 Hydraulikdrucksensor Schaltkreis - niedrig |
| 0x0935 | P0935 | P0935 Hydraulikdrucksensor Schaltkreis - hoch |
| 0x0936 | P0936 | P0936 Hydraulikdrucksensor Schaltkreis - sporadisch |
| 0x0937 | P0937 | P0937 Hydrauliköltemperaturfühler Schaltkreis - Fehlfunktion |
| 0x0938 | P0938 | P0938 Hydrauliköltemperaturfühler Schaltkreis - Messbereichs- oder Leistungspoblem |
| 0x0939 | P0939 | P0939 Hydrauliköltemperaturfühler Schaltkreis - niedrig |
| 0x0940 | P0940 | P0940 Hydrauliköltemperaturfühler Schaltkreis - hoch |
| 0x0941 | P0941 | P0941 Hydrauliköltemperaturfühler Schaltkreis - sporadisch |
| 0x0942 | P0942 | P0942 Hydraulikeinheit - Fehlfunktion |
| 0x0943 | P0943 | P0943 Hydraulikeinheit - Taktdauer zu kurz |
| 0x0944 | P0944 | P0944 Hydraulikeinheit - Druckverlust |
| 0x0945 | P0945 | P0945 Hydraulikpumpenrelais Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0946 | P0946 | P0946 Hydraulikpumpenrelais Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0947 | P0947 | P0947 Hydraulikpumpenrelais Schaltkreis - niedrig |
| 0x0948 | P0948 | P0948 Hydraulikpumpenrelais Schaltkreis - hoch |
| 0x0949 | P0949 | P0949 Automatikgetriebe manuelle Gasse - adaptives Lernen nicht vollständig |
| 0x0950 | P0950 | P0950 Automatikgetriebe manuelle Gasse Schaltkreis - Fehlfunktion |
| 0x0951 | P0951 | P0951 Automatikgetriebe manuelle Gasse Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0952 | P0952 | P0952 Automatikgetriebe manuelle Gasse Schaltkreis - niedrig |
| 0x0953 | P0953 | P0953 Automatikgetriebe manuelle Gasse Schaltkreis - hoch |
| 0x0954 | P0954 | P0954 Automatikgetriebe manuelle Gasse Schaltkreis - sporadisch |
| 0x0955 | P0955 | P0955 Automatikgetriebe manuelle Gasse Fahrmodus Schaltkreis - Fehlfunktion |
| 0x0956 | P0956 | P0956 Automatikgetriebe manuelle Gasse Fahrmodus Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0957 | P0957 | P0957 Automatikgetriebe manuelle Gasse Fahrmodus Schaltkreis - niedrig |
| 0x0958 | P0958 | P0958 Automatikgetriebe manuelle Gasse Fahrmodus Schaltkreis - hoch |
| 0x0959 | P0959 | P0959 Automatikgetriebe manuelle Gasse Fahrmodus Schaltkreis - sporadisch |
| 0x0960 | P0960 | P0960 Elektrischer Drucksteller 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0961 | P0961 | P0961 Elektrischer Drucksteller 1 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0962 | P0962 | P0962 Elektrischer Drucksteller 1 Steuerkreis - niedrig |
| 0x0963 | P0963 | P0963 Elektrischer Drucksteller 1 Steuerkreis - hoch |
| 0x0964 | P0964 | P0964 Elektrischer Drucksteller 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0965 | P0965 | P0965 Elektrischer Drucksteller 2 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0966 | P0966 | P0966 Elektrischer Drucksteller 2 Steuerkreis - niedrig |
| 0x0967 | P0967 | P0967 Elektrischer Drucksteller 2 Steuerkreis - hoch |
| 0x0968 | P0968 | P0968 Elektrischer Drucksteller 3 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0969 | P0969 | P0969 Elektrischer Drucksteller 3 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0970 | P0970 | P0970 Elektrischer Drucksteller 3 Steuerkreis - niedrig |
| 0x0971 | P0971 | P0971 Elektrischer Drucksteller 3 Steuerkreis - hoch |
| 0x0972 | P0972 | P0972 Magnetventil 1 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0973 | P0973 | P0973 Magnetventil 1 Steuerkreis - niedrig |
| 0x0974 | P0974 | P0974 Magnetventil 1 Steuerkreis - hoch |
| 0x0975 | P0975 | P0975 Magnetventil 2 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0976 | P0976 | P0976 Magnetventil 2 Steuerkreis - niedrig |
| 0x0977 | P0977 | P0977 Magnetventil 2 Steuerkreis - hoch |
| 0x0978 | P0978 | P0978 Magnetventil 3 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0979 | P0979 | P0979 Magnetventil 3 Steuerkreis - niedrig |
| 0x0980 | P0980 | P0980 Magnetventil 3 Steuerkreis - hoch |
| 0x0981 | P0981 | P0981 Magnetventil 4 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0982 | P0982 | P0982 Magnetventil 4 Steuerkreis - niedrig |
| 0x0983 | P0983 | P0983 Magnetventil 4 Steuerkreis - hoch |
| 0x0984 | P0984 | P0984 Magnetventil 5 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0985 | P0985 | P0985 Magnetventil 5 Steuerkreis - niedrig |
| 0x0986 | P0986 | P0986 Magnetventil 5 Steuerkreis - hoch |
| 0x0987 | P0987 | P0987 Getriebeöldrucksensor/-schalter 5 Schaltkreis - Fehlfunktion |
| 0x0988 | P0988 | P0988 Getriebeöldrucksensor/-schalter 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0989 | P0989 | P0989 Getriebeöldrucksensor/-schalter 5 Schaltkreis - niedrig |
| 0x0990 | P0990 | P0990 Getriebeöldrucksensor/-schalter 5 Schaltkreis - hoch |
| 0x0991 | P0991 | P0991 Getriebeöldrucksensor/-schalter 5 Schaltkreis - sporadisch |
| 0x0992 | P0992 | P0992 Getriebeöldrucksensor/-schalter 6 Schaltkreis - Fehlfunktion |
| 0x0993 | P0993 | P0993 Getriebeöldrucksensor/-schalter 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0994 | P0994 | P0994 Getriebeöldrucksensor/-schalter 6 Schaltkreis - niedrig |
| 0x0995 | P0995 | P0995 Getriebeöldrucksensor/-schalter 6 Schaltkreis - hoch |
| 0x0996 | P0996 | P0996 Getriebeöldrucksensor/-schalter 6 Schaltkreis - sporadisch |
| 0x0997 | P0997 | P0997 Magnetventil 6 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0998 | P0998 | P0998 Magnetventil 6 Steuerkreis - niedrig |
| 0x0999 | P0999 | P0999 Magnetventil 6 Steuerkreis - hoch |
| 0x099A | P099A | P099A Magnetventil 7 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x099B | P099B | P099B Magnetventil 7 Steuerkreis - niedrig |
| 0x099C | P099C | P099C Magnetventil 7 Steuerkreis - hoch |
| 0x099D | P099D | P099D Magnetventil 8 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x099E | P099E | P099E Magnetventil 8 Steuerkreis - niedrig |
| 0x099F | P099F | P099F Magnetventil 8 Steuerkreis - hoch |
| 0x0A00 | P0A00 | P0A00 Motorelektronik Kühlmitteltemperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A01 | P0A01 | P0A01 Motorelektronik Kühlmitteltemperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A02 | P0A02 | P0A02 Motorelektronik Kühlmitteltemperaturfühler Schaltkreis - niedrig |
| 0x0A03 | P0A03 | P0A03 Motorelektronik Kühlmitteltemperaturfühler Schaltkreis - hoch |
| 0x0A04 | P0A04 | P0A04 Motorelektronik Kühlmitteltemperaturfühler Schaltkreis - sporadisch |
| 0x0A05 | P0A05 | P0A05 Motorelektronik Kühlmittelpumpe 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A06 | P0A06 | P0A06 Motorelektronik Kühlmittelpumpe 1 Steuerkreis - niedrig |
| 0x0A07 | P0A07 | P0A07 Motorelektronik Kühlmittelpumpe 1 Steuerkreis - hoch |
| 0x0A08 | P0A08 | P0A08 DC/DC Wandler Status Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A09 | P0A09 | P0A09 DC/DC Wandler Status Schaltkreis - niedrig |
| 0x0A0A | P0A0A | P0A0A Hochvoltkontaktüberwachung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A0B | P0A0B | P0A0B Hochvoltkontaktüberwachung Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A0C | P0A0C | P0A0C Hochvoltkontaktüberwachung Schaltkreis - niedrig |
| 0x0A0D | P0A0D | P0A0D Hochvoltkontaktüberwachung Schaltkreis - hoch |
| 0x0A0E | P0A0E | P0A0E Hochvoltkontaktüberwachung Schaltkreis - sporadisch |
| 0x0A0F | P0A0F | P0A0F Motorstart - fehlgeschlagen |
| 0x0A10 | P0A10 | P0A10 DC/DC Wandler Status Schaltkreis - hoch |
| 0x0A11 | P0A11 | P0A11 DC/DC Wandler Freigabeschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A12 | P0A12 | P0A12 DC/DC Wandler Freigabeschaltkreis - niedrig |
| 0x0A13 | P0A13 | P0A13 DC/DC Wandler Freigabeschaltkreis - hoch |
| 0x0A14 | P0A14 | P0A14 Motorlager 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A15 | P0A15 | P0A15 Motorlager 1 Steuerkreis - niedrig |
| 0x0A16 | P0A16 | P0A16 Motorlager 1 Steuerkreis - hoch |
| 0x0A17 | P0A17 | P0A17 Motor Drehmomentsensor Schaltkreis - Fehlfunktion |
| 0x0A18 | P0A18 | P0A18 Motor Drehmomentsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A19 | P0A19 | P0A19 Motor Drehmomentsensor Schaltkreis - niedrig |
| 0x0A1A | P0A1A | P0A1A Generator-Steuergerät - Fehlfunktion |
| 0x0A1B | P0A1B | P0A1B Antriebsmotor 1 Steuergerät - Fehlfunktion |
| 0x0A1C | P0A1C | P0A1C Antriebsmotor 2 Steuergerät - Fehlfunktion |
| 0x0A1D | P0A1D | P0A1D Hybridantriebs-Steuergerät - Fehlfunktion |
| 0x0A1E | P0A1E | P0A1E Anlasser-/Generator-Steuergerät - Fehlfunktion |
| 0x0A1F | P0A1F | P0A1F Batterie-Steuergerät - Fehlfunktion |
| 0x0A20 | P0A20 | P0A20 Motor Drehmomentsensor Schaltkreis - hoch |
| 0x0A21 | P0A21 | P0A21 Motor Drehmomentsensor Schaltkreis - sporadisch |
| 0x0A22 | P0A22 | P0A22 Generator Drehmomentsensor Schaltkreis - Fehlfunktion |
| 0x0A23 | P0A23 | P0A23 Generator Drehmomentsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A24 | P0A24 | P0A24 Generator Drehmomentsensor Schaltkreis - niedrig |
| 0x0A25 | P0A25 | P0A25 Generator Drehmomentsensor Schaltkreis - hoch |
| 0x0A26 | P0A26 | P0A26 Generator Drehmomentsensor Schaltkreis - sporadisch |
| 0x0A27 | P0A27 | P0A27 Hybridbatterie Deaktivierungsschaltkreis - Fehlfunktion |
| 0x0A28 | P0A28 | P0A28 Hybridbatterie Deaktivierungsschaltkreis - niedrig |
| 0x0A29 | P0A29 | P0A29 Hybridbatterie Deaktivierungsschaltkreis - hoch |
| 0x0A2A | P0A2A | P0A2A Antriebsmotor 1 Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A2B | P0A2B | P0A2B Antriebsmotor 1 Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A2C | P0A2C | P0A2C Antriebsmotor 1 Temperaturfühler Schaltkreis - niedrig |
| 0x0A2D | P0A2D | P0A2D Antriebsmotor 1 Temperaturfühler Schaltkreis - hoch |
| 0x0A2E | P0A2E | P0A2E Antriebsmotor 1 Temperaturfühler Schaltkreis - sporadisch |
| 0x0A2F | P0A2F | P0A2F Antriebsmotor 1 - Übertemperatur |
| 0x0A30 | P0A30 | P0A30 Antriebsmotor 2 Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A31 | P0A31 | P0A31 Antriebsmotor 2 Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A32 | P0A32 | P0A32 Antriebsmotor 2 Temperaturfühler Schaltkreis - niedrig |
| 0x0A33 | P0A33 | P0A33 Antriebsmotor 2 Temperaturfühler Schaltkreis - hoch |
| 0x0A34 | P0A34 | P0A34 Antriebsmotor 2 Temperaturfühler Schaltkreis - sporadisch |
| 0x0A35 | P0A35 | P0A35 Antriebsmotor 2 - Übertemperatur |
| 0x0A36 | P0A36 | P0A36 Generator Temperaturfühler Schaltkreis - Fehlfunktion |
| 0x0A37 | P0A37 | P0A37 Generator Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A38 | P0A38 | P0A38 Generator Temperaturfühler Schaltkreis - niedrig |
| 0x0A39 | P0A39 | P0A39 Generator Temperaturfühler Schaltkreis - hoch |
| 0x0A3A | P0A3A | P0A3A Generator Temperaturfühler Schaltkreis - sporadisch |
| 0x0A3B | P0A3B | P0A3B Generator - Übertemperatur |
| 0x0A3C | P0A3C | P0A3C Antriebsmotor 1 Inverter - Übertemperatur |
| 0x0A3D | P0A3D | P0A3D Antriebsmotor 2 Inverter - Übertemperatur |
| 0x0A3E | P0A3E | P0A3E Generator Inverter - Übertemperatur |
| 0x0A3F | P0A3F | P0A3F Antriebsmotor 1 Positionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A40 | P0A40 | P0A40 Antriebsmotor 1 Positionssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A41 | P0A41 | P0A41 Antriebsmotor 1 Positionssensor Schaltkreis - niedrig |
| 0x0A42 | P0A42 | P0A42 Antriebsmotor 1 Positionssensor Schaltkreis - hoch |
| 0x0A43 | P0A43 | P0A43 Antriebsmotor 1 Positionssensor Schaltkreis - sporadisch |
| 0x0A44 | P0A44 | P0A44 Antriebsmotor 1 Positionssensor Schaltkreis - Überdrehzahl |
| 0x0A45 | P0A45 | P0A45 Antriebsmotor 2 Positionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A46 | P0A46 | P0A46 Antriebsmotor 2 Positionssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A47 | P0A47 | P0A47 Antriebsmotor 2 Positionssensor Schaltkreis - niedrig |
| 0x0A48 | P0A48 | P0A48 Antriebsmotor 2 Positionssensor Schaltkreis - hoch |
| 0x0A49 | P0A49 | P0A49 Antriebsmotor 2 Positionssensor Schaltkreis - sporadisch |
| 0x0A4A | P0A4A | P0A4A Antriebsmotor 2 Positionssensor Schaltkreis - Überdrehzahl |
| 0x0A4B | P0A4B | P0A4B Generator Positionssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A4C | P0A4C | P0A4C Generator Positionssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A4D | P0A4D | P0A4D Generator Positionssensor Schaltkreis - niedrig |
| 0x0A4E | P0A4E | P0A4E Generator Positionssensor Schaltkreis - hoch |
| 0x0A4F | P0A4F | P0A4F Generator Positionssensor Schaltkreis - sporadisch |
| 0x0A50 | P0A50 | P0A50 Generator Positionssensor Schaltkreis - Überdrehzahl |
| 0x0A51 | P0A51 | P0A51 Antriebsmotor 1 Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A52 | P0A52 | P0A52 Antriebsmotor 1 Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A53 | P0A53 | P0A53 Antriebsmotor 1 Stromsensor Schaltkreis - niedrig |
| 0x0A54 | P0A54 | P0A54 Antriebsmotor 1 Stromsensor Schaltkreis - hoch |
| 0x0A55 | P0A55 | P0A55 Antriebsmotor 2 Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A56 | P0A56 | P0A56 Antriebsmotor 2 Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A57 | P0A57 | P0A57 Antriebsmotor 2 Stromsensor Schaltkreis - niedrig |
| 0x0A58 | P0A58 | P0A58 Antriebsmotor 2 Stromsensor Schaltkreis - hoch |
| 0x0A59 | P0A59 | P0A59 Generator Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A5A | P0A5A | P0A5A Generator Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A5B | P0A5B | P0A5B Generator Stromsensor Schaltkreis - niedrig |
| 0x0A5C | P0A5C | P0A5C Generator Stromsensor Schaltkreis - hoch |
| 0x0A5D | P0A5D | P0A5D Antriebsmotor 1 Phase U Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A5E | P0A5E | P0A5E Antriebsmotor 1 Phase U Strom - niedrig |
| 0x0A5F | P0A5F | P0A5F Antriebsmotor 1 Phase U Strom - hoch |
| 0x0A60 | P0A60 | P0A60 Antriebsmotor 1 Phase V Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A61 | P0A61 | P0A61 Antriebsmotor 1 Phase V Strom - niedrig |
| 0x0A62 | P0A62 | P0A62 Antriebsmotor 1 Phase V Strom - hoch |
| 0x0A63 | P0A63 | P0A63 Antriebsmotor 1 Phase W Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A64 | P0A64 | P0A64 Antriebsmotor 1 Phase W Strom - niedrig |
| 0x0A65 | P0A65 | P0A65 Antriebsmotor 1 Phase W Strom - hoch |
| 0x0A66 | P0A66 | P0A66 Antriebsmotor 2 Phase U Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A67 | P0A67 | P0A67 Antriebsmotor 2 Phase U Strom - niedrig |
| 0x0A68 | P0A68 | P0A68 Antriebsmotor 2 Phase U Strom - hoch |
| 0x0A69 | P0A69 | P0A69 Antriebsmotor 2 Phase V Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A6A | P0A6A | P0A6A Antriebsmotor 2 Phase V Strom - niedrig |
| 0x0A6B | P0A6B | P0A6B Antriebsmotor 2 Phase V Strom - hoch |
| 0x0A6C | P0A6C | P0A6C Antriebsmotor 2 Phase W Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A6D | P0A6D | P0A6D Antriebsmotor 2 Phase W Strom - niedrig |
| 0x0A6E | P0A6E | P0A6E Antriebsmotor 2 Phase W Strom - hoch |
| 0x0A6F | P0A6F | P0A6F Generator Phase U Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A70 | P0A70 | P0A70 Generator Phase U Strom - niedrig |
| 0x0A71 | P0A71 | P0A71 Generator Phase U Strom - hoch |
| 0x0A72 | P0A72 | P0A72 Generator Phase V Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A73 | P0A73 | P0A73 Generator Phase V Strom - niedrig |
| 0x0A74 | P0A74 | P0A74 Generator Phase V Strom - hoch |
| 0x0A75 | P0A75 | P0A75 Generator Phase W Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A76 | P0A76 | P0A76 Generator Phase W Strom - niedrig |
| 0x0A77 | P0A77 | P0A77 Generator Phase W Strom - hoch |
| 0x0A78 | P0A78 | P0A78 Antriebsmotor 1 Inverter - Leistungsproblem |
| 0x0A79 | P0A79 | P0A79 Antriebsmotor 2 Inverter - Leistungsproblem |
| 0x0A7A | P0A7A | P0A7A Generator Inverter - Leistungsproblem |
| 0x0A7B | P0A7B | P0A7B Batterie-Steuergerät Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion |
| 0x0A7C | P0A7C | P0A7C Motorelektronik - Übertemperatur |
| 0x0A7D | P0A7D | P0A7D Hybridbatteriesatz - Ladezustand niedrig |
| 0x0A7E | P0A7E | P0A7E Hybridbatteriesatz - Übertemperatur |
| 0x0A7F | P0A7F | P0A7F Hybridbatteriesatz - Verschleiß |
| 0x0A80 | P0A80 | P0A80 Hybridbatteriesatz - Austausch erforderlich |
| 0x0A81 | P0A81 | P0A81 Hybridbatteriesatz Lüfter 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A82 | P0A82 | P0A82 Hybridbatteriesatz Lüfter 1 - Leistungsproblem oder klemmt offen |
| 0x0A83 | P0A83 | P0A83 Hybridbatteriesatz Lüfter 1 - klemmt geschlossen |
| 0x0A84 | P0A84 | P0A84 Hybridbatteriesatz Lüfter 1 Steuerkreis - niedrig |
| 0x0A85 | P0A85 | P0A85 Hybridbatteriesatz Lüfter 1 Steuerkreis - hoch |
| 0x0A86 | P0A86 | P0A86 14 Volt Powermodul Stromsensor 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A87 | P0A87 | P0A87 14 Volt Powermodul Stromsensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A88 | P0A88 | P0A88 14 Volt Powermodul Stromsensor 1 Schaltkreis - niedrig |
| 0x0A89 | P0A89 | P0A89 14 Volt Powermodul Stromsensor 1 Schaltkreis - hoch |
| 0x0A8A | P0A8A | P0A8A 14 Volt Powermodul Stromsensor 1 Schaltkreis - sporadisch |
| 0x0A8B | P0A8B | P0A8B 14 Volt Powermodul Bordnetzspannung - Fehlfunktion |
| 0x0A8C | P0A8C | P0A8C 14 Volt Powermodul Bordnetzspannung - Instabil |
| 0x0A8D | P0A8D | P0A8D 14 Volt Powermodul Bordnetzspannung - Unterspannung |
| 0x0A8E | P0A8E | P0A8E 14 Volt Powermodul Bordnetzspannung - Überspannung |
| 0x0A8F | P0A8F | P0A8F 14 Volt Powermodul - Leistungsproblem |
| 0x0A90 | P0A90 | P0A90 Antriebsmotor 1 - Leistungsproblem |
| 0x0A91 | P0A91 | P0A91 Antriebsmotor 2 - Leistungsproblem |
| 0x0A92 | P0A92 | P0A92 Hybridgenerator - Leistungsproblem |
| 0x0A93 | P0A93 | P0A93 Inverter 1 Kühlsystem - Leistungsproblem |
| 0x0A94 | P0A94 | P0A94 DC/DC Wandler - Leistungsproblem |
| 0x0A95 | P0A95 | P0A95 Hochspannungssicherung - Fehlfunktion |
| 0x0A96 | P0A96 | P0A96 Hybridbatteriesatz Lüfter 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A97 | P0A97 | P0A97 Hybridbatteriesatz Lüfter 2 - Leistungsproblem oder klemmt offen |
| 0x0A98 | P0A98 | P0A98 Hybridbatteriesatz Lüfter 2 - klemmt geschlossen |
| 0x0A99 | P0A99 | P0A99 Hybridbatteriesatz Lüfter 2 Steuerkreis - niedrig |
| 0x0A9A | P0A9A | P0A9A Hybridbatteriesatz Lüfter 2 Steuerkreis - hoch |
| 0x0A9B | P0A9B | P0A9B Hybridbatterie Temperaturfühler 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A9C | P0A9C | P0A9C Hybridbatterie Temperaturfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0A9D | P0A9D | P0A9D Hybridbatterie Temperaturfühler 1 Schaltkreis - niedrig |
| 0x0A9E | P0A9E | P0A9E Hybridbatterie Temperaturfühler 1 Schaltkreis - hoch |
| 0x0A9F | P0A9F | P0A9F Hybridbatterie Temperaturfühler 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x0AA0 | P0AA0 | P0AA0 Hybridbatterie Pluspol-Schütz Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AA1 | P0AA1 | P0AA1 Hybridbatterie Pluspol-Schütz Schaltkreis - verklebt/festgebrannt im geschlossenen Zustand |
| 0x0AA2 | P0AA2 | P0AA2 Hybridbatterie Pluspol-Schütz Schaltkreis - verklebt/festgebrannt im offenen Zustand |
| 0x0AA3 | P0AA3 | P0AA3 Hybridbatterie Minuspol-Schütz Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AA4 | P0AA4 | P0AA4 Hybridbatterie Minuspol-Schütz Schaltkreis - verklebt/festgebrannt im geschlossenen Zustand |
| 0x0AA5 | P0AA5 | P0AA5 Hybridbatterie Minuspol-Schütz Schaltkreis - verklebt/festgebrannt im offenen Zustand |
| 0x0AA6 | P0AA6 | P0AA6 Hybridbatterie Spannungsisolation - Fehler |
| 0x0AA7 | P0AA7 | P0AA7 Hybridbatterie Spannungsisolationssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AA8 | P0AA8 | P0AA8 Hybridbatterie Spannungsisolationssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AA9 | P0AA9 | P0AA9 Hybridbatterie Spannungsisolationssensor Schaltkreis - niedrig |
| 0x0AAA | P0AAA | P0AAA Hybridbatterie Spannungsisolationssensor Schaltkreis - hoch |
| 0x0AAB | P0AAB | P0AAB Hybridbatterie Spannungsisolationssensor Schaltkreis - sporadisch/unregelmäßig |
| 0x0AAC | P0AAC | P0AAC Hybridbatteriesatz Lufttemperaturfühler 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AAD | P0AAD | P0AAD Hybridbatteriesatz Lufttemperaturfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AAE | P0AAE | P0AAE Hybridbatteriesatz Lufttemperaturfühler 1 Schaltkreis - niedrig |
| 0x0AAF | P0AAF | P0AAF Hybridbatteriesatz Lufttemperaturfühler 1 Schaltkreis - hoch |
| 0x0AB0 | P0AB0 | P0AB0 Hybridbatteriesatz Lufttemperaturfühler 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x0AB1 | P0AB1 | P0AB1 Hybridbatteriesatz Lufttemperaturfühler 2 Schaltkreis - oder Leitungsunterbrechung |
| 0x0AB2 | P0AB2 | P0AB2 Hybridbatteriesatz Lufttemperaturfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AB3 | P0AB3 | P0AB3 Hybridbatteriesatz Lufttemperaturfühler 2 Schaltkreis - niedrig |
| 0x0AB4 | P0AB4 | P0AB4 Hybridbatteriesatz Lufttemperaturfühler 2 Schaltkreis - hoch |
| 0x0AB5 | P0AB5 | P0AB5 Hybridbatteriesatz Lufttemperaturfühler 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x0AB6 | P0AB6 | P0AB6 Motorlager 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AB7 | P0AB7 | P0AB7 Motorlager 2 Steuerkreis - niedrig |
| 0x0AB8 | P0AB8 | P0AB8 Motorlager 2 Steuerkreis - hoch |
| 0x0AB9 | P0AB9 | P0AB9 Hybridsystem - Leistungsproblem |
| 0x0ABA | P0ABA | P0ABA Hybridbatteriesatz Spannungsüberwachungskreis 'A' - Fehlfunktion |
| 0x0ABB | P0ABB | P0ABB Hybridbatteriesatz Spannungsüberwachungskreis 'A' - Messbereichs- oder Leistungsproblem |
| 0x0ABC | P0ABC | P0ABC Hybridbatteriesatz Spannungsüberwachungskreis 'A' - niedrig |
| 0x0ABD | P0ABD | P0ABD Hybridbatteriesatz Spannungsüberwachungskreis 'A' - hoch |
| 0x0ABE | P0ABE | P0ABE Hybridbatteriesatz Spannungsüberwachungskreis 'A' - sporadisch/unregelmäßig |
| 0x0ABF | P0ABF | P0ABF Hybridbatteriesatz Stromsensor 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AC0 | P0AC0 | P0AC0 Hybridbatteriesatz Stromsensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AC1 | P0AC1 | P0AC1 Hybridbatteriesatz Stromsensor 1 Schaltkreis - niedrig |
| 0x0AC2 | P0AC2 | P0AC2 Hybridbatteriesatz Stromsensor 1 Schaltkreis - hoch |
| 0x0AC3 | P0AC3 | P0AC3 Hybridbatteriesatz Stromsensor 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x0AC4 | P0AC4 | P0AC4 Hybridantriebs-Steuergerät Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion |
| 0x0AC5 | P0AC5 | P0AC5 Hybridbatterie Temperaturfühler 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AC6 | P0AC6 | P0AC6 Hybridbatterie Temperaturfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AC7 | P0AC7 | P0AC7 Hybridbatterie Temperaturfühler 2 Schaltkreis - niedrig |
| 0x0AC8 | P0AC8 | P0AC8 Hybridbatterie Temperaturfühler 2 Schaltkreis - hoch |
| 0x0AC9 | P0AC9 | P0AC9 Hybridbatterie Temperaturfühler 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x0ACA | P0ACA | P0ACA Hybridbatterie Temperaturfühler 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0ACB | P0ACB | P0ACB Hybridbatterie Temperaturfühler 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0ACC | P0ACC | P0ACC Hybridbatterie Temperaturfühler 3 Schaltkreis - niedrig |
| 0x0ACD | P0ACD | P0ACD Hybridbatterie Temperaturfühler 3 Schaltkreis - hoch |
| 0x0ACE | P0ACE | P0ACE Hybridbatterie Temperaturfühler 3 Schaltkreis - sporadisch/unregelmäßig |
| 0x0ACF | P0ACF | P0ACF Hybridbatteriesatz Lüfter 3 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AD0 | P0AD0 | P0AD0 Hybridbatteriesatz Lüfter 3 - Leistungsproblem oder klemmt offen |
| 0x0AD1 | P0AD1 | P0AD1 Hybridbatteriesatz Lüfter 3 - klemmt geschlossen |
| 0x0AD2 | P0AD2 | P0AD2 Hybridbatteriesatz Lüfter 3 Steuerkreis - niedrig |
| 0x0AD3 | P0AD3 | P0AD3 Hybridbatteriesatz Lüfter 3 Steuerkreis - hoch |
| 0x0AD4 | P0AD4 | P0AD4 Hybridbatteriesatz - Luftmengendurchsatz zu gering |
| 0x0AD5 | P0AD5 | P0AD5 Hybridbatteriesatz Luftmengenventil 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AD6 | P0AD6 | P0AD6 Hybridbatteriesatz Luftmengenventil 1 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0AD7 | P0AD7 | P0AD7 Hybridbatteriesatz Luftmengenventil 1 Steuerkreis - niedrig |
| 0x0AD8 | P0AD8 | P0AD8 Hybridbatteriesatz Luftmengenventil 1 Steuerkreis - hoch |
| 0x0AD9 | P0AD9 | P0AD9 Hybridbatterie Pluspol-Schütz Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0ADA | P0ADA | P0ADA Hybridbatterie Pluspol-Schütz Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0ADB | P0ADB | P0ADB Hybridbatterie Pluspol-Schütz Steuerkreis - niedrig |
| 0x0ADC | P0ADC | P0ADC Hybridbatterie Pluspol-Schütz Steuerkreis - hoch |
| 0x0ADD | P0ADD | P0ADD Hybridbatterie Minuspol-Schütz Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0ADE | P0ADE | P0ADE Hybridbatterie Minuspol-Schütz Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0ADF | P0ADF | P0ADF Hybridbatterie Minuspol-Schütz Steuerkreis - niedrig |
| 0x0AE0 | P0AE0 | P0AE0 Hybridbatterie Minuspol-Schütz Steuerkreis - hoch |
| 0x0AE1 | P0AE1 | P0AE1 Hybridbatterie Vorbelastungs-Schütz Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AE2 | P0AE2 | P0AE2 Hybridbatterie Vorbelastungs-Schütz Schaltkreis - verklebt/festgebrannt im geschlossenen Zustand |
| 0x0AE3 | P0AE3 | P0AE3 Hybridbatterie Vorbelastungs-Schütz Schaltkreis - verklebt/festgebrannt im offenem Zustand |
| 0x0AE4 | P0AE4 | P0AE4 Hybridbatterie Vorbelastungs-Schütz Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AE5 | P0AE5 | P0AE5 HybridbatterieVorbelastungs-Schütz Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x0AE6 | P0AE6 | P0AE6 Hybridbatterie Vorbelastungs-Schütz Steuerkreis - niedrig |
| 0x0AE7 | P0AE7 | P0AE7 Hybridbatterie Vorbelastungs-Schütz Steuerkreis - hoch |
| 0x0AE8 | P0AE8 | P0AE8 Hybridbatterie Temperaturfühler 4 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AE9 | P0AE9 | P0AE9 Hybridbatterie Temperaturfühler 4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AEA | P0AEA | P0AEA Hybridbatterie Temperaturfühler 4 Schaltkreis - niedrig |
| 0x0AEB | P0AEB | P0AEB Hybridbatterie Temperaturfühler 4 Schaltkreis - hoch |
| 0x0AEC | P0AEC | P0AEC Hybridbatterie Temperaturfühler 4 Schaltkreis - sporadisch/unregelmäßig |
| 0x0AED | P0AED | P0AED Antriebsmotor Inverter Temperaturfühler 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AEE | P0AEE | P0AEE Antriebsmotor Inverter Temperaturfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AEF | P0AEF | P0AEF Antriebsmotor Inverter Temperaturfühler 1 Schaltkreis - niedrig |
| 0x0AF0 | P0AF0 | P0AF0 Antriebsmotor Inverter Temperaturfühler 1 Schaltkreis - hoch |
| 0x0AF1 | P0AF1 | P0AF1 Antriebsmotor Inverter Temperaturfühler 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x0AF2 | P0AF2 | P0AF2 Antriebsmotor Inverter Temperaturfühler 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AF3 | P0AF3 | P0AF3 Antriebsmotor Inverter Temperaturfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0AF4 | P0AF4 | P0AF4 Antriebsmotor Inverter Temperaturfühler 2 Schaltkreis - niedrig |
| 0x0AF5 | P0AF5 | P0AF5 Antriebsmotor Inverter Temperaturfühler 2 Schaltkreis - hoch |
| 0x0AF6 | P0AF6 | P0AF6 Antriebsmotor Inverter Temperaturfühler 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x0AF7 | P0AF7 | P0AF7 14 Volt Powermodul - interne Temperatur zu hoch |
| 0x0AF8 | P0AF8 | P0AF8 Hybridbatterie Bordnetzspannung - Fehlfunktion |
| 0x0AF9 | P0AF9 | P0AF9 Hybridbatterie Bordnetzspannung - Instabil |
| 0x0AFA | P0AFA | P0AFA Hybridbatterie Bordnetzspannung - Unterspannung |
| 0x0AFB | P0AFB | P0AFB Hybridbatterie Bordnetzspannung - Überspannung |
| 0x0AFC | P0AFC | P0AFC Hybridbatteriesatz Sensormodul - Fehlfunktion |
| 0x0AFD | P0AFD | P0AFD Hybridbatteriesatz - Temperatur zu niedrig |
| 0x0AFE | P0AFE | P0AFE Hybridbatterie Bordnetzspannung - zu niedrig für Spannungswandlung 14V nach Hochvolt |
| 0x0AFF | P0AFF | P0AFF Bordnetzspannung - zu niedrig für Spannungswandlung Hochvolt nach 14V |
| 0x0B00 | P0B00 | P0B00 Getriebeöl-Zusatzpumpenmotor Phase U Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0B01 | P0B01 | P0B01 Getriebeöl-Zusatzpumpenmotor Phase U Strom - niedrig |
| 0x0B02 | P0B02 | P0B02 Getriebeöl-Zusatzpumpenmotor Phase U Strom - hoch |
| 0x0B03 | P0B03 | P0B03 Getriebeöl-Zusatzpumpenmotor Phase V Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0B04 | P0B04 | P0B04 Getriebeöl-Zusatzpumpenmotor Phase V Strom - niedrig |
| 0x0B05 | P0B05 | P0B05 Getriebeöl-Zusatzpumpenmotor Phase V Strom - hoch |
| 0x0B06 | P0B06 | P0B06 Getriebeöl-Zusatzpumpenmotor Phase W Strom - Fehlfunktion oder Leitungsunterbrechung |
| 0x0B07 | P0B07 | P0B07 Getriebeöl-Zusatzpumpenmotor Phase W Strom - niedrig |
| 0x0B08 | P0B08 | P0B08 Getriebeöl-Zusatzpumpenmotor Phase W Strom - hoch |
| 0x0B09 | P0B09 | P0B09 Getriebeöl-Zusatzpumpenmotor Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0B0A | P0B0A | P0B0A Getriebeöl-Zusatzpumpenmotor Versorgungsspannungskreis - niedrig |
| 0x0B0B | P0B0B | P0B0B Getriebeöl-Zusatzpumpenmotor Versorgungsspannungskreis - hoch |
| 0x0B0C | P0B0C | P0B0C Getriebeöl-Zusatzpumpe - hydraulisches Leck |
| 0x0B0D | P0B0D | P0B0D Getriebeöl-Zusatzpumpenmotor Steuergerät - Fehlfunktion |
| 0x0B0E | P0B0E | P0B0E Hybridbatteriesatz Stromsensor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0B0F | P0B0F | P0B0F Hybridbatteriesatz Stromsensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0B10 | P0B10 | P0B10 Hybridbatteriesatz Stromsensor 2 Schaltkreis - niedrig |
| 0x0B11 | P0B11 | P0B11 Hybridbatteriesatz Stromsensor 2 Schaltkreis - hoch |
| 0x0B12 | P0B12 | P0B12 Hybridbatteriesatz Stromsensor 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x0B13 | P0B13 | P0B13 Hybridbatteriesatz Stromsensor 1/2 - Korrelationsfehler |
| 0x0B14 | P0B14 | P0B14 Hybridbatteriesatz Spannungsüberwachungskreis 'B' - Fehlfunktion |
| 0x0B15 | P0B15 | P0B15 Hybridbatteriesatz Spannungsüberwachungskreis 'B' - Messbereichs- oder Leistungsproblem |
| 0x0B16 | P0B16 | P0B16 Hybridbatteriesatz Spannungsüberwachungskreis 'B' - niedrig |
| 0x0B17 | P0B17 | P0B17 Hybridbatteriesatz Spannungsüberwachungskreis 'B' - hoch |
| 0x0B18 | P0B18 | P0B18 Hybridbatteriesatz Spannungsüberwachungskreis 'B' - sporadisch/unregelmäßig |
| 0x0B19 | P0B19 | P0B19 Hybridbatteriesatz Spannungsüberwachungskreis 'C' - Fehlfunktion |
| 0x0B1A | P0B1A | P0B1A Hybridbatteriesatz Spannungsüberwachungskreis 'C' - Messbereichs- oder Leistungsproblem |
| 0x0B1B | P0B1B | P0B1B Hybridbatteriesatz Spannungsüberwachungskreis 'C' - niedrig |
| 0x0B1C | P0B1C | P0B1C Hybridbatteriesatz Spannungsüberwachungskreis 'C' - hoch |
| 0x0B1D | P0B1D | P0B1D Hybridbatteriesatz Spannungsüberwachungskreis 'C' - sporadisch/unregelmäßig |
| 0x0B1E | P0B1E | P0B1E Hybridbatteriesatz Spannungsüberwachungskreis 'D' - Fehlfunktion |
| 0x0B1F | P0B1F | P0B1F Hybridbatteriesatz Spannungsüberwachungskreis 'D' - Messbereichs- oder Leistungsproblem |
| 0x0B20 | P0B20 | P0B20 Hybridbatteriesatz Spannungsüberwachungskreis 'D' - niedrig |
| 0x0B21 | P0B21 | P0B21 Hybridbatteriesatz Spannungsüberwachungskreis 'D' - hoch |
| 0x0B22 | P0B22 | P0B22 Hybridbatteriesatz Spannungsüberwachungskreis 'D' - sporadisch/unregelmäßig |
| 0x0B23 | P0B23 | P0B23 Hybridbatterie 1 Spannung - Fehlfunktion |
| 0x0B24 | P0B24 | P0B24 Hybridbatterie 1 Spannung - instabil |
| 0x0B25 | P0B25 | P0B25 Hybridbatterie 1 Spannung - niedrig |
| 0x0B26 | P0B26 | P0B26 Hybridbatterie 1 Spannung - hoch |
| 0x0B27 | P0B27 | P0B27 Hybridbatterie 2 Spannung - Fehlfunktion |
| 0x0B28 | P0B28 | P0B28 Hybridbatterie 2 Spannung - instabil |
| 0x0B29 | P0B29 | P0B29 Hybridbatterie 2 Spannung - niedrig |
| 0x0B2A | P0B2A | P0B2A Hybridbatterie 2 Spannung - hoch |
| 0x0B2B | P0B2B | P0B2B Hybridbatterie 3 Spannung - Fehlfunktion |
| 0x0B2C | P0B2C | P0B2C Hybridbatterie 3 Spannung - instabil |
| 0x0B2D | P0B2D | P0B2D Hybridbatterie 3 Spannung - niedrig |
| 0x0B2E | P0B2E | P0B2E Hybridbatterie 1 Spannung - hoch |
| 0x0B2F | P0B2F | P0B2F Hybridbatterie 4 Spannung - Fehlfunktion |
| 0x0B30 | P0B30 | P0B30 Hybridbatterie 4 Spannung - instabil |
| 0x0B31 | P0B31 | P0B31 Hybridbatterie 4 Spannung - niedrig |
| 0x0B32 | P0B32 | P0B32 Hybridbatterie 4 Spannung - hoch |
| 0x0B33 | P0B33 | P0B33 Hochvolt-Trennschalter für Service Schaltkreis - Fehlfunktion |
| 0x0B34 | P0B34 | P0B34 Hochvolt-Trennschalter für Service Schaltkreis - Leistungsproblem |
| 0x0B35 | P0B35 | P0B35 Hochvolt-Trennschalter für Service Schaltkreis - niedrig |
| 0x0B36 | P0B36 | P0B36 Hochvolt-Trennschalter für Service Schaltkreis - hoch |
| 0x0B37 | P0B37 | P0B37 Hochvolt-Trennschalter für Service Schaltkreis - Leitungsunterbrechung |
| 0x0B38 | P0B38 | P0B38 Motorelektronik Kühlmittelpumpe 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0B39 | P0B39 | P0B39 Motorelektronik Kühlmittelpumpe 2 Steuerkreis - niedrig |
| 0x0B3A | P0B3A | P0B3A Motorelektronik Kühlmittelpumpe 2 Steuerkreis - hoch |
| 0x0B3B | P0B3B | P0B3B Hybridbatterie Spannungsüberwachungskreis 'A' - Fehlfunktion |
| 0x0B3C | P0B3C | P0B3C Hybridbatterie Spannungsüberwachungskreis 'A' - Messbereichs- oder Leistungsproblem |
| 0x0B3D | P0B3D | P0B3D Hybridbatterie Spannungsüberwachungskreis 'A' - niedrig |
| 0x0B3E | P0B3E | P0B3E Hybridbatterie Spannungsüberwachungskreis 'A' - hoch |
| 0x0B3F | P0B3F | P0B3F Hybridbatterie Spannungsüberwachungskreis 'A' - sporadisch/unregelmäßig |
| 0x0B40 | P0B40 | P0B40 Hybridbatterie Spannungsüberwachungskreis 'B' - Fehlfunktion |
| 0x0B41 | P0B41 | P0B41 Hybridbatterie Spannungsüberwachungskreis 'B' - Messbereichs- oder Leistungsproblem |
| 0x0B42 | P0B42 | P0B42 Hybridbatterie Spannungsüberwachungskreis 'B' - niedrig |
| 0x0B43 | P0B43 | P0B43 Hybridbatterie Spannungsüberwachungskreis 'B' - hoch |
| 0x0B44 | P0B44 | P0B44 Hybridbatterie Spannungsüberwachungskreis 'B' - sporadisch/unregelmäßig |
| 0x0B45 | P0B45 | P0B45 Hybridbatterie Spannungsüberwachungskreis 'C' - Fehlfunktion |
| 0x0B46 | P0B46 | P0B46 Hybridbatterie Spannungsüberwachungskreis 'C' - Messbereichs- oder Leistungsproblem |
| 0x0B47 | P0B47 | P0B47 Hybridbatterie Spannungsüberwachungskreis 'C' - niedrig |
| 0x0B48 | P0B48 | P0B48 Hybridbatterie Spannungsüberwachungskreis 'C' - hoch |
| 0x0B49 | P0B49 | P0B49 Hybridbatterie Spannungsüberwachungskreis 'C' - sporadisch/unregelmäßig |
| 0x0B4A | P0B4A | P0B4A Hybridbatterie Spannungsüberwachungskreis 'D' - Fehlfunktion |
| 0x0B4B | P0B4B | P0B4B Hybridbatterie Spannungsüberwachungskreis 'D' - Messbereichs- oder Leistungsproblem |
| 0x0B4C | P0B4C | P0B4C Hybridbatterie Spannungsüberwachungskreis 'D' - niedrig |
| 0x0B4D | P0B4D | P0B4D Hybridbatterie Spannungsüberwachungskreis 'D' - hoch |
| 0x0B4E | P0B4E | P0B4E Hybridbatterie Spannungsüberwachungskreis 'D' - sporadisch/unregelmäßig |
| 0x0B4F | P0B4F | P0B4F Hybridbatterie Spannungsüberwachungskreis 'E' - Fehlfunktion |
| 0x0B50 | P0B50 | P0B50 Hybridbatterie Spannungsüberwachungskreis 'E' - Messbereichs- oder Leistungsproblem |
| 0x0B51 | P0B51 | P0B51 Hybridbatterie Spannungsüberwachungskreis 'E' - niedrig |
| 0x0B52 | P0B52 | P0B52 Hybridbatterie Spannungsüberwachungskreis 'E' - hoch |
| 0x0B53 | P0B53 | P0B53 Hybridbatterie Spannungsüberwachungskreis 'E' - sporadisch/unregelmäßig |
| 0x0B54 | P0B54 | P0B54 Hybridbatterie Spannungsüberwachungskreis 'F' - Fehlfunktion |
| 0x0B55 | P0B55 | P0B55 Hybridbatterie Spannungsüberwachungskreis 'F' - Messbereichs- oder Leistungsproblem |
| 0x0B56 | P0B56 | P0B56 Hybridbatterie Spannungsüberwachungskreis 'F' - niedrig |
| 0x0B57 | P0B57 | P0B57 Hybridbatterie Spannungsüberwachungskreis 'F' - hoch |
| 0x0B58 | P0B58 | P0B58 Hybridbatterie Spannungsüberwachungskreis 'F' - sporadisch/unregelmäßig |
| 0x0B59 | P0B59 | P0B59 Hybridbatterie Spannungsüberwachungskreis 'G' - Fehlfunktion |
| 0x0B5A | P0B5A | P0B5A Hybridbatterie Spannungsüberwachungskreis 'G' - Messbereichs- oder Leistungsproblem |
| 0x0B5B | P0B5B | P0B5B Hybridbatterie Spannungsüberwachungskreis 'G' - niedrig |
| 0x0B5C | P0B5C | P0B5C Hybridbatterie Spannungsüberwachungskreis 'G' - hoch |
| 0x0B5D | P0B5D | P0B5D Hybridbatterie Spannungsüberwachungskreis 'G' - sporadisch/unregelmäßig |
| 0x0B5E | P0B5E | P0B5E Hybridbatterie Spannungsüberwachungskreis 'H' - Fehlfunktion |
| 0x0B5F | P0B5F | P0B5F Hybridbatterie Spannungsüberwachungskreis 'H' - Messbereichs- oder Leistungsproblem |
| 0x0B60 | P0B60 | P0B60 Hybridbatterie Spannungsüberwachungskreis 'H' - niedrig |
| 0x0B61 | P0B61 | P0B61 Hybridbatterie Spannungsüberwachungskreis 'H' - hoch |
| 0x0B62 | P0B62 | P0B62 Hybridbatterie Spannungsüberwachungskreis 'H' - sporadisch/unregelmäßig |
| 0x0B63 | P0B63 | P0B63 Hybridbatterie Spannungsüberwachungskreis 'I' - Fehlfunktion |
| 0x0B64 | P0B64 | P0B64 Hybridbatterie Spannungsüberwachungskreis 'I' - Messbereichs- oder Leistungsproblem |
| 0x0B65 | P0B65 | P0B65 Hybridbatterie Spannungsüberwachungskreis 'I' - niedrig |
| 0x0B66 | P0B66 | P0B66 Hybridbatterie Spannungsüberwachungskreis 'I' - hoch |
| 0x0B67 | P0B67 | P0B67 Hybridbatterie Spannungsüberwachungskreis 'I' - sporadisch/unregelmäßig |
| 0x0B68 | P0B68 | P0B68 Hybridbatterie Spannungsüberwachungskreis 'J' - Fehlfunktion |
| 0x0B69 | P0B69 | P0B69 Hybridbatterie Spannungsüberwachungskreis 'J' - Messbereichs- oder Leistungsproblem |
| 0x0B6A | P0B6A | P0B6A Hybridbatterie Spannungsüberwachungskreis 'J' - niedrig |
| 0x0B6B | P0B6B | P0B6B Hybridbatterie Spannungsüberwachungskreis 'J' - hoch |
| 0x0B6C | P0B6C | P0B6C Hybridbatterie Spannungsüberwachungskreis 'J' - sporadisch/unregelmäßig |
| 0x0B6D | P0B6D | P0B6D Hybridbatterie Spannungsüberwachungskreis 'K' - Fehlfunktion |
| 0x0B6E | P0B6E | P0B6E Hybridbatterie Spannungsüberwachungskreis 'K' - Messbereichs- oder Leistungsproblem |
| 0x0B6F | P0B6F | P0B6F Hybridbatterie Spannungsüberwachungskreis 'K' - niedrig |
| 0x0B70 | P0B70 | P0B70 Hybridbatterie Spannungsüberwachungskreis 'K' - hoch |
| 0x0B71 | P0B71 | P0B71 Hybridbatterie Spannungsüberwachungskreis 'K' - sporadisch/unregelmäßig |
| 0x0B72 | P0B72 | P0B72 Hybridbatterie Spannungsüberwachungskreis 'L' - Fehlfunktion |
| 0x0B73 | P0B73 | P0B73 Hybridbatterie Spannungsüberwachungskreis 'L' - Messbereichs- oder Leistungsproblem |
| 0x0B74 | P0B74 | P0B74 Hybridbatterie Spannungsüberwachungskreis 'L' - niedrig |
| 0x0B75 | P0B75 | P0B75 Hybridbatterie Spannungsüberwachungskreis 'L' - hoch |
| 0x0B76 | P0B76 | P0B76 Hybridbatterie Spannungsüberwachungskreis 'L' - sporadisch/unregelmäßig |
| 0x0B77 | P0B77 | P0B77 Hybridbatterie Spannungsüberwachungskreis 'M' - Fehlfunktion |
| 0x0B78 | P0B78 | P0B78 Hybridbatterie Spannungsüberwachungskreis 'M' - Messbereichs- oder Leistungsproblem |
| 0x0B79 | P0B79 | P0B79 Hybridbatterie Spannungsüberwachungskreis 'M' - niedrig |
| 0x0B7A | P0B7A | P0B7A Hybridbatterie Spannungsüberwachungskreis 'M' - hoch |
| 0x0B7B | P0B7B | P0B7B Hybridbatterie Spannungsüberwachungskreis 'M' - sporadisch/unregelmäßig |
| 0x0B7C | P0B7C | P0B7C Hybridbatterie Spannungsüberwachungskreis 'N' - Fehlfunktion |
| 0x0B7D | P0B7D | P0B7D Hybridbatterie Spannungsüberwachungskreis 'N' - Messbereichs- oder Leistungsproblem |
| 0x0B7E | P0B7E | P0B7E Hybridbatterie Spannungsüberwachungskreis 'N' - niedrig |
| 0x0B7F | P0B7F | P0B7F Hybridbatterie Spannungsüberwachungskreis 'N' - hoch |
| 0x0B80 | P0B80 | P0B80 Hybridbatterie Spannungsüberwachungskreis 'N' - sporadisch/unregelmäßig |
| 0x0B81 | P0B81 | P0B81 Hybridbatterie Spannungsüberwachungskreis 'O' - Fehlfunktion |
| 0x0B82 | P0B82 | P0B82 Hybridbatterie Spannungsüberwachungskreis 'O' - Messbereichs- oder Leistungsproblem |
| 0x0B83 | P0B83 | P0B83 Hybridbatterie Spannungsüberwachungskreis 'O' - niedrig |
| 0x0B84 | P0B84 | P0B84 Hybridbatterie Spannungsüberwachungskreis 'O' - hoch |
| 0x0B85 | P0B85 | P0B85 Hybridbatterie Spannungsüberwachungskreis 'O' - sporadisch/unregelmäßig |
| 0x0B86 | P0B86 | P0B86 Hybridbatterie Spannungsüberwachungskreis 'P' - Fehlfunktion |
| 0x0B87 | P0B87 | P0B87 Hybridbatterie Spannungsüberwachungskreis 'P' - Messbereichs- oder Leistungsproblem |
| 0x0B88 | P0B88 | P0B88 Hybridbatterie Spannungsüberwachungskreis 'P' - niedrig |
| 0x0B89 | P0B89 | P0B89 Hybridbatterie Spannungsüberwachungskreis 'P' - hoch |
| 0x0B8A | P0B8A | P0B8A Hybridbatterie Spannungsüberwachungskreis 'P' - sporadisch/unregelmäßig |
| 0x0B8B | P0B8B | P0B8B Hybridbatterie Spannungsüberwachungskreis 'Q' - Fehlfunktion |
| 0x0B8C | P0B8C | P0B8C Hybridbatterie Spannungsüberwachungskreis 'Q' - Messbereichs- oder Leistungsproblem |
| 0x0B8D | P0B8D | P0B8D Hybridbatterie Spannungsüberwachungskreis 'Q' - niedrig |
| 0x0B8E | P0B8E | P0B8E Hybridbatterie Spannungsüberwachungskreis 'Q' - hoch |
| 0x0B8F | P0B8F | P0B8F Hybridbatterie Spannungsüberwachungskreis 'Q' - sporadisch/unregelmäßig |
| 0x0B90 | P0B90 | P0B90 Hybridbatterie Spannungsüberwachungskreis 'R' - Fehlfunktion |
| 0x0B91 | P0B91 | P0B91 Hybridbatterie Spannungsüberwachungskreis 'R' - Messbereichs- oder Leistungsproblem |
| 0x0B92 | P0B92 | P0B92 Hybridbatterie Spannungsüberwachungskreis 'R' - niedrig |
| 0x0B93 | P0B93 | P0B93 Hybridbatterie Spannungsüberwachungskreis 'R' - hoch |
| 0x0B94 | P0B94 | P0B94 Hybridbatterie Spannungsüberwachungskreis 'R' - sporadisch/unregelmäßig |
| 0x0B95 | P0B95 | P0B95 Hybridbatterie Spannungsüberwachungskreis 'S' - Fehlfunktion |
| 0x0B96 | P0B96 | P0B96 Hybridbatterie Spannungsüberwachungskreis 'S' - Messbereichs- oder Leistungsproblem |
| 0x0B97 | P0B97 | P0B97 Hybridbatterie Spannungsüberwachungskreis 'S' - niedrig |
| 0x0B98 | P0B98 | P0B98 Hybridbatterie Spannungsüberwachungskreis 'S' - hoch |
| 0x0B99 | P0B99 | P0B99 Hybridbatterie Spannungsüberwachungskreis 'S' - sporadisch/unregelmäßig |
| 0x0B9A | P0B9A | P0B9A Hybridbatterie Spannungsüberwachungskreis 'T' - Fehlfunktion |
| 0x0B9B | P0B9B | P0B9B Hybridbatterie Spannungsüberwachungskreis 'T' - Messbereichs- oder Leistungsproblem |
| 0x0B9C | P0B9C | P0B9C Hybridbatterie Spannungsüberwachungskreis 'T' - niedrig |
| 0x0B9D | P0B9D | P0B9D Hybridbatterie Spannungsüberwachungskreis 'T' - hoch |
| 0x0B9E | P0B9E | P0B9E Hybridbatterie Spannungsüberwachungskreis 'T' - sporadisch/unregelmäßig |
| 0x0B9F | P0B9F | P0B9F Hybridbatterie Spannungsüberwachungskreis 'U' - Fehlfunktion |
| 0x0BA0 | P0BA0 | P0BA0 Hybridbatterie Spannungsüberwachungskreis 'U' - Messbereichs- oder Leistungsproblem |
| 0x0BA1 | P0BA1 | P0BA1 Hybridbatterie Spannungsüberwachungskreis 'U' - niedrig |
| 0x0BA2 | P0BA2 | P0BA2 Hybridbatterie Spannungsüberwachungskreis 'U' - hoch |
| 0x0BA3 | P0BA3 | P0BA3 Hybridbatterie Spannungsüberwachungskreis 'U' - sporadisch/unregelmäßig |
| 0x0BA4 | P0BA4 | P0BA4 Hybridbatterie Spannungsüberwachungskreis 'V' - Fehlfunktion |
| 0x0BA5 | P0BA5 | P0BA5 Hybridbatterie Spannungsüberwachungskreis 'V' - Messbereichs- oder Leistungsproblem |
| 0x0BA6 | P0BA6 | P0BA6 Hybridbatterie Spannungsüberwachungskreis 'V' - niedrig |
| 0x0BA7 | P0BA7 | P0BA7 Hybridbatterie Spannungsüberwachungskreis 'V' - hoch |
| 0x0BA8 | P0BA8 | P0BA8 Hybridbatterie Spannungsüberwachungskreis 'V' - sporadisch/unregelmäßig |
| 0x0BA9 | P0BA9 | P0BA9 Hybridbatterie Spannungsüberwachungskreis 'W' - Fehlfunktion |
| 0x0BAA | P0BAA | P0BAA Hybridbatterie Spannungsüberwachungskreis 'W' - Messbereichs- oder Leistungsproblem |
| 0x0BAB | P0BAB | P0BAB Hybridbatterie Spannungsüberwachungskreis 'W' - niedrig |
| 0x0BAC | P0BAC | P0BAC Hybridbatterie Spannungsüberwachungskreis 'W' - hoch |
| 0x0BAD | P0BAD | P0BAD Hybridbatterie Spannungsüberwachungskreis 'W' - sporadisch/unregelmäßig |
| 0x0BAE | P0BAE | P0BAE Hybridbatterie Spannungsüberwachungskreis 'X' - Fehlfunktion |
| 0x0BAF | P0BAF | P0BAF Hybridbatterie Spannungsüberwachungskreis 'X' - Messbereichs- oder Leistungsproblem |
| 0x0BB0 | P0BB0 | P0BB0 Hybridbatterie Spannungsüberwachungskreis 'X' - niedrig |
| 0x0BB1 | P0BB1 | P0BB1 Hybridbatterie Spannungsüberwachungskreis 'X' - hoch |
| 0x0BB2 | P0BB2 | P0BB2 Hybridbatterie Spannungsüberwachungskreis 'X' - sporadisch/unregelmäßig |
| 0x0BB3 | P0BB3 | P0BB3 Hybridbatterie Spannungsüberwachungskreis 'Y' - Fehlfunktion |
| 0x0BB4 | P0BB4 | P0BB4 Hybridbatterie Spannungsüberwachungskreis 'Y' - Messbereichs- oder Leistungsproblem |
| 0x0BB5 | P0BB5 | P0BB5 Hybridbatterie Spannungsüberwachungskreis 'Y' - niedrig |
| 0x0BB6 | P0BB6 | P0BB6 Hybridbatterie Spannungsüberwachungskreis 'Y' - hoch |
| 0x0BB7 | P0BB7 | P0BB7 Hybridbatterie Spannungsüberwachungskreis 'Y' - sporadisch/unregelmäßig |
| 0x0BB8 | P0BB8 | P0BB8 Hybridbatterie Spannungsüberwachungskreis 'Z' - Fehlfunktion |
| 0x0BB9 | P0BB9 | P0BB9 Hybridbatterie Spannungsüberwachungskreis 'Z' - Messbereichs- oder Leistungsproblem |
| 0x0BBA | P0BBA | P0BBA Hybridbatterie Spannungsüberwachungskreis 'Z' - niedrig |
| 0x0BBB | P0BBB | P0BBB Hybridbatterie Spannungsüberwachungskreis 'Z' - hoch |
| 0x0BBC | P0BBC | P0BBC Hybridbatterie Spannungsüberwachungskreis 'Z' - sporadisch/unregelmäßig |
| 0x0BBD | P0BBD | P0BBD Hybridbatteriesatz Spannungsabweichung - Grenzwert überschritten |
| 0x0BBE | P0BBE | P0BBE Hybridbatteriesatz - Spannungsabweichungen |
| 0x0BBF | P0BBF | P0BBF Hybridbatteriesatz Lüfter Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BC0 | P0BC0 | P0BC0 Hybridbatteriesatz Lüfter Versorgungsspannungskreis - niedrig |
| 0x0BC1 | P0BC1 | P0BC1 Hybridbatteriesatz Lüfter Versorgungsspannungskreis - hoch |
| 0x0BC2 | P0BC2 | P0BC2 Hybridbatterie Temperaturfühler 5 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BC3 | P0BC3 | P0BC3 Hybridbatterie Temperaturfühler 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BC4 | P0BC4 | P0BC4 Hybridbatterie Temperaturfühler 5 Schaltkreis - niedrig |
| 0x0BC5 | P0BC5 | P0BC5 Hybridbatterie Temperaturfühler 5 Schaltkreis - hoch |
| 0x0BC6 | P0BC6 | P0BC6 Hybridbatterie Temperaturfühler 5 Schaltkreis - sporadisch/unregelmäßig |
| 0x0BC7 | P0BC7 | P0BC7 Hybridbatteriesatz Lüfter Überwachungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BC8 | P0BC8 | P0BC8 Hybridbatteriesatz Lüfter Überwachung - Messbereichs- oder Leistungsproblem |
| 0x0BC9 | P0BC9 | P0BC9 Hybridbatteriesatz Lüfter Überwachungsschaltkreis - niedrig |
| 0x0BCA | P0BCA | P0BCA Hybridbatteriesatz Lüfter Überwachungsschaltkreis - hoch |
| 0x0BCB | P0BCB | P0BCB Hybridbatteriesatz Lüfter Überwachungsschaltkreis - sporadisch/unregelmäßig |
| 0x0BCC | P0BCC | P0BCC Generator Inverter Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BCD | P0BCD | P0BCD Generator Inverter Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BCE | P0BCE | P0BCE Generator Inverter Temperaturfühler Schaltkreis - niedrig |
| 0x0BCF | P0BCF | P0BCF Generator Inverter Temperaturfühler Schaltkreis - hoch |
| 0x0BD0 | P0BD0 | P0BD0 Generator Inverter Temperaturfühler Schaltkreis - sporadisch/unregelmäßig |
| 0x0BD1 | P0BD1 | P0BD1 Antriebsmotor Inverter Temperaturfühler 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BD2 | P0BD2 | P0BD2 Antriebsmotor Inverter Temperaturfühler 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BD3 | P0BD3 | P0BD3 Antriebsmotor Inverter Temperaturfühler 3 Schaltkreis - niedrig |
| 0x0BD4 | P0BD4 | P0BD4 Antriebsmotor Inverter Temperaturfühler 3 Schaltkreis - hoch |
| 0x0BD5 | P0BD5 | P0BD5 Antriebsmotor Inverter Temperaturfühler 3 Schaltkreis - sporadisch/unregelmäßig |
| 0x0BD6 | P0BD6 | P0BD6 Antriebsmotor Inverter Temperaturfühler 4 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BD7 | P0BD7 | P0BD7 Antriebsmotor Inverter Temperaturfühler 4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BD8 | P0BD8 | P0BD8 Antriebsmotor Inverter Temperaturfühler 4 Schaltkreis - niedrig |
| 0x0BD9 | P0BD9 | P0BD9 Antriebsmotor Inverter Temperaturfühler 4 Schaltkreis - hoch |
| 0x0BDA | P0BDA | P0BDA Antriebsmotor Inverter Temperaturfühler 4 Schaltkreis - sporadisch/unregelmäßig |
| 0x0BDB | P0BDB | P0BDB Antriebsmotor Inverter Temperaturfühler 5 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BDC | P0BDC | P0BDC Antriebsmotor Inverter Temperaturfühler 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BDD | P0BDD | P0BDD Antriebsmotor Inverter Temperaturfühler 5 Schaltkreis - niedrig |
| 0x0BDE | P0BDE | P0BDE Antriebsmotor Inverter Temperaturfühler 5 Schaltkreis - hoch |
| 0x0BDF | P0BDF | P0BDF Antriebsmotor Inverter Temperaturfühler 5 Schaltkreis - sporadisch/unregelmäßig |
| 0x0BE0 | P0BE0 | P0BE0 Antriebsmotor Inverter Temperaturfühler 6 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BE1 | P0BE1 | P0BE1 Antriebsmotor Inverter Temperaturfühler 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BE2 | P0BE2 | P0BE2 Antriebsmotor Inverter Temperaturfühler 6 Schaltkreis - niedrig |
| 0x0BE3 | P0BE3 | P0BE3 Antriebsmotor Inverter Temperaturfühler 6 Schaltkreis - hoch |
| 0x0BE4 | P0BE4 | P0BE4 Antriebsmotor Inverter Temperaturfühler 6 Schaltkreis - sporadisch/unregelmäßig |
| 0x0BE5 | P0BE5 | P0BE5 Antriebsmotor 1 Phase U Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BE6 | P0BE6 | P0BE6 Antriebsmotor 1 Phase U Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BE7 | P0BE7 | P0BE7 Antriebsmotor 1 Phase U Stromsensor Schaltkreis - niedrig |
| 0x0BE8 | P0BE8 | P0BE8 Antriebsmotor 1 Phase U Stromsensor Schaltkreis - hoch |
| 0x0BE9 | P0BE9 | P0BE9 Antriebsmotor 1 Phase V Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BEA | P0BEA | P0BEA Antriebsmotor 1 Phase V Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BEB | P0BEB | P0BEB Antriebsmotor 1 Phase V Stromsensor Schaltkreis - niedrig |
| 0x0BEC | P0BEC | P0BEC Antriebsmotor 1 Phase V Stromsensor Schaltkreis - hoch |
| 0x0BED | P0BED | P0BED Antriebsmotor 1 Phase W Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BEE | P0BEE | P0BEE Antriebsmotor 1 Phase W Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BEF | P0BEF | P0BEF Antriebsmotor 1 Phase W Stromsensor Schaltkreis - niedrig |
| 0x0BF0 | P0BF0 | P0BF0 Antriebsmotor 1 Phase W Stromsensor Schaltkreis - hoch |
| 0x0BF1 | P0BF1 | P0BF1 Antriebsmotor 2 Phase U Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BF2 | P0BF2 | P0BF2 Antriebsmotor 2 Phase U Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BF3 | P0BF3 | P0BF3 Antriebsmotor 2 Phase U Stromsensor Schaltkreis - niedrig |
| 0x0BF4 | P0BF4 | P0BF4 Antriebsmotor 2 Phase U Stromsensor Schaltkreis - hoch |
| 0x0BF5 | P0BF5 | P0BF5 Antriebsmotor 2 Phase V Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BF6 | P0BF6 | P0BF6 Antriebsmotor 2 Phase V Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BF7 | P0BF7 | P0BF7 Antriebsmotor 2 Phase V Stromsensor Schaltkreis - niedrig |
| 0x0BF8 | P0BF8 | P0BF8 Antriebsmotor 2 Phase V Stromsensor Schaltkreis - hoch |
| 0x0BF9 | P0BF9 | P0BF9 Antriebsmotor 2 Phase W Stromsensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0BFA | P0BFA | P0BFA Antriebsmotor 2 Phase W Stromsensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0BFB | P0BFB | P0BFB Antriebsmotor 2 Phase W Stromsensor Schaltkreis - niedrig |
| 0x0BFC | P0BFC | P0BFC Antriebsmotor 2 Phase W Stromsensor Schaltkreis - hoch |
| 0x0BFD | P0BFD | P0BFD Antriebsmotor 1 Phase U-V-W Stromsensor - Korrelationsfehler |
| 0x0BFE | P0BFE | P0BFE Antriebsmotor 2 Phase U-V-W Stromsensor - Korrelationsfehler |
| 0x0BFF | P0BFF | P0BFF Antriebsmotor 1 Strom - Fehlfunktion |
| 0x0C00 | P0C00 | P0C00 Antriebsmotor 1 Strom - niedrig |
| 0x0C01 | P0C01 | P0C01 Antriebsmotor 1 Strom - hoch |
| 0x0C02 | P0C02 | P0C02 Antriebsmotor 2 Strom - Fehlfunktion |
| 0x0C03 | P0C03 | P0C03 Antriebsmotor 2 Strom - niedrig |
| 0x0C04 | P0C04 | P0C04 Antriebsmotor 2 Strom - hoch |
| 0x0C05 | P0C05 | P0C05 Antriebsmotor 1 Phase U-V-W Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C06 | P0C06 | P0C06 Antriebsmotor 1 Phase U-V-W Schaltkreis - niedrig |
| 0x0C07 | P0C07 | P0C07 Antriebsmotor 1 Phase U-V-W Schaltkreis - hoch |
| 0x0C08 | P0C08 | P0C08 Antriebsmotor 2 Phase U-V-W Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C09 | P0C09 | P0C09 Antriebsmotor 2 Phase U-V-W Schaltkreis - niedrig |
| 0x0C0A | P0C0A | P0C0A Antriebsmotor 2 Phase U-V-W Schaltkreis - hoch |
| 0x0C0B | P0C0B | P0C0B Antriebsmotor 1 Inverter Spannungsversorgungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C0C | P0C0C | P0C0C Antriebsmotor 1 Inverter Spannungsversorgungsschaltkreis - niedrig |
| 0x0C0D | P0C0D | P0C0D Antriebsmotor 1 Inverter Spannungsversorgungsschaltkreis - hoch |
| 0x0C0E | P0C0E | P0C0E Antriebsmotor 2 Inverter Spannungsversorgungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C0F | P0C0F | P0C0F Antriebsmotor 2 Inverter Spannungsversorgungsschaltkreis - niedrig |
| 0x0C10 | P0C10 | P0C10 Antriebsmotor 2 Inverter Spannungsversorgungsschaltkreis - hoch |
| 0x0C11 | P0C11 | P0C11 Antriebsmotor 1 Inverter Phase U - Übertemperatur |
| 0x0C12 | P0C12 | P0C12 Antriebsmotor 1 Inverter Phase V - Übertemperatur |
| 0x0C13 | P0C13 | P0C13 Antriebsmotor 1 Inverter Phase W - Übertemperatur |
| 0x0C14 | P0C14 | P0C14 Antriebsmotor 2 Inverter Phase U - Übertemperatur |
| 0x0C15 | P0C15 | P0C15 Antriebsmotor 2 Inverter Phase V - Übertemperatur |
| 0x0C16 | P0C16 | P0C16 Antriebsmotor 2 Inverter Phase W - Übertemperatur |
| 0x0C17 | P0C17 | P0C17 Antriebsmotor 1 Positionssensor - nicht gelernt |
| 0x0C18 | P0C18 | P0C18 Antriebsmotor 2 Positionssensor - nicht gelernt |
| 0x0C19 | P0C19 | P0C19 Antriebsmotor 1 Drehmoment gelieferte Leistung - Fehlfunktion |
| 0x0C1A | P0C1A | P0C1A Antriebsmotor 2 Drehmoment gelieferte Leistung - Fehlfunktion |
| 0x0C1B | P0C1B | P0C1B Getriebeöl-Zusatzpumpe Steuergerät - interne Temperatur zu hoch |
| 0x0C1C | P0C1C | P0C1C Getriebeöl-Zusatzpumpe Steuergerät interner Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C1D | P0C1D | P0C1D Getriebeöl-Zusatzpumpe Steuergerät interner Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C1E | P0C1E | P0C1E Getriebeöl-Zusatzpumpe Steuergerät interner Temperaturfühler Schaltkreis - niedrig |
| 0x0C1F | P0C1F | P0C1F Getriebeöl-Zusatzpumpe Steuergerät interner Temperaturfühler Schaltkreis - hoch |
| 0x0C20 | P0C20 | P0C20 Getriebeöl-Zusatzpumpe Phase U-V-W-Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C21 | P0C21 | P0C21 Getriebeöl-Zusatzpumpe Phase U-V-W-Schaltkreis - niedrig |
| 0x0C22 | P0C22 | P0C22 Getriebeöl-Zusatzpumpe Phase U-V-W-Schaltkreis - hoch |
| 0x0C23 | P0C23 | P0C23 Getriebeöl-Zusatzpumpe Steuergerät Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C24 | P0C24 | P0C24 Getriebeöl-Zusatzpumpe Steuergerät Schaltkreis - niedrig |
| 0x0C25 | P0C25 | P0C25 Getriebeöl-Zusatzpumpe Steuergerät Schaltkreis - hoch |
| 0x0C26 | P0C26 | P0C26 Getriebeöl-Zusatzpumpenmotor Strom - Fehlfunktion |
| 0x0C27 | P0C27 | P0C27 Getriebeöl-Zusatzpumpenmotor Strom - niedrig |
| 0x0C28 | P0C28 | P0C28 Getriebeöl-Zusatzpumpenmotor Strom - hoch |
| 0x0C29 | P0C29 | P0C29 Getriebeöl-Zusatzpumpe Treiber Schaltkreis - Leistungsproblem |
| 0x0C2A | P0C2A | P0C2A Getriebeöl-Zusatzpumpenmotor - ausgegangen |
| 0x0C2B | P0C2B | P0C2B Getriebeöl-Zusatzpumpe Steuergerät Rückkopplungssignal - Fehlfunktion |
| 0x0C2C | P0C2C | P0C2C Getriebeöl-Zusatzpumpe Steuergerät Rückkopplungssignal - Messbereichs- oder Leistungsproblem |
| 0x0C2D | P0C2D | P0C2D Getriebeöl-Zusatzpumpe Steuergerät Rückkopplungssignal - niedrig |
| 0x0C2E | P0C2E | P0C2E Getriebeöl-Zusatzpumpe Steuergerät Rückkopplungssignal - hoch |
| 0x0C2F | P0C2F | P0C2F Steuergerät Antriebsmotor/Generator - internes Leistungsproblem Motordrehzahlsensor |
| 0x0C30 | P0C30 | P0C30 Hybridbatteriesatz - Ladezustand hoch |
| 0x0C31 | P0C31 | P0C31 Inverter 2 Kühlsystem - Leistungsproblem |
| 0x0C32 | P0C32 | P0C32 Hybridbatterie Kühlsystem - Leistungsproblem |
| 0x0C33 | P0C33 | P0C33 Hybridbatterie Temperaturfühler 6 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C34 | P0C34 | P0C34 Hybridbatterie Temperaturfühler 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C35 | P0C35 | P0C35 Hybridbatterie Temperaturfühler 6 Schaltkreis - niedrig |
| 0x0C36 | P0C36 | P0C36 Hybridbatterie Temperaturfühler 6 Schaltkreis - hoch |
| 0x0C37 | P0C37 | P0C37 Hybridbatterie Temperaturfühler 6 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C38 | P0C38 | P0C38 DC/DC Wandler Temperaturfühler 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C39 | P0C39 | P0C39 DC/DC Wandler Temperaturfühler 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C3A | P0C3A | P0C3A DC/DC Wandler Temperaturfühler 1 Schaltkreis - niedrig |
| 0x0C3B | P0C3B | P0C3B DC/DC Wandler Temperaturfühler 1 Schaltkreis - hoch |
| 0x0C3C | P0C3C | P0C3C DC/DC Wandler Temperaturfühler 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C3D | P0C3D | P0C3D DC/DC Wandler Temperaturfühler 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C3E | P0C3E | P0C3E DC/DC Wandler Temperaturfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C3F | P0C3F | P0C3F DC/DC Wandler Temperaturfühler 2 Schaltkreis - niedrig |
| 0x0C40 | P0C40 | P0C40 DC/DC Wandler Temperaturfühler 2 Schaltkreis - hoch |
| 0x0C41 | P0C41 | P0C41 DC/DC Wandler Temperaturfühler 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C42 | P0C42 | P0C42 Hybridbatteriesatz Kühlmitteltemperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C43 | P0C43 | P0C43 Hybridbatteriesatz Kühlmitteltemperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C44 | P0C44 | P0C44 Hybridbatteriesatz Kühlmitteltemperaturfühler Schaltkreis - niedrig |
| 0x0C45 | P0C45 | P0C45 Hybridbatteriesatz Kühlmitteltemperaturfühler Schaltkreis - hoch |
| 0x0C46 | P0C46 | P0C46 Hybridbatteriesatz Kühlmitteltemperaturfühler Schaltkreis - sporadisch/unregelmäßig |
| 0x0C47 | P0C47 | P0C47 Hybridbatteriesatz Kühlmittelpumpe Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C48 | P0C48 | P0C48 Hybridbatteriesatz Kühlmittelpumpe Steuerkreis - niedrig |
| 0x0C49 | P0C49 | P0C49 Hybridbatteriesatz Kühlmittelpumpe Steuerkreis - hoch |
| 0x0C4A | P0C4A | P0C4A Hybridbatteriesatz Kühlmittelpumpe Steuerkreis - Leistungsproblem |
| 0x0C4B | P0C4B | P0C4B Hybridbatteriesatz Kühlmittelpumpe Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C4C | P0C4C | P0C4C Hybridbatteriesatz Kühlmittelpumpe Versorgungsspannungskreis - niedrig |
| 0x0C4D | P0C4D | P0C4D Hybridbatteriesatz Kühlmittelpumpe Versorgungsspannungskreis - hoch |
| 0x0C4E | P0C4E | P0C4E Antriebsmotor 1 Position - gelernter Adaptionswert überschritten |
| 0x0C4F | P0C4F | P0C4F Antriebsmotor 2 Position - gelernter Adaptionswert überschritten |
| 0x0C50 | P0C50 | P0C50 Antriebsmotor 1 Positionssensor Schaltkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C51 | P0C51 | P0C51 Antriebsmotor 1 Positionssensor Schaltkreis 1 - Messbereichs- oder Leistungsproblem |
| 0x0C52 | P0C52 | P0C52 Antriebsmotor 1 Positionssensor Schaltkreis 1 - niedrig |
| 0x0C53 | P0C53 | P0C53 Antriebsmotor 1 Positionssensor Schaltkreis 1 - hoch |
| 0x0C54 | P0C54 | P0C54 Antriebsmotor 1 Positionssensor Schaltkreis 1 - sporadisch/unregelmäßig |
| 0x0C55 | P0C55 | P0C55 Antriebsmotor 2 Positionssensor Schaltkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C56 | P0C56 | P0C56 Antriebsmotor 2 Positionssensor Schaltkreis 1 - Messbereichs- oder Leistungsproblem |
| 0x0C57 | P0C57 | P0C57 Antriebsmotor 2 Positionssensor Schaltkreis 1 - niedrig |
| 0x0C58 | P0C58 | P0C58 Antriebsmotor 2 Positionssensor Schaltkreis 1 - hoch |
| 0x0C59 | P0C59 | P0C59 Antriebsmotor 2 Positionssensor Schaltkreis 1 - sporadisch/unregelmäßig |
| 0x0C5A | P0C5A | P0C5A Antriebsmotor 1 Positionssensor Schaltkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C5B | P0C5B | P0C5B Antriebsmotor 1 Positionssensor Schaltkreis 2 - Messbereichs- oder Leistungsproblem |
| 0x0C5C | P0C5C | P0C5C Antriebsmotor 1 Positionssensor Schaltkreis 2 - niedrig |
| 0x0C5D | P0C5D | P0C5D Antriebsmotor 1 Positionssensor Schaltkreis 2 - hoch |
| 0x0C5E | P0C5E | P0C5E Antriebsmotor 1 Positionssensor Schaltkreis 2 - sporadisch/unregelmäßig |
| 0x0C5F | P0C5F | P0C5F Antriebsmotor 2 Positionssensor Schaltkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C60 | P0C60 | P0C60 Antriebsmotor 2 Positionssensor Schaltkreis 2 - Messbereichs- oder Leistungsproblem |
| 0x0C61 | P0C61 | P0C61 Antriebsmotor 2 Positionssensor Schaltkreis 2 - niedrig |
| 0x0C62 | P0C62 | P0C62 Antriebsmotor 2 Positionssensor Schaltkreis 2 - hoch |
| 0x0C63 | P0C63 | P0C63 Antriebsmotor 2 Positionssensor Schaltkreis 2 - sporadisch/unregelmäßig |
| 0x0C64 | P0C64 | P0C64 Generator Positionssensor Schaltkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C65 | P0C65 | P0C65 Generator Positionssensor Schaltkreis 1 - Messbereichs- oder Leistungsproblem |
| 0x0C66 | P0C66 | P0C66 Generator Positionssensor Schaltkreis 1 - niedrig |
| 0x0C67 | P0C67 | P0C67 Generator Positionssensor Schaltkreis 1 - hoch |
| 0x0C68 | P0C68 | P0C68 Generator Positionssensor Schaltkreis 1 - sporadisch/unregelmäßig |
| 0x0C69 | P0C69 | P0C69 Generator Positionssensor Schaltkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C6A | P0C6A | P0C6A Generator Positionssensor Schaltkreis 2 - Messbereichs- oder Leistungsproblem |
| 0x0C6B | P0C6B | P0C6B Generator Positionssensor Schaltkreis 2 - niedrig |
| 0x0C6C | P0C6C | P0C6C Generator Positionssensor Schaltkreis 2 - hoch |
| 0x0C6D | P0C6D | P0C6D Generator Positionssensor Schaltkreis 2 - sporadisch/unregelmäßig |
| 0x0C6E | P0C6E | P0C6E Hybridbatterie Temperaturfühler 1/2 - Korrelationsfehler |
| 0x0C6F | P0C6F | P0C6F Hybridbatterie Temperaturfühler 2/3 - Korrelationsfehler |
| 0x0C70 | P0C70 | P0C70 Hybridbatterie Temperaturfühler 3/4 - Korrelationsfehler |
| 0x0C71 | P0C71 | P0C71 Hybridbatterie Temperaturfühler 4/5 - Korrelationsfehler |
| 0x0C72 | P0C72 | P0C72 Hybridbatterie Temperaturfühler 5/6 - Korrelationsfehler |
| 0x0C73 | P0C73 | P0C73 Motorelektronik Kühlmittelpumpe 1 - Leistungsproblem |
| 0x0C74 | P0C74 | P0C74 Motorelektronik Kühlmittelpumpe 2 - Leistungsproblem |
| 0x0C75 | P0C75 | P0C75 Hybridbatterie - System-Entladezeit zu kurz |
| 0x0C76 | P0C76 | P0C76 Hybridbatterie - System-Entladezeit zu lang |
| 0x0C77 | P0C77 | P0C77 Hybridbatterie - System-Vorbelastungszeit zu kurz |
| 0x0C78 | P0C78 | P0C78 Hybridbatterie - System-Vorbelastungszeit zu lang |
| 0x0C79 | P0C79 | P0C79 Antriebsmotor 1 Inverter - Spannung zu hoch |
| 0x0C7A | P0C7A | P0C7A Antriebsmotor 2 Inverter - Spannung zu hoch |
| 0x0C7B | P0C7B | P0C7B Generator Inverter - Spannung zu hoch |
| 0x0C7C | P0C7C | P0C7C Hybridbatterie Temperaturfühler 7 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C7D | P0C7D | P0C7D Hybridbatterie Temperaturfühler 7 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C7E | P0C7E | P0C7E Hybridbatterie Temperaturfühler 7 Schaltkreis - niedrig |
| 0x0C7F | P0C7F | P0C7F Hybridbatterie Temperaturfühler 7 Schaltkreis - hoch |
| 0x0C80 | P0C80 | P0C80 Hybridbatterie Temperaturfühler 7 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C81 | P0C81 | P0C81 Hybridbatterie Temperaturfühler 8 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C82 | P0C82 | P0C82 Hybridbatterie Temperaturfühler 8 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C83 | P0C83 | P0C83 Hybridbatterie Temperaturfühler 8 Schaltkreis - niedrig |
| 0x0C84 | P0C84 | P0C84 Hybridbatterie Temperaturfühler 8 Schaltkreis - hoch |
| 0x0C85 | P0C85 | P0C85 Hybridbatterie Temperaturfühler 8 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C86 | P0C86 | P0C86 Hybridbatterie Temperaturfühler 6/7 - Korrelationsfehler |
| 0x0C87 | P0C87 | P0C87 Hybridbatterie Temperaturfühler 7/8 - Korrelationsfehler |
| 0x0C88 | P0C88 | P0C88 Hybridbatterie Temperaturfühler 9 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C89 | P0C89 | P0C89 Hybridbatterie Temperaturfühler 9 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C8A | P0C8A | P0C8A Hybridbatterie Temperaturfühler 9 Schaltkreis - niedrig |
| 0x0C8B | P0C8B | P0C8B Hybridbatterie Temperaturfühler 9 Schaltkreis - hoch |
| 0x0C8C | P0C8C | P0C8C Hybridbatterie Temperaturfühler 9 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C8D | P0C8D | P0C8D Hybridbatterie Temperaturfühler 10 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C8E | P0C8E | P0C8E Hybridbatterie Temperaturfühler 10 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C8F | P0C8F | P0C8F Hybridbatterie Temperaturfühler 10 Schaltkreis - niedrig |
| 0x0C90 | P0C90 | P0C90 Hybridbatterie Temperaturfühler 10 Schaltkreis - hoch |
| 0x0C91 | P0C91 | P0C91 Hybridbatterie Temperaturfühler 10 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C92 | P0C92 | P0C92 Hybridbatterie Temperaturfühler 11 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C93 | P0C93 | P0C93 Hybridbatterie Temperaturfühler 11 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C94 | P0C94 | P0C94 Hybridbatterie Temperaturfühler 11 Schaltkreis - niedrig |
| 0x0C95 | P0C95 | P0C95 Hybridbatterie Temperaturfühler 11 Schaltkreis - hoch |
| 0x0C96 | P0C96 | P0C96 Hybridbatterie Temperaturfühler 11 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C97 | P0C97 | P0C97 Hybridbatterie Temperaturfühler 12 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C98 | P0C98 | P0C98 Hybridbatterie Temperaturfühler 12 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C99 | P0C99 | P0C99 Hybridbatterie Temperaturfühler 12 Schaltkreis - niedrig |
| 0x0C9A | P0C9A | P0C9A Hybridbatterie Temperaturfühler 12 Schaltkreis - hoch |
| 0x0C9B | P0C9B | P0C9B Hybridbatterie Temperaturfühler 12 Schaltkreis - sporadisch/unregelmäßig |
| 0x0C9C | P0C9C | P0C9C 14 Volt Powermodul Stromsensor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0C9D | P0C9D | P0C9D 14 Volt Powermodul Stromsensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x0C9E | P0C9E | P0C9E 14 Volt Powermodul Stromsensor 2 Schaltkreis - niedrig |
| 0x0C9F | P0C9F | P0C9F 14 Volt Powermodul Stromsensor 2 Schaltkreis - hoch |
| 0x0CA0 | P0CA0 | P0CA0 14 Volt Powermodul Stromsensor 2 Schaltkreis - sporadisch |
| 0x0CA1 | P0CA1 | P0CA1 Antriebsmotor-Steuergerät Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion |
| 0x0CA2 | P0CA2 | P0CA2 DC/DC Wandler Spannungswandlung Hochvolt nach 14V - Leistungsproblem |
| 0x0CA3 | P0CA3 | P0CA3 DC/DC Wandler Spannungswandlung 14V nach Hochvolt - Leistungsproblem |
| 0x1000 | P1000 | P1000 VVT-System Minhubadaption - Anschlaganzahl überschritten |
| 0x1001 | P1001 | P1001 VVT-Notlaufanforderung Schaltkreis - hoch |
| 0x1002 | P1002 | P1002 VVT-Notlaufanforderung Schaltkreis - niedrig |
| 0x1003 | P1003 | P1003 VVT-Notlaufanforderung Schaltkreis - Leitungsunterbrechung |
| 0x1004 | P1004 | P1004 VVT-Führungssensor (Bank 1) - Magnetverlust |
| 0x1005 | P1005 | P1005 VVT-Führungssensor (Bank 1) - Resetfehler |
| 0x1006 | P1006 | P1006 VVT-Führungssensor (Bank 1) - Parityfehler |
| 0x1007 | P1007 | P1007 VVT-Führungssensor (Bank 1) - Gradientenfehler |
| 0x1008 | P1008 | P1008 VVT-Führungssensor (Bank 2) - Magnetverlust |
| 0x1009 | P1009 | P1009 VVT-Führungssensor (Bank 2) - Resetfehler |
| 0x100A | P100A | P100A Kraftstoffeinspritzleiste/-system (Bank 2) - Druck zu niedrig |
| 0x100B | P100B | P100B Kraftstoffeinspritzleiste/-system (Bank 2) - Druck zu hoch |
| 0x100C | P100C | P100C VVT-Notlaufanforderung (Bank 2) - Drehzahl- und Füllungsbegrenzung |
| 0x100D | P100D | P100D VVT-Notlaufanforderung (Bank 2) - Vollhubposition nicht erreicht |
| 0x100E | P100E | P100E VVT-Notlaufanforderung (Bank 2) - Luftmassen-Plausibilitätsfehler |
| 0x100F | P100F | P100F VVT-Überlastschutz Stellmotorstrom - Plausibilitätsfehler |
| 0x1010 | P1010 | P1010 VVT-Führungssensor (Bank 2) - Parityfehler |
| 0x1011 | P1011 | P1011 VVT-Führungssensor (Bank 2) - Gradientenfehler |
| 0x1012 | P1012 | P1012 VVT-Referenzsensor (Bank 1) - Magnetverlust |
| 0x1013 | P1013 | P1013 VVT-Referenzsensor (Bank 1) - Resetfehler |
| 0x1014 | P1014 | P1014 VVT-Referenzsensor (Bank 1) - Parityfehler |
| 0x1015 | P1015 | P1015 VVT-Referenzsensor (Bank 1) - Gradientenfehler |
| 0x1016 | P1016 | P1016 Kraftstoffvolumenregelung (Bank 1) - Plausibilitätsfehler |
| 0x1017 | P1017 | P1017 VVT-Sensoren (Bank 1) - Plausibilitätsfehler |
| 0x1018 | P1018 | P1018 VVT-Sensoren (Bank 2) - Plausibilitätsfehler |
| 0x1019 | P1019 | P1019 VVT-Versorgungsspannungsschaltkreis Sensoren (Bank 1) - hoch |
| 0x101A | P101A | P101A VVT-Lernfunktion - keine Anschläge gelernt |
| 0x101B | P101B | P101B VVT-Lernfunktion - Speicherung Lernwerte im EEPROM nicht möglich |
| 0x101C | P101C | P101C VVT-Entlastungsrelais Steuerkreis - hoch |
| 0x101D | P101D | P101D VVT-Entlastungsrelais Steuerkreis - niedrig |
| 0x101E | P101E | P101E VVT-Entlastungsrelais Steuerkreis - Fehlfunktion oder Leistungsunterbrechung |
| 0x101F | P101F | P101F Umgebungstemperatur / Ansauglufttemperatur - Korrelationsfehler |
| 0x1020 | P1020 | P1020 VVT-Versorgungsspannungsschaltkreis Sensoren (Bank 1) - niedrig |
| 0x1021 | P1021 | P1021 VVT-Versorgungsspannungsschaltkreis Sensoren (Bank 2) - hoch |
| 0x1022 | P1022 | P1022 VVT-Versorgungsspannungsschaltkreis Sensoren (Bank 2) - niedrig |
| 0x1023 | P1023 | P1023 VVT-Lernfunktion (Bank 1) - Verstellbereich fehlerhaft |
| 0x1024 | P1024 | P1024 VVT-Lernfunktion (Bank 1) - unteres Lernfenster im unzulässigen Bereich |
| 0x1025 | P1025 | P1025 VVT-Lernfunktion (Bank 1) - keine Positionen gespeichert |
| 0x1026 | P1026 | P1026 VVT-Lernfunktion (Bank 2) - Verstellbereich fehlerhaft |
| 0x1027 | P1027 | P1027 VVT-Lernfunktion (Bank 2) - unteres Lernfenster im unzulässigen Bereich |
| 0x1028 | P1028 | P1028 VVT-Lernfunktion (Bank 2) - keine Positionen gespeichert |
| 0x1029 | P1029 | P1029 VVT-Stellgliedüberwachung Stellmotortemperatur (Bank 1) - hoch |
| 0x102A | P102A | P102A VVT-Stellgliedüberwachung Hubverstellung - Plausibilitätsfehler |
| 0x102B | P102B | P102B VVT-Führungssensor (Bank 1) - Diagnosefehler |
| 0x102C | P102C | P102C VVT-Referenzsensor (Bank 1) - Diagnosefehler |
| 0x102D | P102D | P102D Nockenwellensteuerung - Systemdruck zu niedrig |
| 0x102E | P102E | P102E Kraftstoffeinspritzleiste/-system (Bank 1) - Druckschwingungen |
| 0x102F | P102F | P102F Kraftstoffeinspritzleiste/-system (Bank 2) - Druckschwingungen |
| 0x1030 | P1030 | P1030 VVT-Stellglied Lagereglerüberwachung (Bank 1) - Regeldifferenz |
| 0x1031 | P1031 | P1031 VVT-Stellgliedüberwachung Drehrichtungserkennung (Bank 1) - Plausibilitätsfehler |
| 0x1032 | P1032 | P1032 Kraftstoffvolumenregelung (Bank 2) - Plausibilitätsfehler |
| 0x1033 | P1033 | P1033 VVT-Stellglied Lagereglerüberwachung (Bank 2) - Regeldifferenz |
| 0x1034 | P1034 | P1034 VVT-Stellgliedüberwachung Drehrichtungserkennung (Bank 2) - Plausibilitätsfehler |
| 0x1035 | P1035 | P1035 VVT-CAN-Botschaftsüberwachung (Bank 1) - Sollwertbotschaft fehlerhaft |
| 0x1036 | P1036 | P1036 VVT-CAN-Timeout (Bank 1) - VVT-Sollwertbotschaft |
| 0x1037 | P1037 | P1037 VVT-CAN-Timeout (Bank 1) - VVT-Botschaft |
| 0x1038 | P1038 | P1038 VVT-CAN-Botschaftsüberwachung (Bank 2) - Sollwertbotschaft fehlerhaft |
| 0x1039 | P1039 | P1039 VVT-CAN-Timeout (Bank 2) - VVT-Sollwertbotschaft |
| 0x103A | P103A | P103A VVT-System - Strom zu hoch |
| 0x103B | P103B | P103B VVT-System - Strombegrenzung |
| 0x103C | P103C | P103C Nockenwellenversteller Einlass (Bank 1) - Übertemperatur |
| 0x103D | P103D | P103D Nockenwellenversteller Einlass (Bank 2) - Übertemperatur |
| 0x103E | P103E | P103E Nockenwellenversteller Auslass (Bank 1) - Übertemperatur |
| 0x103F | P103F | P103F Nockenwellenversteller Auslass (Bank 2) - Übertemperatur |
| 0x1040 | P1040 | P1040 VVT-CAN-Timeout (Bank 2) - VVT-Botschaft |
| 0x1041 | P1041 | P1041 VVT-Steuergerät (Bank 1) - interner EEPROM Fehler |
| 0x1042 | P1042 | P1042 VVT-Steuergerät (Bank 1) - interner 'Random Access Memory' (RAM) Fehler |
| 0x1043 | P1043 | P1043 VVT-Steuergerät (Bank 1) - interner 'Read Only Memory' (ROM) Fehler |
| 0x1044 | P1044 | P1044 VVT-Steuergerät (Bank 2) - interner EEPROM-Fehler |
| 0x1045 | P1045 | P1045 VVT-Steuergerät (Bank 2) - interner 'Random Access Memory' (RAM) Fehler |
| 0x1046 | P1046 | P1046 VVT-Steuergerät (Bank 2) - interner 'Read Only Memory' (ROM) Fehler |
| 0x1047 | P1047 | P1047 VVT-Ansteuerung (Bank 1) - hoch |
| 0x1048 | P1048 | P1048 VVT-Ansteuerung (Bank 1) - niedrig |
| 0x1049 | P1049 | P1049 VVT-Ansteuerung Motorleitungen Schaltkreis (Bank 1) - Kurzschluss |
| 0x104A | P104A | P104A Nockenwellensteuerung Druckspeicherabsperrventil Steuerkreis - niedrig |
| 0x104B | P104B | P104B Nockenwellensteuerung Druckspeicherabsperrventil Steuerkreis - hoch |
| 0x104C | P104C | P104C Nockenwellensteuerung Druckspeicherabsperrventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x104D | P104D | P104D Nockenwellensteuerung Druckspeicherabsperrventil Steuerkreis - Übertemperatur |
| 0x104E | P104E | P104E Turbolader Ansauglufttemperaturfühler 1 Schaltkreis - hoch oder Leitungsunterbrechung |
| 0x104F | P104F | P104F Turbolader Ansauglufttemperaturfühler 1 Schaltkreis - niedrig |
| 0x1050 | P1050 | P1050 VVT-Ansteuerung (Bank 1) - Fehlfunktion |
| 0x1051 | P1051 | P1051 VVT-Ansteuerung (Bank 2) - hoch |
| 0x1052 | P1052 | P1052 VVT-Ansteuerung (Bank 2) - niedrig |
| 0x1053 | P1053 | P1053 VVT-Ansteuerung Motorleitungen Schaltkreis (Bank 2) - Kurzschluss |
| 0x1054 | P1054 | P1054 VVT-Ansteuerung (Bank 2) - Fehlfunktion |
| 0x1055 | P1055 | P1055 VVT-Versorgungsspannung Stellmotor Schaltkreis (Bank 1) - hoch |
| 0x1056 | P1056 | P1056 VVT-Versorgungsspannung Stellmotor Schaltkreis (Bank 1) - niedrig |
| 0x1057 | P1057 | P1057 VVT-Versorgungsspannung Stellmotor Schaltkreis (Bank 1) - elektrischer Fehler |
| 0x1058 | P1058 | P1058 VVT-Versorgungsspannung Stellmotor Schaltkreis (Bank 2) - hoch |
| 0x1059 | P1059 | P1059 VVT-Versorgungsspannung Stellmotor Schaltkreis (Bank 2) - niedrig |
| 0x105A | P105A | P105A Steuergerät - interner Fehler VVT, Strom zu hoch |
| 0x105B | P105B | P105B Steuergerät - interner Fehler VVT, Spannung zu niedrig |
| 0x105C | P105C | P105C VVT-Stellmotor - schwergängig |
| 0x105D | P105D | P105D Kaltstart Ansauglufttemperatur - zu niedrig |
| 0x105E | P105E | P105E H2-Railtemperatur - zu hoch |
| 0x105F | P105F | P105F H2-Railtemperatur - zu niedrig |
| 0x1060 | P1060 | P1060 VVT-Versorgungsspannung Stellmotor Schaltkreis (Bank 2) - elektrischer Fehler |
| 0x1061 | P1061 | P1061 VVT-Notlaufanforderung (Bank 1) - Drehzahl- und Füllungsbegrenzung |
| 0x1062 | P1062 | P1062 VVT-Notlaufanforderung (Bank 1) - Vollhubposition nicht erreicht |
| 0x1063 | P1063 | P1063 VVT-Notlaufanforderung (Bank 1) - Luftmassen-Plausibilitätsfehler |
| 0x1064 | P1064 | P1064 VVT-Wertevergleich Abstellposition/Startposition (Bank 1) - Plausibilitätsfehler |
| 0x1065 | P1065 | P1065 VVT-CAN-Timeout - kein Signal |
| 0x1066 | P1066 | P1066 VVT-CAN-Botschaftsüberwachung - Istwert fehlerhaft |
| 0x1067 | P1067 | P1067 VVT-Referenzsensor (Bank 2) - Magnetverlust |
| 0x1068 | P1068 | P1068 VVT-Referenzsensor (Bank 2) - Resetfehler |
| 0x1069 | P1069 | P1069 VVT-Referenzsensor (Bank 2) - Parityfehler |
| 0x106A | P106A | P106A H2-Railtemperaturfühler Schaltkreis (Bank 1) - niedrig |
| 0x106B | P106B | P106B H2-Railtemperaturfühler Schaltkreis (Bank 1) - hoch |
| 0x106C | P106C | P106C H2-Railtemperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x106D | P106D | P106D H2-Raildruck - zu hoch |
| 0x106E | P106E | P106E H2-Raildruck - zu niedrig |
| 0x106F | P106F | P106F H2-Raildrucksensor Schaltkreis (Bank 1) - niedrig |
| 0x1070 | P1070 | P1070 VVT Referenzsensor (Bank 2) - Gradientenfehler |
| 0x1071 | P1071 | P1071 VVT-Steuergerät (Bank 1) - interner Watchdog oder Temperaturfühlerfehler |
| 0x1072 | P1072 | P1072 VVT-Steuergerät (Bank 2) - interner Watchdog oder Temperaturfühlerfehler |
| 0x1073 | P1073 | P1073 VVT-Sensoren (Bank 1) - Datenkonformität |
| 0x1074 | P1074 | P1074 VVT-Sensoren (Bank 2) - Datenkonformität |
| 0x1075 | P1075 | P1075 VVT-Überlastschutz (Bank 1) - Fehlfunktion |
| 0x1076 | P1076 | P1076 VVT-Überlastschutz SG-Temperatur (Bank 1) - hoch |
| 0x1077 | P1077 | P1077 VVT-Überlastschutz Stellmotortemperatur (Bank 1) - hoch |
| 0x1078 | P1078 | P1078 VVT-Überlastschutz Stellmotorstrom Schaltkreis (Bank 1) - hoch |
| 0x1079 | P1079 | P1079 VVT-Überlastschutz (Bank 2) - Fehlfunktion |
| 0x107A | P107A | P107A VVT-Überlastschutz Stellmotor - Strom zu hoch |
| 0x107B | P107B | P107B VVT-Überlastschutz Stellmotor - Temperatur zu hoch |
| 0x107C | P107C | P107C VVT-Überlastschutz - Temperatur zu hoch |
| 0x107D | P107D | P107D H2-Raildrucksensor Schaltkreis (Bank 1) - hoch |
| 0x107E | P107E | P107E H2-Raildrucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x107F | P107F | P107F H2-Raildruckregler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x1080 | P1080 | P1080 VVT-Überlastschutz SG-Temperatur (Bank 2) - hoch |
| 0x1081 | P1081 | P1081 VVT-Überlastschutz Stellmotortemperatur (Bank 2) - hoch |
| 0x1082 | P1082 | P1082 VVT-Überlastschutz Stellmotorstrom Schaltkreis (Bank 2) - hoch |
| 0x1083 | P1083 | P1083 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - System zu mager |
| 0x1084 | P1084 | P1084 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - System zu fett |
| 0x1085 | P1085 | P1085 Gemischaufbereitung am Regelanschlag (Bank 2, vor Katalysator) - System zu mager |
| 0x1086 | P1086 | P1086 Gemischaufbereitung am Regelanschlag (Bank 2, vor Katalysator) - System zu fett |
| 0x1087 | P1087 | P1087 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion im Magerbereich der Regelschwingung |
| 0x1088 | P1088 | P1088 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion im Fettbereich der Regelschwingung |
| 0x1089 | P1089 | P1089 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion im Magerbereich der Regelschwingung |
| 0x108A | P108A | P108A H2-Raildruckregler Schaltkreis - niedrig |
| 0x108B | P108B | P108B H2-Raildruckregler Schaltkreis - hoch |
| 0x108C | P108C | P108C H2-Raildruckregelung - Regelabweichung zu groß |
| 0x108D | P108D | P108D H2-Raildruckregelung - Regelabweichung zu niedrig |
| 0x108E | P108E | P108E Leerlaufregelsystem im H2-Betrieb - Drehzahl niedriger als erwartet |
| 0x108F | P108F | P108F Leerlaufregelsystem im H2-Betrieb - Drehzahl höher als erwartet |
| 0x1090 | P1090 | P1090 Gemischregelung (Bank 1, vor Katalysator) - System zu mager |
| 0x1091 | P1091 | P1091 Gemischregelung (Bank 2, vor Katalysator) - System zu mager |
| 0x1092 | P1092 | P1092 Gemischregelung (Bank 1, vor Katalysator) - System zu fett |
| 0x1093 | P1093 | P1093 Gemischregelung (Bank 2, vor Katalysator) - System zu fett |
| 0x1094 | P1094 | P1094 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion im Fettbereich der Regelschwingung |
| 0x1095 | P1095 | P1095 Lambdasonde Signalschaltkreis (Bank 1, vor Katalysator) - Sprungzeit mager nach fett und fett nach Mager langsame Reaktion |
| 0x1096 | P1096 | P1096 Lambdasonde Signalschaltkreis (Bank 2, vor Katalysator) - Sprungzeit mager nach fett und fett nach mager langsame Reaktion |
| 0x1097 | P1097 | P1097 Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1098 | P1098 | P1098 Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1099 | P1099 | P1099 VVT-Wertevergleich Abstellposition/Startposition (Bank 2) - Plausibilitätsfehler |
| 0x109A | P109A | P109A H2-Railtemperaturfühler Schaltkreis (Bank 2) - niedrig |
| 0x109B | P109B | P109B H2-Railtemperaturfühler Schaltkreis (Bank 2) - hoch |
| 0x109C | P109C | P109C H2-Raildrucksensor Schaltkreis (Bank 2) - niedrig |
| 0x109D | P109D | P109D H2-Raildrucksensor Schaltkreis (Bank 2) - hoch |
| 0x109E | P109E | P109E Gemischregelung im H2-Betrieb (Bank 1) - System zu fett |
| 0x109F | P109F | P109F Gemischregelung im H2-Betrieb (Bank 2) - System zu fett |
| 0x10A0 | P10A0 | P10A0 H2-Raildrucksensor Versorgungsspannungskreis (Bank 1) - Fehlfunktion |
| 0x10A1 | P10A1 | P10A1 H2-Raildrucksensor Versorgungsspannungskreis (Bank 2) - Fehlfunktion |
| 0x10A2 | P10A2 | P10A2 Turbolader/Verdichter Bypassventil 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x10A3 | P10A3 | P10A3 Turbolader/Verdichter Bypassventil 2 Steuerkreis - niedrig |
| 0x10A4 | P10A4 | P10A4 Turbolader/Verdichter Bypassventil 2 Steuerkreis - hoch |
| 0x10A5 | P10A5 | P10A5 Einspritzventile (Gruppe 1) - Initialisierungsfehler |
| 0x10A6 | P10A6 | P10A6 Einspritzventile Schaltkreis (Gruppe 1) - Leitungsunterbrechung |
| 0x10A7 | P10A7 | P10A7 Einspritzventile (Gruppe 1) - Entladungsfehler |
| 0x10A8 | P10A8 | P10A8 Einspritzventile (Gruppe 2) - Initialisierungsfehler |
| 0x10A9 | P10A9 | P10A9 Einspritzventile Schaltkreis (Gruppe 2) - Leitungsunterbrechung |
| 0x10AA | P10AA | P10AA Einspritzventile (Gruppe 2) - Entladungsfehler |
| 0x10AB | P10AB | P10AB Reduktionsmittel-Füllstandssensor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x10AC | P10AC | P10AC Reduktionsmittel-Füllstandssensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x10AD | P10AD | P10AD Reduktionsmittel-Füllstandssensor 2 Schaltkreis - niedrig |
| 0x10AE | P10AE | P10AE Reduktionsmittel-Füllstandssensor 2 Schaltkreis - hoch |
| 0x10AF | P10AF | P10AF Einspritzventil Kodierung - Energie-Nominalwert unplausibel |
| 0x10B0 | P10B0 | P10B0 Ladeluftkühler Temperaturfühler (Bank 1) - Maximaltemperatur unplausibel |
| 0x10B1 | P10B1 | P10B1 Ladeluftkühler Temperaturfühler (Bank 1) - Minimaltemperatur unplausibel |
| 0x10B2 | P10B2 | P10B2 Ladeluftkühler Temperaturfühler (Bank 2) - Maximaltemperatur unplausibel |
| 0x10B3 | P10B3 | P10B3 Ladeluftkühler Temperaturfühler (Bank 2) - Minimaltemperatur unplausibel |
| 0x10B4 | P10B4 | P10B4 Ladeluftkühler Temperaturfühler (Bank 1) - Gradient zu hoch |
| 0x10B5 | P10B5 | P10B5 Ladeluftkühler Temperaturfühler (Bank 2) - Gradient zu hoch |
| 0x10B6 | P10B6 | P10B6 Ladeluftkühler Temperaturfühler (Bank 1) - Offset |
| 0x10B7 | P10B7 | P10B7 Ladeluftkühler Temperaturfühler (Bank 2) - Offset |
| 0x10B8 | P10B8 | P10B8 Ladeluftkühler Temperaturfühler (Bank 1) - Signal festliegend |
| 0x10B9 | P10B9 | P10B9 Ladeluftkühler Temperaturfühler (Bank 2) - Signal festliegend |
| 0x10BA | P10BA | P10BA Einspritzventile (Gruppe 3) - Initialisierungsfehler |
| 0x10BB | P10BB | P10BB Einspritzventile Schaltkreis (Gruppe 3) - Leitungsunterbrechung |
| 0x10BC | P10BC | P10BC Einspritzventile (Gruppe 3) - Entladungsfehler |
| 0x10BD | P10BD | P10BD Einspritzventile (Gruppe 4) - Initialisierungsfehler |
| 0x10BE | P10BE | P10BE Einspritzventile Schaltkreis (Gruppe 4) - Leitungsunterbrechung |
| 0x10BF | P10BF | P10BF Einspritzventile (Gruppe 4) - Entladungsfehler |
| 0x10C0 | P10C0 | P10C0 Einspritzventil Kodierung - Kleinmengen-Nominalwert unplausibel |
| 0x10C1 | P10C1 | P10C1 Kraftstoffvolumenregler Sicherheitsrelais Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x10C2 | P10C2 | P10C2 Kraftstoffvolumenregler Sicherheitsrelais Steuerkreis - niedrig |
| 0x10C3 | P10C3 | P10C3 Kraftstoffvolumenregler Sicherheitsrelais Steuerkreis - hoch |
| 0x10C4 | P10C4 | P10C4 Niederdruck-Kraftstoffsystem - Förderleistung außerhalb Gültigkeitsbereich |
| 0x10C5 | P10C5 | P10C5 Niederdruck-Kraftstoffsystem - Förderleistung außerhalb Gültigkeitsbereich wegen Alterung |
| 0x10C6 | P10C6 | P10C6 Niederdruck-Kraftstoffsystem - minimale Förderleistung außerhalb Gültigkeitsbereich wegen Alterung |
| 0x10C7 | P10C7 | P10C7 Luftmassen- oder Luftmengenmesser (Bank 1) - interner Fehler |
| 0x10C8 | P10C8 | P10C8 Luftmassen- oder Luftmengenmesser (Bank 2) - interner Fehler |
| 0x10C9 | P10C9 | P10C9 Kaltstart Ansauglufttemperatur - zu hoch |
| 0x10CA | P10CA | P10CA Reduktionsmittel Heizungs-Leistungsschalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x10CB | P10CB | P10CB Reduktionsmittel Heizungs-Leistungsschalter - Übertemperatur |
| 0x10CC | P10CC | P10CC Reduktionsmittel Heizungs-Leistungsschalter Schaltkreis - hoch |
| 0x10CD | P10CD | P10CD Reduktionsmittel Heizungs-Leistungsschalter Schaltkreis - niedrig |
| 0x10CE | P10CE | P10CE Kraftstoffeinspritzleiste Drucksensor 1 - Spannung zu hoch |
| 0x10CF | P10CF | P10CF Kraftstoffeinspritzleiste Drucksensor 1 - Spannung zu niedrig |
| 0x10D0 | P10D0 | P10D0 Kaltstart Ladelufttemperatur - zu hoch |
| 0x10D1 | P10D1 | P10D1 Kaltstart Ladelufttemperatur - zu niedrig |
| 0x10D2 | P10D2 | P10D2 Ladelufttemperatur - zu hoch |
| 0x10D3 | P10D3 | P10D3 Ladelufttemperatur - unplausibel |
| 0x10D4 | P10D4 | P10D4 Kaltstart Motorkühlmitteltemperatur - zu niedrig |
| 0x10D5 | P10D5 | P10D5 Kaltstart Motorkühlmitteltemperatur - zu hoch |
| 0x10D6 | P10D6 | P10D6 VVT-Relais Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x10D7 | P10D7 | P10D7 VVT-Relais Schaltkreis - niedrig |
| 0x10D8 | P10D8 | P10D8 VVT-Relais Schaltkreis - hoch |
| 0x10D9 | P10D9 | P10D9 Kraftstoffeinspritzleiste Drucksensor 1 - Signal festliegend |
| 0x10DA | P10DA | P10DA Reduktionsmittel Dosierleitung Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x10DB | P10DB | P10DB Reduktionsmittel Dosierleitung Heizungssteuerkreis - hoch |
| 0x1100 | P1100 | P1100 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion nach Schubabschaltphase  (S62: Luftmassenmesser Schaltkreis - hoch) |
| 0x1101 | P1101 | P1101 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1102 | P1102 | P1102 Leerlaufregelsystem - Nebenluft Massenstromadaption zu klein |
| 0x1103 | P1103 | P1103 Leerlaufregelsystem - Nebenluft Massenstromadaption zu groß |
| 0x1104 | P1104 | P1104 Differenzdrucksensor Saugrohr (Bank 1) - Druck zu niedrig |
| 0x1105 | P1105 | P1105 Differenzdrucksensor Saugrohr (Bank 1) - Druck zu hoch |
| 0x1106 | P1106 | P1106 Saugrohrdruck - zu niedrig bei stehendem Motor |
| 0x1107 | P1107 | P1107 Saugrohrdruck - zu niedrig im Leerlauf |
| 0x1108 | P1108 | P1108 Saugrohrdruck - zu niedrig bei Volllast bei niedriger Motordrehzahl |
| 0x1109 | P1109 | P1109 Saugrohrdruck - zu hoch bei Schub |
| 0x110A | P110A | P110A Differenzdrucksensor Saugrohr (Bank 2) - Druck zu niedrig |
| 0x110B | P110B | P110B Differenzdrucksensor Saugrohr (Bank 2) - Druck zu hoch |
| 0x110C | P110C | P110C Pedalwertgeber Bewegungserkennung - Plausibilitätsfehler |
| 0x110D | P110D | P110D Drosselklappenpotentiometer 1 und 2 Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x110E | P110E | P110E Interner Code (Service/Bandendetest) |
| 0x110F | P110F | P110F Umgebungstemperaturfühler - CAN-Signal fehlerhaft |
| 0x1110 | P1110 | P1110 Motoröltemperatur - zu hoch |
| 0x1111 | P1111 | P1111 Temperaturfühler Kühleraustritt Schaltkreis - niedrig |
| 0x1112 | P1112 | P1112 Temperaturfühler Kühleraustritt Schaltkreis - hoch |
| 0x1113 | P1113 | P1113 Temperaturfühler Kühleraustritt Schaltkreis - sporadisch |
| 0x1114 | P1114 | P1114 Lambdasonde Signalschaltkreis (Bank 2, vor Katalysator) - Sprungzeit mager nach fett langsame Reaktion |
| 0x1115 | P1115 | P1115 Umgebungstemperaturfühler - Fehlerwert empfangen (M52LEV, S54 bis 09/00: Kühlmitteltemperaturfühler - Plausibilitätsfehler) |
| 0x1116 | P1116 | P1116 Luftmassen- oder Luftmengendurchsatz Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x1117 | P1117 | P1117 Luftmassen- oder Luftmengendurchsatz Schaltkreis (Bank 2) - niedrig |
| 0x1118 | P1118 | P1118 Luftmassen- oder Luftmengendurchsatz Schaltkreis (Bank 2) - hoch |
| 0x1119 | P1119 | P1119 Lambdasonde Signalschaltkreis (Bank 1, vor Katalysator) - Sprungzeit mager nach fett langsame Reaktion |
| 0x111A | P111A | P111A Luftmassen- oder Luftmengendurchsatz über Lambdasonde (Bank 1) - zu groß |
| 0x111B | P111B | P111B Luftmassen- oder Luftmengendurchsatz über Lambdasonde (Bank 1) - zu gering |
| 0x111C | P111C | P111C Luftmassen- oder Luftmengendurchsatz über Lambdasonde (Bank 2) - zu groß |
| 0x111D | P111D | P111D Luftmassen- oder Luftmengendurchsatz über Lambdasonde (Bank 2) - zu gering |
| 0x111E | P111E | P111E Ansauglufttemperaturfühler 1 (Bank 1) - Maximaltemperatur unplausibel |
| 0x111F | P111F | P111F Ansauglufttemperaturfühler 1 (Bank 1) - Minimaltemperatur unplausibel |
| 0x1120 | P1120 | P1120 Pedalwertgeber Schaltkreis - Fehlfunktion |
| 0x1121 | P1121 | P1121 Pedalwertgeber 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1122 | P1122 | P1122 Pedalwertgeber 1 Schaltkreis - niedrig |
| 0x1123 | P1123 | P1123 Pedalwertgeber 1 Schaltkreis - hoch |
| 0x1124 | P1124 | P1124 Differenzdrucksensor Saugrohr (Bank 1) - Offset |
| 0x1125 | P1125 | P1125 Drosselklappenpotentiometer 1 und 2 Schaltkreis - Messbereichs- oder Leistungsproblem (kleiner Fehler) |
| 0x1126 | P1126 | P1126 Drosselklappenpotentiometer 1 und 2 Schaltkreis - Messbereichs- oder Leistungsproblem (großer Fehler) |
| 0x1127 | P1127 | P1127 Motorölniveausensor Signal - Plausibilitätsfehler |
| 0x1128 | P1128 | P1128 Motorölniveausensor - kein Signal |
| 0x1129 | P1129 | P1129 Motorölniveausensor Signal - Ölstand zu niedrig |
| 0x112A | P112A | P112A Motorkühlmitteltemperaturfühler 1 - Maximaltemperatur unplausibel |
| 0x112B | P112B | P112B Motorkühlmitteltemperaturfühler 1 - Minimaltemperatur unplausibel |
| 0x112C | P112C | P112C Lambdasonde virtuelle Masse oder Pumpstromleitung Steuerkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x112D | P112D | P112D Lambdasonde virtuelle Masse oder Pumpstromleitung Steuerkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x112E | P112E | P112E Absoluter Saugrohrdruck zu Drosselklappenwinkel (Bank 1) - zu niedrig |
| 0x112F | P112F | P112F Absoluter Saugrohrdruck zu Drosselklappenwinkel (Bank 1) - zu hoch |
| 0x1130 | P1130 | P1130 Lambdasonde (Bank 1, nach Katalysator) - Dynamikprüfung |
| 0x1131 | P1131 | P1131 Lambdasonde (Bank 2, nach Katalysator) - Dynamikprüfung |
| 0x1132 | P1132 | P1132 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1133 | P1133 | P1133 Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x1134 | P1134 | P1134 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Signal sporadisch |
| 0x1135 | P1135 | P1135 Lambdasonde Heizungschaltkreis (Bank 1, vor Katalysator) - Spannung niedrig |
| 0x1136 | P1136 | P1136 Lambdasonde Heizungschaltkreis (Bank 1, vor Katalysator) - Spannung hoch |
| 0x1137 | P1137 | P1137 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Signal sporadisch |
| 0x1138 | P1138 | P1138 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Spannung niedrig |
| 0x1139 | P1139 | P1139 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Spannung hoch |
| 0x113A | P113A | P113A Luftmassen- oder Luftmengendurchsatz 1 Korrektursignal - Plausibilität Periodendauer zu lang |
| 0x113B | P113B | P113B Luftmassen- oder Luftmengendurchsatz 1 Korrektursignal - Plausibilität Periodendauer zu kurz |
| 0x113C | P113C | P113C Ansauglufttemperaturfühler 1 (Bank 1) - Signal festliegend |
| 0x113D | P113D | P113D Ansauglufttemperaturfühler 1 (Bank 1) - Temperatur unplausibel |
| 0x113F | P113F | P113F Motorkühlmitteltemperaturfühler 1 - Nebenschluss |
| 0x1140 | P1140 | P1140 Luftmassen- oder Luftmengendurchsatz - Messbereichs- oder Leistungsproblem |
| 0x1141 | P1141 | P1141 Wertevergleich Drosselklapenpotentiometer 1/Heißfilmluftmassenmesser |
| 0x1142 | P1142 | P1142 Wertevergleich Drosselklapenpotentiometer 2/Heißfilmluftmassenmesser |
| 0x1143 | P1143 | P1143 Lambdasonde Aktivitätsüberprüfung (Bank 1, nach Katalysator) - Signal zu hoch |
| 0x1144 | P1144 | P1144 Lambdasonde Aktivitätsüberprüfung (Bank 1, nach Katalysator) - Signal zu niedrig |
| 0x1145 | P1145 | P1145 Magnetventil Running Losses Schaltkreis - elektrischer Fehler |
| 0x1146 | P1146 | P1146 Magnetventil Running Losses Schaltkreis - Leitungsunterbrechung |
| 0x1147 | P1147 | P1147 Magnetventil Running Losses Schaltkreis - niedrig |
| 0x1148 | P1148 | P1148 Magnetventil Running Losses Schaltkreis - hoch |
| 0x1149 | P1149 | P1149 Lambdasonde Aktivitätsüberprüfung (Bank 2, nach Katalysator) - Signal zu hoch |
| 0x114A | P114A | P114A Gemischfeinregelung über Lambdasonde (Bank 1, nach Katalysator) - System zu fett |
| 0x114B | P114B | P114B Gemischfeinregelung über Lambdasonde (Bank 1, nach Katalysator) - System zu mager |
| 0x114C | P114C | P114C Gemischfeinregelung über Lambdasonde (Bank 2, nach Katalysator) - System zu fett |
| 0x114D | P114D | P114D Gemischfeinregelung über Lambdasonde (Bank 2, nach Katalysator) - System zu mager |
| 0x114E | P114E | P114E Luftmassenmesser Signal - Gradient zu hoch |
| 0x114F | P114F | P114F Luftmassenmesser Sensor - defekt |
| 0x1150 | P1150 | P1150 Lambdasonde Aktivitätsüberprüfung (Bank 2, nach Katalysator) - Signal zu niedrig |
| 0x1151 | P1151 | P1151 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Signal sporadisch |
| 0x1152 | P1152 | P1152 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Spannung niedrig |
| 0x1153 | P1153 | P1153 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Spannung hoch |
| 0x1154 | P1154 | P1154 Differenzdrucksensor Saugrohr Schaltkreis (Bank 2) - hoch |
| 0x1155 | P1155 | P1155 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Signal sporadisch |
| 0x1156 | P1156 | P1156 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Spannung niedrig |
| 0x1157 | P1157 | P1157 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Spannung hoch |
| 0x1158 | P1158 | P1158 Gemischregelung Adaption additiv pro Zeit (Bank 1) - zu klein |
| 0x1159 | P1159 | P1159 Gemischregelung Adaption additiv pro Zeit (Bank 1)  - zu groß |
| 0x115A | P115A | P115A Luftmassen- oder Luftmengendurchsatz 1 - Maximum überschritten |
| 0x115B | P115B | P115B Luftmassen- oder Luftmengendurchsatz 1 - Minimum unterschritten |
| 0x115C | P115C | P115C Luftmassen- oder Luftmengendurchsatz 1 - Luftmasse gegenüber Modell zu gering |
| 0x115D | P115D | P115D Luftmassen- oder Luftmengendurchsatz 1 - Luftmasse gegenüber Modell zu gross |
| 0x115E | P115E | P115E Ansauglufttemperaturfühler 1 (Bank 1) - Gradient unplausibel |
| 0x115F | P115F | P115F Drosselklappenpotentiometer 1/2 Gleichlauf (Bank 1) - Korrelationsfehler |
| 0x1160 | P1160 | P1160 Gemischregelung Adaption additiv pro Zeit (Bank 2)  - zu klein |
| 0x1161 | P1161 | P1161 Gemischregelung Adaption additiv pro Zeit (Bank 2)  - zu groß (M52: Motoröltemperaturfühler - Fehlfunktion) |
| 0x1162 | P1162 | P1162 Gemischregelung Adaption additiv pro Zündung (Bank 1)  - zu klein |
| 0x1163 | P1163 | P1163 Gemischregelung Adaption additiv pro Zündung (Bank 1) - zu groß |
| 0x1164 | P1164 | P1164 Gemischregelung Adaption additiv pro Zündung (Bank 2) - zu klein |
| 0x1165 | P1165 | P1165 Gemischregelung Adaption additiv pro Zündung (Bank 2) - zu groß |
| 0x1166 | P1166 | P1166 Lambdasonden vertauscht |
| 0x1167 | P1167 | P1167 Lambdasonde Heizereinkopplung (Bank 1, vor Katalysator) - Signal zu hoch |
| 0x1168 | P1168 | P1168 Gemischfeinregelung (Bank 1) - Regler Korrekturwert über Schwellwert |
| 0x1169 | P1169 | P1169 Lambdasonde Heizereinkopplung (Bank 2, vor Katalysator) - Signal zu hoch |
| 0x116A | P116A | P116A Luftmassen- oder Luftmengendurchsatz 2 - Maximum überschritten |
| 0x116B | P116B | P116B Luftmassen- oder Luftmengendurchsatz 2 - Minimum unterschritten |
| 0x116C | P116C | P116C Luftmassenmesser Signal - Messbereichsproblem |
| 0x116D | P116D | P116D Luftmassenmesser Signal - Gradientenfehler |
| 0x116E | P116E | P116E Luftmassenmesser Signal - elektrischer Fehler |
| 0x116F | P116F | P116F Tankfüllstand zu niedrig |
| 0x1170 | P1170 | P1170 Gemischfeinregelung (Bank 2) - Regler Korrekturwert über Schwellwert |
| 0x1171 | P1171 | P1171 Umgebungsdrucksensor, Variantenerkennung - Wert im Bootbereich unplausibel |
| 0x1172 | P1172 | P1172 Umgebungsdrucksensor, Variantenerkennung - Fehlerwert im Bootbereich abgelegt |
| 0x1173 | P1173 | P1173 Umgebungsdrucksensor, Variantenerkennung - Lernen fehlgeschlagen |
| 0x1174 | P1174 | P1174 Gemischregelung Adaption additiv pro Zeit (Bank 1) - Fehlfunktion |
| 0x1175 | P1175 | P1175 Gemischregelung Adaption additiv pro Zeit (Bank 2) - Fehlfunktion |
| 0x1176 | P1176 | P1176 Lambdasondenalterung (Bank 1) - Zeitverzögerung |
| 0x1177 | P1177 | P1177 Lambdasondenalterung (Bank 2) - Zeitverzögerung |
| 0x1178 | P1178 | P1178 Lambdasonde Signalschaltkreis (Bank 1, vor Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1179 | P1179 | P1179 Lambdasonde Signalschaltkreis (Bank 2, vor Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x117A | P117A | P117A Gemischregelung (Bank 1) - Stillstand der Lambdaregelung (obere Grenze) |
| 0x117B | P117B | P117B Gemischregelung (Bank 1) - Stillstand der Lambdaregelung (untere Grenze) |
| 0x117C | P117C | P117C Gemischregelung (Bank 2) - Stillstand der Lambdaregelung (obere Grenze) |
| 0x117D | P117D | P117D Gemischregelung (Bank 2) - Stillstand der Lambdaregelung (untere Grenze) |
| 0x117E | P117E | P117E Drosselklappenpotentiometer 1/2 Gleichlauf (Bank 2) - Korrelationsfehler |
| 0x117F | P117F | P117F Ansauglufttemperaturfühler 1 (Bank 2) - Maximaltemperatur unplausibel |
| 0x1180 | P1180 | P1180 Lambdasonde Signalschaltkreis (Bank 1, nach Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1181 | P1181 | P1181 Lambdasonde Signalschaltkreis (Bank 2, nach Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1182 | P1182 | P1182 Lambdasonde (Bank 1, nach Katalysator) - Leitungsunterbrechung bei Schubabschaltung |
| 0x1183 | P1183 | P1183 Lambdasonde (Bank 2, nach Katalysator) - Leitungsunterbrechung bei Schubabschaltung |
| 0x1184 | P1184 | P1184 Beheizte Lambdasonde Spannungshub (Bank 1, vor Katalysator) - elektrischer Fehler |
| 0x1185 | P1185 | P1185 Beheizte Lambdasonde Spannungshub (Bank 2, vor Katalysator) - elektrischer Fehler |
| 0x1186 | P1186 | P1186 Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x1187 | P1187 | P1187 Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x1188 | P1188 | P1188 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1189 | P1189 | P1189 Gemischaufbereitung am Regelanschlag (Bank 2 , vor Katalysator) - Fehlfunktion |
| 0x118A | P118A | P118A Motorölabscheiderheizung Schaltkreis - hoch |
| 0x118B | P118B | P118B Motorölabscheiderheizung Schaltkreis - niedrig |
| 0x118C | P118C | P118C Motorölabscheiderheizung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x118D | P118D | P118D Ansauglufttemperaturfühler 1 (Bank 2) - Gradient unplausibel |
| 0x118E | P118E | P118E Ansauglufttemperaturfühler 1 (Bank 1/Bank 2) - Gradient unplausibel |
| 0x118F | P118F | P118F Ansauglufttemperaturfühler 1 (Bank 2) - Minimaltemperatur unplausibel |
| 0x1190 | P1190 | P1190 Gemischregelung (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1191 | P1191 | P1191 Gemischregelung (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x1192 | P1192 | P1192 Gemischfeinregelung (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x1193 | P1193 | P1193 Gemischfeinregelung (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x1194 | P1194 | P1194 Differenzdrucksensor Saugrohr (Bank 2) - Offset |
| 0x1195 | P1195 | P1195 Differenzdrucksensor Saugrohr (Bank 2) - Druck Plausibilitätsfehler |
| 0x1196 | P1196 | P1196 Differenzdrucksensor Saugrohr Schaltkreis (Bank 2) - niedrig |
| 0x1197 | P1197 | P1197 Differenzdrucksensor Saugrohr Schaltkreis (Bank 1) - hoch |
| 0x1198 | P1198 | P1198 Differenzdrucksensor Saugrohr Schaltkreis (Bank 1) - niedrig |
| 0x1199 | P1199 | P1199 Differenzdrucksensor Saugrohr (Bank 1) - Druck Plausibilitätsfehler |
| 0x119A | P119A | P119A Absoluter Saugrohrdrucksensor Schaltkreis (Bank 1) - hoch |
| 0x119B | P119B | P119B Absoluter Saugrohrdrucksensor Schaltkreis (Bank 1) - niedrig |
| 0x119C | P119C | P119C Absoluter Saugrohrdrucksensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x119D | P119D | P119D Gemischregelung, Einspritzventil Alterung (Bank 1) - langfristige Adaption zu hoch |
| 0x119E | P119E | P119E Gemischregelung, Einspritzventil Alterung (Bank 2) - langfristige Adaption zu hoch |
| 0x119F | P119F | P119F Luftmassenmesser Signal 2- Gradient zu hoch |
| 0x11A0 | P11A0 | P11A0 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x11A1 | P11A1 | P11A1 Drosselklappenpotentiometer Versorgungsspannungskreis (Bank 1) - Überspannung |
| 0x11A2 | P11A2 | P11A2 Drosselklappenpotentiometer Versorgungsspannungskreis (Bank 1) - Unterspannung |
| 0x11A3 | P11A3 | P11A3 Drosselklappenpotentiometer Versorgungsspannungskreis (Bank 2) - Überspannung |
| 0x11A4 | P11A4 | P11A4 Drosselklappenpotentiometer Versorgungsspannungskreis (Bank 2) - Unterspannung |
| 0x11A5 | P11A5 | P11A5 Pedalwertgeber Versorgungsspannungskreis - Überspannung |
| 0x11A6 | P11A6 | P11A6 Pedalwertgeber Versorgungsspannungskreis - Unterspannung |
| 0x11A7 | P11A7 | P11A7 Lambdasonde Pumpstromleitung, Nernstleitung oder virtuelle Masse Schaltkreis (Bank 1, vor Katalysator) - niedrig  |
| 0x11A8 | P11A8 | P11A8 Lambdasonde Pumpstromleitung, Nernstleitung oder virtuelle Masse Schaltkreis (Bank 1, vor Katalysator) - hoch |
| 0x11A9 | P11A9 | P11A9 Pedalwertgeberkopplung - Summenfehler |
| 0x11AA | P11AA | P11AA Drosselklappe (Bank 1) - schwergängig |
| 0x11AB | P11AB | P11AB Drosselklappe (Bank 2) - schwergängig |
| 0x11AC | P11AC | P11AC Gemischregelung im H2-Betrieb (Bank 1) - Regelabweichung zu groß |
| 0x11AD | P11AD | P11AD Gemischregelung im H2-Betrieb (Bank 2) - Regelabweichung zu groß |
| 0x11AE | P11AE | P11AE Absoluter Saugrohrdrucksensor Schaltkreis (Bank 2) - hoch |
| 0x11AF | P11AF | P11AF Absoluter Saugrohrdrucksensor Schaltkreis (Bank 2) - niedrig |
| 0x11B0 | P11B0 | P11B0 Absoluter Saugrohrdruck zu Drosselklappenwinkel (Bank 2) - zu niedrig |
| 0x11B1 | P11B1 | P11B1 Absoluter Saugrohrdruck zu Drosselklappenwinkel (Bank 2) - zu hoch |
| 0x11B2 | P11B2 | P11B2 Ansauglufttemperaturfühler 1 (Bank 2) - Signal festliegend |
| 0x11B3 | P11B3 | P11B3 Ansauglufttemperaturfühler 2 (Bank 1) - Maximaltemperatur unplausibel |
| 0x11B4 | P11B4 | P11B4 Ansauglufttemperaturfühler 2 (Bank 1) - Minimaltemperatur unplausibel |
| 0x11B5 | P11B5 | P11B5 Ansauglufttemperaturfühler 2 (Bank 2) - Maximaltemperatur unplausibel |
| 0x11B6 | P11B6 | P11B6 Ansauglufttemperaturfühler 2 (Bank 2) - Minimaltemperatur unplausibel |
| 0x11B7 | P11B7 | P11B7 Ansauglufttemperaturfühler 2 (Bank 1) - Signal festliegend |
| 0x11B8 | P11B8 | P11B8 Ansauglufttemperaturfühler 2 (Bank 2) - Signal festliegend |
| 0x11B9 | P11B9 | P11B9 Ansauglufttemperaturfühler 2 (Bank 1) - Gradient unplausibel |
| 0x11BA | P11BA | P11BA Ansauglufttemperaturfühler 2 (Bank 2) - Gradient unplausibel |
| 0x11BB | P11BB | P11BB Ansauglufttemperaturfühler 1 (Bank 1) - Offset |
| 0x11BC | P11BC | P11BC Ansauglufttemperaturfühler 1 (Bank 2) - Offset |
| 0x11BD | P11BD | P11BD Drosselklappenpotentiometer 1 und 2 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x11BE | P11BE | P11BE Ansauglufttemperaturfühler 2 (Bank 1) - Offset |
| 0x11BF | P11BF | P11BF Ansauglufttemperaturfühler 2 (Bank 2) - Offset |
| 0x11C0 | P11C0 | P11C0 Luftmassen- oder Luftmengenmesser Schaltkreis (Bank 1 und Bank 2) - Fehlfunktion |
| 0x11C1 | P11C1 | P11C1 Lambdasonde (Bank 1, vor Katalysator) - Strom zu hoch |
| 0x11C2 | P11C2 | P11C2 Lambdasonde (Bank 1, vor Katalysator) - Strom zu niedrig |
| 0x11C3 | P11C3 | P11C3 Lambdasonde (Bank 2, vor Katalysator) - Strom zu hoch |
| 0x11C4 | P11C4 | P11C4 Lambdasonde (Bank 2, vor Katalysator) - Strom zu niedrig |
| 0x11C5 | P11C5 | P11C5 Lambdasonde (Bank 1, vor Katalysator) - Pumpstrom-Abschaltung wegen Nernstleitung Überstrom  |
| 0x11C6 | P11C6 | P11C6 Lambdasonde (Bank 2, vor Katalysator) - Pumpstrom-Abschaltung wegen Nernstleitung Überstrom  |
| 0x11C7 | P11C7 | P11C7 Absoluter Saugrohrdrucksensor Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x11C8 | P11C8 | P11C8 Pedalwertgeber - Ersatzbetrieb |
| 0x11C9 | P11C9 | P11C9 Ansauglufttemperatur - zu niedrig |
| 0x11CB | P11CB | P11CB Umgebungsdruck zu hoch |
| 0x1200 | P1200 | P1200 Gemischregelung oberer Adaptionsbereich (Bank 1) - System zu mager |
| 0x1201 | P1201 | P1201 Gemischregelung oberer Adaptionsbereich (Bank 1) - System zu fett |
| 0x1202 | P1202 | P1202 Gemischregelung oberer Adaptionsbereich (Bank 2) - System zu mager |
| 0x1203 | P1203 | P1203 Gemischregelung oberer Adaptionsbereich (Bank 2) - System zu fett |
| 0x1204 | P1204 | P1204 Lambdasonde (Bank 1, nach Katalysator) Volllastprüfung - Signal zu niedrig |
| 0x1205 | P1205 | P1205 Lambdasonde (Bank 2, nach Katalysator) Volllastprüfung - Signal zu niedrig |
| 0x1206 | P1206 | P1206 Bremskraftverstärkerpumpe Absperrventil Schaltkreis - niedrig |
| 0x1207 | P1207 | P1207 Bremskraftverstärkerpumpe Absperrventil Schaltkreis - hoch |
| 0x1208 | P1208 | P1208 Bremskraftverstärkerpumpe Absperrventil Schaltkreis - Leitungsunterbrechung |
| 0x1209 | P1209 | P1209 Bremskraftverstärkerpumpe Absperrventil - Plausibilitätsfehler |
| 0x120A | P120A | P120A Kurbelgehäuseentlüftung Diagnoseventil Schaltkreis - hoch |
| 0x120B | P120B | P120B Kurbelgehäuseentlüftung Diagnoseventil Schaltkreis - niedrig |
| 0x120C | P120C | P120C Kurbelgehäuseentlüftung Diagnoseventil Schaltkreis - Leitungsunterbrechung |
| 0x120D | P120D | P120D Kurbelgehäuseentlüftung Entlüftungsschlauch (Bank 1) - nicht angeschlossen / defekt |
| 0x120E | P120E | P120E Bremskraftverstärkerpumpe Schaltkreis - hoch |
| 0x120F | P120F | P120F Bremskraftverstärkerpumpe Schaltkreis - niedrig |
| 0x1210 | P1210 | P1210 Lambdasonde Schaltkreis (Bank 1, vor Katalysator) - begrenzter Spannungshub |
| 0x1211 | P1211 | P1211 Lambdasonde Schaltkreis (Bank 2, vor Katalysator) - begrenzter Spannungshub |
| 0x1212 | P1212 | P1212 Abgasrückführsteller Schaltkreis - hoch |
| 0x1213 | P1213 | P1213 Abgasrückführsteller Schaltkreis - niedrig |
| 0x1214 | P1214 | P1214 Kraftstoffpumpe - Drehzahl zu hoch |
| 0x1215 | P1215 | P1215 Kraftstoffpumpe - Drehzahl zu niedrig |
| 0x1216 | P1216 | P1216 Kraftstoffpumpe - Notlauf |
| 0x1217 | P1217 | P1217 Kraftstoffpumpe - Übertemperatur |
| 0x1218 | P1218 | P1218 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x1219 | P1219 | P1219 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x121A | P121A | P121A Bremskraftverstärkerpumpe Schaltkreis - Leitungsunterbrechung |
| 0x121B | P121B | P121B Kurbelgehäuseentlüftung Entlüftungsschlauch (Bank 2) - nicht angeschlossen / defekt |
| 0x121C | P121C | P121C NOx-Sensor Heizungssteuerkreis (Bank 1) - Kurzschluss |
| 0x121D | P121D | P121D NOx-Sensor Heizungssteuerkreis (Bank 2) - Kurzschluss |
| 0x121E | P121E | P121E NOx-Sensor linearer Lambdasignalschaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x121F | P121F | P121F NOx-Sensor linearer Lambdasignalschaltkreis (Bank 1) - Kurzschluss |
| 0x1220 | P1220 | P1220 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - niedrig |
| 0x1221 | P1221 | P1221 Pedalwertgeber 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1222 | P1222 | P1222 Pedalwertgeber 2 Schaltkreis - niedrig |
| 0x1223 | P1223 | P1223 Pedalwertgeber 2 Schaltkreis - hoch |
| 0x1224 | P1224 | P1224 Pedalwertgeber 1 und 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1225 | P1225 | P1225 Drosselklappenpotentiometer 1 Schaltkreis (Bank 2) - hoch |
| 0x1226 | P1226 | P1226 Drosselklappe - Fehlfunktion (Klappenfehlfunktion) |
| 0x1227 | P1227 | P1227 Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x1228 | P1228 | P1228 Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - niedrig |
| 0x1229 | P1229 | P1229 Drosselklappenpotentiometer - Adaptionsfehler |
| 0x122A | P122A | P122A NOx-Sensor linearer Lambdasignalschaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x122B | P122B | P122B NOx-Sensor linearer Lambdasignalschaltkreis (Bank 2) - Kurzschluss |
| 0x122C | P122C | P122C NOx-Sensor Schaltkreis (Bank 1) - Kurzschluss |
| 0x122D | P122D | P122D NOx-Sensor Schaltkreis (Bank 2) - Kurzschluss |
| 0x122E | P122E | P122E NOx-Sensor binärer Lambdasignalschaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x122F | P122F | P122F NOx-Sensor binärer Lambdasignalschaltkreis (Bank 1) - Kurzschluss |
| 0x1230 | P1230 | P1230 Kraftstoffpumpen-Relais Primärschaltkreis - Fehlfunktion |
| 0x1231 | P1231 | P1231 Kraftstoffpumpe 2 Steuerkreis - niedrig |
| 0x1232 | P1232 | P1232 Kraftstoffpumpe 2 Steuerkreis - hoch |
| 0x1233 | P1233 | P1233 Absoluter Saugrohrdruck - unplausibel |
| 0x1234 | P1234 | P1234 Kraftstoffpumpen-Relais Primärschaltkreis - niedrig |
| 0x1235 | P1235 | P1235 Drucksensor Saugrohr vor Kompressor Schaltkreis - sporadisch |
| 0x1236 | P1236 | P1236 Kraftstoffpumpen-Relais Primärschaltkreis - hoch |
| 0x1237 | P1237 | P1237 Drucksensor Saugrohr vor Kompressor Schaltkreis - niedrig |
| 0x1238 | P1238 | P1238 Drucksensor Saugrohr vor Kompressor Schaltkreis - hoch |
| 0x1239 | P1239 | P1239 Drucksensor Saugrohr vor Kompressor - Signal zu niedrig bei stehendem Motor |
| 0x123A | P123A | P123A NOx-Sensor binärer Lambdasignalschaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x123B | P123B | P123B NOx-Sensor binärer Lambdasignalschaltkreis (Bank 2) - Kurzschluss |
| 0x123C | P123C | P123C NOx-Sensorsignal (Bank 1) - binäres Lambdasignal zu mager |
| 0x123D | P123D | P123D NOx-Sensorsignal (Bank 1) - lineares Lambdasignal zu mager |
| 0x123E | P123E | P123E NOx-Sensorsignal (Bank 1) - zu niedrig |
| 0x123F | P123F | P123F NOx-Sensorsignal (Bank 2) - binäres Lambdasignal zu mager |
| 0x1240 | P1240 | P1240 Drucksensor Saugrohr vor Kompressor - Signal zu niedrig im Leerlauf |
| 0x1241 | P1241 | P1241 Drucksensor Saugrohr vor Kompressor - Signal zu niedrig bei Volllast bei niedriger Motordrehzahl |
| 0x1242 | P1242 | P1242 Drucksensor Saugrohr vor Kompressor - Signal zu hoch bei Schub |
| 0x1243 | P1243 | P1243 Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - hoch |
| 0x1244 | P1244 | P1244 Kraftstoffpumpe - Notabschaltung |
| 0x1245 | P1245 | P1245 Ladelufttemperaturfühler Schaltkreis - hoch |
| 0x1246 | P1246 | P1246 Ladelufttemperaturfühler Schaltkreis - niedrig |
| 0x1247 | P1247 | P1247 Umgebungsdruck - Plausibilitätsfehler |
| 0x1248 | P1248 | P1248 Zwangshochschaltung wegen zu hoher Motoröl- bzw. Motorkühlmitteltemperatur |
| 0x1249 | P1249 | P1249 Kraftstoffvolumenregler Steuerkreis (Bank 2) - Leitungsunterbrechung |
| 0x124A | P124A | P124A NOx-Sensorsignal (Bank 2) - lineares Lambdasignal zu mager |
| 0x124B | P124B | P124B NOx-Sensorsignal (Bank 2) - zu niedrig |
| 0x124C | P124C | P124C NOx-Sensorsignal (Bank 1) - nicht verfügbar im Start |
| 0x124D | P124D | P124D NOx-Sensorsignal (Bank 1) - nicht verfügbar im Betrieb |
| 0x124E | P124E | P124E NOx-Sensorsignal (Bank 2) - nicht verfügbar im Start |
| 0x124F | P124F | P124F NOx-Sensorsignal (Bank 2) - nicht verfügbar im Betrieb |
| 0x1250 | P1250 | P1250 Absoluter Saugrohrdruck - zu hoch |
| 0x1251 | P1251 | P1251 Ladedrucksteller Schaltkreis - hoch |
| 0x1252 | P1252 | P1252 Ladedrucksteller Schaltkreis - niedrig |
| 0x1253 | P1253 | P1253 Ladedrucksteller Schaltkreis - Leitungsunterbrechung |
| 0x1254 | P1254 | P1254 Ladedrucksteller Endstufe - Übertemperatur |
| 0x1255 | P1255 | P1255 Absoluter Saugrohrdruck - zu niedrig |
| 0x1256 | P1256 | P1256 Ladedrucksteller Schaltkreis (Bank 2) - hoch |
| 0x1257 | P1257 | P1257 Ladedrucksteller Schaltkreis (Bank 2) - niedrig |
| 0x1258 | P1258 | P1258 Ladedrucksteller Schaltkreis (Bank 2) - Leitungsunterbrechung |
| 0x1259 | P1259 | P1259 Ladedrucksteller Endstufe (Bank 2) - Übertemperatur |
| 0x125A | P125A | P125A NOx-Sensor Heizungssteuerkreis (Bank 1) - Heizleistung zu niedrig im Start |
| 0x125B | P125B | P125B NOx-Sensor Heizungssteuerkreis (Bank 1) - Heizleistung zu niedrig im Betrieb |
| 0x125C | P125C | P125C NOx-Sensor Heizungssteuerkreis (Bank 1) Versorgungsspannung - Fehlfunktion |
| 0x125D | P125D | P125D NOx-Sensor Heizungssteuerkreis (Bank 2) - Heizleistung zu niedrig im Start |
| 0x125E | P125E | P125E NOx-Sensor Heizungssteuerkreis (Bank 2) - Heizleistung zu niedrig im Betrieb |
| 0x125F | P125F | P125F NOx-Sensor Heizungssteuerkreis (Bank 2) Versorgungsspannung - Fehlfunktion |
| 0x1260 | P1260 | P1260 Turbolader/Verdichter Ladedruckregelung (Bank 1) - Abschaltung |
| 0x1261 | P1261 | P1261 Luftmassen- oder Luftmengendurchsatz - zu groß im Leerlauf |
| 0x1262 | P1262 | P1262 Luftmassen- oder Luftmengendurchsatz - zu groß in Volllast |
| 0x1263 | P1263 | P1263 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß im Leerlauf |
| 0x1264 | P1264 | P1264 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß in Volllast |
| 0x1265 | P1265 | P1265 Abgasrückführsteller Schaltkreis (Bank 2) - hoch |
| 0x1266 | P1266 | P1266 Abgasrückführsteller Schaltkreis (Bank 2) - niedrig |
| 0x1267 | P1267 | P1267 Abgasrückführsteller Schaltkreis (Bank 2) - Leitungsunterbrechung |
| 0x1268 | P1268 | P1268 Abgasrückführsteller Endstufe (Bank 2) - Übertemperatur |
| 0x1269 | P1269 | P1269 Abgasrückführsteller Endstufe - Übertemperatur |
| 0x126A | P126A | P126A NOx-Sensorsignal / Signal lineare Lambdasonde (Bank 1) - Korrelationsfehler |
| 0x126B | P126B | P126B NOx-Sensorsignal / Signal lineare Lambdasonde (Bank 2) - Korrelationsfehler |
| 0x126C | P126C | P126C NOx-Sensorsignal (Bank 1) - Fehler zu Beginn der Beladung |
| 0x126D | P126D | P126D NOx-Sensorsignal (Bank 2) - Fehler zu Beginn der Beladung |
| 0x126E | P126E | P126E NOx-Sensorsignal (Bank 1) - binäres Lambdasignal zu fett bei Schubprüfung |
| 0x126F | P126F | P126F NOx-Sensorsignal (Bank 1) - lineares Lambdasignal zu fett bei Schubprüfung |
| 0x1270 | P1270 | P1270 Steuergeräte-Selbsttest, Momentüberwachung (M73: Luftmassenmesser Bankvergleich - Plausibilitätsfehler) |
| 0x1271 | P1271 | P1271 Umgebungsdrucksensor - elektrischer Fehler (M73: Höhendrucksensor / Ladedrucksensor Wertevergleich - Plausibilitätsfehler) |
| 0x1272 | P1272 | P1272 Ladedrucksteller (Bank 1) - elektrisch oder mechanisch defekt |
| 0x1273 | P1273 | P1273 Ladedrucksteller (Bank 1) - Ansteuersignal unplausibel |
| 0x1274 | P1274 | P1274 Ladedrucksteller (Bank 1) - Versorgungsspannung zu niedrig |
| 0x1275 | P1275 | P1275 Ladedrucksteller (Bank 2) - elektrisch oder mechanisch defekt |
| 0x1276 | P1276 | P1276 Ladedrucksteller (Bank 2) - Ansteuersignal unplausibel |
| 0x1277 | P1277 | P1277 Ladedrucksteller (Bank 2) - Versorgungsspannung zu niedrig |
| 0x1278 | P1278 | P1278 Laufruheregler -  Korrekturmenge zu hoch |
| 0x1279 | P1279 | P1279 Laufruheregler - Korrekturmenge zu niedrig |
| 0x127A | P127A | P127A NOx-Sensorsignal (Bank 1) - Signal zu hoch bei Schubprüfung |
| 0x127B | P127B | P127B NOx-Sensorsignal (Bank 1) - Signal zu niedrig bei Schubprüfung |
| 0x127C | P127C | P127C NOx-Sensorsignal (Bank 2) - binäres Lambdasignal zu fett bei Schubprüfung |
| 0x127D | P127D | P127D NOx-Sensorsignal (Bank 2) - lineares Lambdasignal zu fett bei Schubprüfung |
| 0x127E | P127E | P127E NOx-Sensorsignal (Bank 2) - Signal zu hoch bei Schubprüfung |
| 0x127F | P127F | P127F NOx-Sensorsignal (Bank 2) - Signal zu niedrig bei Schubprüfung |
| 0x1280 | P1280 | P1280 Luftumfasstes Einspritzsystem Schaltkreis (Bank 1) - Fehlfunktion |
| 0x1281 | P1281 | P1281 Kraftstoffvolumenregler Steuerkreis (Bank 2) - niedrig |
| 0x1282 | P1282 | P1282 Kraftstoffvolumenregler Steuerkreis (Bank 2) - hoch |
| 0x1283 | P1283 | P1283 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - elektrischer Fehler |
| 0x1284 | P1284 | P1284 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - Signal niedrig |
| 0x1285 | P1285 | P1285 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - Signal hoch |
| 0x1286 | P1286 | P1286 Abgasrückführsteller Schaltkreis - Leitungsunterbrechung |
| 0x1287 | P1287 | P1287 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - elektrischer Fehler |
| 0x1288 | P1288 | P1288 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - Signal niedrig |
| 0x1289 | P1289 | P1289 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - Signal hoch |
| 0x128A | P128A | P128A NOx-Sensorsignal (Bank 1) Regeneration NOx-Speicher - Fehlfunktion |
| 0x128B | P128B | P128B NOx-Sensorsignal (Bank 1) Regeneration NOx-Speicher - Abbruch |
| 0x128C | P128C | P128C NOx-Sensorsignal (Bank 2) Regeneration NOx-Speicher - Fehlfunktion |
| 0x128D | P128D | P128D NOx-Sensorsignal (Bank 2) Regeneration NOx-Speicher - Abbruch |
| 0x128E | P128E | P128E NOx-Sensor binärer Lambdasignalkreis (Bank 1) - Dynamik zu niedrig |
| 0x128F | P128F | P128F NOx-Sensor binärer Lambdasignalkreis (Bank 2) - Dynamik zu niedrig |
| 0x1290 | P1290 | P1290 Absoluter Saugrohrdrucksensor, Nachlaufdiagnose (Bank 2) - Druck unplausibel |
| 0x1291 | P1291 | P1291 Kraftstoffvolumenregler Endstufe - Übertemperatur  |
| 0x1292 | P1292 | P1292 Füllungsbegrenzung - Plausibilitätsfehler |
| 0x1293 | P1293 | P1293 Füllungsbegrenzung - Lambda zu fett |
| 0x1294 | P1294 | P1294 Füllungsbegrenzung - Überlast Hochdruckpumpe |
| 0x1295 | P1295 | P1295 Ladedruckregelung - Gleichstellungs-Regelabweichung zu hoch |
| 0x1296 | P1296 | P1296 Ladedruckregelung - Ladedruck zu hoch |
| 0x1297 | P1297 | P1297 Ladedruckregelung - Ladedruck zu niedrig  |
| 0x1298 | P1298 | P1298 Serielle Kommunikationsverbindung NOx-Sensor (Bank 1) |
| 0x1299 | P1299 | P1299 Serielle Kommunikationsverbindung NOx-Sensor (Bank 2) |
| 0x129A | P129A | P129A Ladedrucksensor, Nachlaufdiagnose (Bank 1) - Druck unplausibel |
| 0x129B | P129B | P129B Absoluter Saugrohrdrucksensor, Nachlaufdiagnose (Bank 1) - Druck unplausibel |
| 0x129C | P129C | P129C Umgebungsdrucksensor, Nachlaufdiagnose - Druck unplausibel |
| 0x129D | P129D | P129D Absoluter Saugrohrdruck - Maximaldruck unplausibel |
| 0x129E | P129E | P129E Absoluter Saugrohrdruck - Minimaldruck unplausibel |
| 0x129F | P129F | P129F Turbolader/Verdichter Ladedruckregelung (Bank 2) - Abschaltung |
| 0x12A0 | P12A0 | P12A0 Turbolader/Verdichter Ladedruck - Druck vor Drosselklappe zu hoch |
| 0x12A1 | P12A1 | P12A1 Turbolader/Verdichter Ladedruck - Druck vor Drosselklappe zu niedrig |
| 0x12A2 | P12A2 | P12A2 Turbolader/Verdichter Ladedruck - Maximaldruck vor Drosselklappe unplausibel |
| 0x12A3 | P12A3 | P12A3 Turbolader/Verdichter Ladedruck - Minimaldruck vor Drosselklappe unplausibel |
| 0x12A4 | P12A4 | P12A4 Absoluter Saugrohrdrucksensor, Nachlaufdiagnose (Bank 1) - Druck zu niedrig |
| 0x12A5 | P12A5 | P12A5 Absoluter Saugrohrdrucksensor, Nachlaufdiagnose (Bank 1) - Druck zu hoch |
| 0x12A6 | P12A6 | P12A6 Absoluter Saugrohrdrucksensor, Nachlaufdiagnose (Bank 2) - Druck zu niedrig |
| 0x12A7 | P12A7 | P12A7 Absoluter Saugrohrdrucksensor, Nachlaufdiagnose (Bank 2) - Druck zu hoch |
| 0x12A8 | P12A8 | P12A8 Ladedrucksensor, Nachlaufdiagnose (Bank 1) - Druck zu niedrig |
| 0x12A9 | P12A9 | P12A9 Ladedrucksensor, Nachlaufdiagnose (Bank 1) - Druck zu hoch |
| 0x12AA | P12AA | P12AA Einspritzventil Zylinder 1 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12AB | P12AB | P12AB Einspritzventil Zylinder 2 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12AC | P12AC | P12AC Einspritzventil Zylinder 3 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12AD | P12AD | P12AD Einspritzventil Zylinder 4 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12AE | P12AE | P12AE Einspritzventil Zylinder 5 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12AF | P12AF | P12AF Einspritzventil Zylinder 6 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12B0 | P12B0 | P12B0 Einspritzventil Zylinder 7 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12B1 | P12B1 | P12B1 Einspritzventil Zylinder 8 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12B2 | P12B2 | P12B2 Einspritzventil Zylinder 9 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12B3 | P12B3 | P12B3 Einspritzventil Zylinder 10 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12B4 | P12B4 | P12B4 Einspritzventil Zylinder 11 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12B5 | P12B5 | P12B5 Einspritzventil Zylinder 12 - Kleinstmengenadaption außerhalb Gültigkeitsbereich |
| 0x12B6 | P12B6 | P12B6 Ladedrucksensor, Nachlaufdiagnose (Bank 2) - Druck zu niedrig |
| 0x12B7 | P12B7 | P12B7 Ladedrucksensor, Nachlaufdiagnose (Bank 2) - Druck zu hoch |
| 0x12B8 | P12B8 | P12B8 Umgebungsdrucksensor, Nachlaufdiagnose - Druck zu niedrig |
| 0x12B9 | P12B9 | P12B9 Umgebungsdrucksensor, Nachlaufdiagnose - Druck zu hoch |
| 0x12BA | P12BA | P12BA Differenzdrucksensor Saugrohr, Nachlaufdiagnose - Druck unplausibel |
| 0x12BB | P12BB | P12BB Zylinder 1 Gleichstellungsfehler - Gemisch zu mager |
| 0x12BC | P12BC | P12BC Zylinder 1 Gleichstellungsfehler - Gemisch zu fett |
| 0x12BD | P12BD | P12BD Zylinder 2 Gleichstellungsfehler - Gemisch zu mager |
| 0x12BE | P12BE | P12BE Zylinder 2 Gleichstellungsfehler - Gemisch zu fett |
| 0x12BF | P12BF | P12BF Zylinder 3 Gleichstellungsfehler - Gemisch zu mager |
| 0x12C0 | P12C0 | P12C0 Zylinder 3 Gleichstellungsfehler - Gemisch zu fett |
| 0x12C1 | P12C1 | P12C1 Zylinder 4 Gleichstellungsfehler - Gemisch zu mager |
| 0x12C2 | P12C2 | P12C2 Zylinder 4 Gleichstellungsfehler - Gemisch zu fett |
| 0x12C3 | P12C3 | P12C3 Zylinder 5 Gleichstellungsfehler - Gemisch zu mager |
| 0x12C4 | P12C4 | P12C4 Zylinder 5 Gleichstellungsfehler - Gemisch zu fett |
| 0x12C5 | P12C5 | P12C5 Zylinder 6 Gleichstellungsfehler - Gemisch zu mager |
| 0x12C6 | P12C6 | P12C6 Zylinder 6 Gleichstellungsfehler - Gemisch zu fett |
| 0x12C7 | P12C7 | P12C7 Zylinder 7 Gleichstellungsfehler - Gemisch zu mager |
| 0x12C8 | P12C8 | P12C8 Zylinder 7 Gleichstellungsfehler - Gemisch zu fett |
| 0x12C9 | P12C9 | P12C9 Zylinder 8 Gleichstellungsfehler - Gemisch zu mager |
| 0x12CA | P12CA | P12CA Zylinder 8 Gleichstellungsfehler - Gemisch zu fett |
| 0x12CB | P12CB | P12CB Zylinder 9 Gleichstellungsfehler - Gemisch zu mager |
| 0x12CC | P12CC | P12CC Zylinder 9 Gleichstellungsfehler - Gemisch zu fett |
| 0x12CD | P12CD | P12CD Zylinder 10 Gleichstellungsfehler - Gemisch zu mager |
| 0x12CE | P12CE | P12CE Zylinder 10 Gleichstellungsfehler - Gemisch zu fett |
| 0x12CF | P12CF | P12CF Zylinder 11 Gleichstellungsfehler - Gemisch zu mager |
| 0x12D0 | P12D0 | P12D0 Zylinder 11 Gleichstellungsfehler - Gemisch zu fett |
| 0x12D1 | P12D1 | P12D1 Zylinder 12 Gleichstellungsfehler - Gemisch zu mager |
| 0x12D2 | P12D2 | P12D2 Zylinder 12 Gleichstellungsfehler - Gemisch zu fett |
| 0x12D4 | P12D4 | P12D4 NOx-Sensor-Selbsttest - Grenzwert 1 überschritten |
| 0x12D5 | P12D5 | P12D5 NOx-Sensor-Selbsttest - Grenzwert 2 überschritten |
| 0x12D6 | P12D6 | P12D6 NOx-Sensor - Versionsfehler |
| 0x12DC | P12DC | P12DC Einspritzventil Zylinder 11 - Offset gelernte Adaption am unteren Limit |
| 0x12DD | P12DD | P12DD Einspritzventil Zylinder 11 - Offset gelernte Adaption am oberen Limit |
| 0x12DE | P12DE | P12DE Einspritzventil Zylinder 12 - Offset gelernte Adaption am unteren Limit |
| 0x12DF | P12DF | P12DF Einspritzventil Zylinder 12 - Offset gelernte Adaption am oberen Limit |
| 0x12E0 | P12E0 | P12E0 Gemischregelung (Bank 1) - zylinderselektive Gesamtadaption am unteren Limit |
| 0x12E1 | P12E1 | P12E1 Gemischregelung (Bank 1) - zylinderselektive Gesamtadaption am oberen Limit |
| 0x12E2 | P12E2 | P12E2 Gemischregelung (Bank 2) - zylinderselektive Gesamtadaption am unteren Limit |
| 0x12E3 | P12E3 | P12E3 Gemischregelung (Bank 2) - zylinderselektive Gesamtadaption am oberen Limit |
| 0x12E4 | P12E4 | P12E4 Zylinder 1 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12E5 | P12E5 | P12E5 Zylinder 1 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12E6 | P12E6 | P12E6 Zylinder 2 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12E7 | P12E7 | P12E7 Zylinder 2 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12E8 | P12E8 | P12E8 Zylinder 3 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12E9 | P12E9 | P12E9 Zylinder 3 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12EA | P12EA | P12EA Zylinder 4 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12EB | P12EB | P12EB Zylinder 4 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12EC | P12EC | P12EC Zylinder 5 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12ED | P12ED | P12ED Zylinder 5 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12EE | P12EE | P12EE Zylinder 6 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12EF | P12EF | P12EF Zylinder 6 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12F0 | P12F0 | P12F0 Zylinder 7 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12F1 | P12F1 | P12F1 Zylinder 7 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12F2 | P12F2 | P12F2 Zylinder 8 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12F3 | P12F3 | P12F3 Zylinder 8 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12F4 | P12F4 | P12F4 Zylinder 9 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12F5 | P12F5 | P12F5 Zylinder 9 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12F6 | P12F6 | P12F6 Zylinder 10 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12F7 | P12F7 | P12F7 Zylinder 10 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12F8 | P12F8 | P12F8 Zylinder 11 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12F9 | P12F9 | P12F9 Zylinder 11 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12FA | P12FA | P12FA Zylinder 12 - Gemischregelung Gesamtadaption am unteren Limit |
| 0x12FB | P12FB | P12FB Zylinder 12 - Gemischregelung Gesamtadaption am oberen Limit |
| 0x12FC | P12FC | P12FC Hochdruckeinspritzung Relais Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x12FD | P12FD | P12FD Hochdruckeinspritzung Relais Schaltkreis - niedrig |
| 0x12FE | P12FE | P12FE Hochdruckeinspritzung Relais Schaltkreis - hoch |
| 0x1300 | P1300 | P1300 Nockenwellengeber Einlass (Bank 1) - Segmentzeitfehler |
| 0x1301 | P1301 | P1301 Zündkreisüberwachung Zyl. 1 - Brenndauer zu klein |
| 0x1302 | P1302 | P1302 Zündkreisüberwachung Zyl. 2 - Brenndauer zu klein |
| 0x1303 | P1303 | P1303 Zündkreisüberwachung Zyl. 3 - Brenndauer zu klein |
| 0x1304 | P1304 | P1304 Zündkreisüberwachung Zyl. 4 - Brenndauer zu klein |
| 0x1305 | P1305 | P1305 Zündkreisüberwachung Zyl. 5 - Brenndauer zu klein |
| 0x1306 | P1306 | P1306 Zündkreisüberwachung Zyl. 6 - Brenndauer zu klein |
| 0x1307 | P1307 | P1307 Zündkreisüberwachung Zyl. 7 - Brenndauer zu klein |
| 0x1308 | P1308 | P1308 Zündkreisüberwachung Zyl. 8 - Brenndauer zu klein |
| 0x1309 | P1309 | P1309 Zündkreisüberwachung Zyl. 9 - Brenndauer zu klein |
| 0x130A | P130A | P130A Nockenwellengeber Auslass (Bank 1) - Segmentzeitfehler |
| 0x130B | P130B | P130B Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 1 - niedrig |
| 0x130C | P130C | P130C Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 2 - niedrig |
| 0x130D | P130D | P130D Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 3 - niedrig |
| 0x130E | P130E | P130E Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 4 - niedrig |
| 0x130F | P130F | P130F Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 5 - niedrig |
| 0x1310 | P1310 | P1310 Zündkreisüberwachung Zyl. 10 - Brenndauer zu klein |
| 0x1311 | P1311 | P1311 Zündkreisüberwachung Zyl. 11 - Brenndauer zu klein |
| 0x1312 | P1312 | P1312 Zündkreisüberwachung Zyl. 12 - Brenndauer zu klein |
| 0x1313 | P1313 | P1313 Nockenwellenversteller Einlass Schaltkreis - Plausibilitätsfehler (S54 bis 09/00: Nockenwellengeber Auslass Schaltkreis (Bank 1 ) - sporadisch) |
| 0x1314 | P1314 | P1314 Gemischabweichung entdeckt bei niedrigem Kraftstoffstand |
| 0x1315 | P1315 | P1315 Nockenwellengeber Einlass (Bank 1) - Signaldauer nach Initialisierung |
| 0x1316 | P1316 | P1316 Nockenwellengeber Einlass (Bank 1) - Signaldauer während Initialisierung |
| 0x1317 | P1317 | P1317 Nockenwellenversteller Auslass - Plausibilitätsfehler |
| 0x1318 | P1318 | P1318 Nockenwellengeber Auslass (Bank 1) - Signaldauer nach Initialisierung |
| 0x1319 | P1319 | P1319 Nockenwellengeber Auslass (Bank 1) - Signaldauer während Initialisierung |
| 0x131A | P131A | P131A Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 6 - niedrig |
| 0x131B | P131B | P131B Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 7 - niedrig |
| 0x131C | P131C | P131C Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 8 - niedrig |
| 0x131D | P131D | P131D Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 9 - niedrig |
| 0x131E | P131E | P131E Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 10 - niedrig |
| 0x131F | P131F | P131F Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 1 - hoch |
| 0x1320 | P1320 | P1320 Schwungradadaption für Aussetzererkennung - Messbereichsproblem |
| 0x1321 | P1321 | P1321 Schwungradadaption für Aussetzererkennung - Leistungsproblem |
| 0x1322 | P1322 | P1322 Nockenwelle Einlass (Bank 1) - Abstellposition nicht erreicht |
| 0x1323 | P1323 | P1323 Nockenwelle Einlass (Bank 1) - Startposition nicht erreicht |
| 0x1324 | P1324 | P1324 Nockenwelle Auslass (Bank 1) - Abstellposition nicht erreicht |
| 0x1325 | P1325 | P1325 Nockenwelle Auslass (Bank 1) - Startposition nicht erreicht |
| 0x1326 | P1326 | P1326 Nockenwellensteuerung Einlass (Bank 1) - Referenzposition außerhalb Gültigkeitsbereich |
| 0x1327 | P1327 | P1327 Klopfsensor 2 Schaltkreis (Bank 1) - niedrig |
| 0x1328 | P1328 | P1328 Klopfsensor 2 Schaltkreis (Bank 1) - hoch |
| 0x1329 | P1329 | P1329 Klopfsensor 3 Schaltkreis - niedrig |
| 0x132A | P132A | P132A Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 2 - hoch |
| 0x132B | P132B | P132B Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 3 - hoch |
| 0x132C | P132C | P132C Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 4 - hoch |
| 0x132D | P132D | P132D Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 5 - hoch |
| 0x132E | P132E | P132E Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 6 - hoch |
| 0x132F | P132F | P132F Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 7 - hoch |
| 0x1330 | P1330 | P1330 Klopfsensor 3 Schaltkreis - hoch |
| 0x1331 | P1331 | P1331 Nockenwellensteuerung Auslass (Bank 1) - Referenzposition außerhalb Gültigkeitsbereich |
| 0x1332 | P1332 | P1332 Klopfsensor 4 Schaltkreis - niedrig |
| 0x1333 | P1333 | P1333 Klopfsensor 4 Schaltkreis - hoch |
| 0x1334 | P1334 | P1334 Klopfsensor 5 Schaltkreis - niedrig |
| 0x1335 | P1335 | P1335 Klopfsensor 5 Schaltkreis - hoch |
| 0x1336 | P1336 | P1336 Klopfsensor 6 Schaltkreis - niedrig |
| 0x1337 | P1337 | P1337 Klopfsensor 6 Schaltkreis - hoch |
| 0x1338 | P1338 | P1338 Nockenwellengeber Einlass (Bank 1) - Phasenposition fehlerhaft |
| 0x1339 | P1339 | P1339 Nockenwellengeber Auslass (Bank 1) - Phasenposition fehlerhaft |
| 0x133A | P133A | P133A Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 8 - hoch |
| 0x133B | P133B | P133B Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 9 - hoch |
| 0x133C | P133C | P133C Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 10 - hoch |
| 0x133D | P133D | P133D Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 1 - Leitungsunterbrechung |
| 0x133E | P133E | P133E Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 2 - Leitungsunterbrechung |
| 0x133F | P133F | P133F Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 3 - Leitungsunterbrechung |
| 0x1340 | P1340 | P1340 Aussetzer im Start - Mehrfachfehler |
| 0x1341 | P1341 | P1341 Aussetzer mit Kraftstoffabschaltung - Mehrfachfehler |
| 0x1342 | P1342 | P1342 Aussetzer im Start Zylinder 1 |
| 0x1343 | P1343 | P1343 Aussetzer mit Kraftstoffabschaltung Zylinder 1 |
| 0x1344 | P1344 | P1344 Aussetzer im Start Zylinder 2 |
| 0x1345 | P1345 | P1345 Aussetzer mit Kraftstoffabschaltung Zylinder 2 |
| 0x1346 | P1346 | P1346 Aussetzer im Start Zylinder 3 |
| 0x1347 | P1347 | P1347 Aussetzer mit Kraftstoffabschaltung Zylinder 3 |
| 0x1348 | P1348 | P1348 Aussetzer im Start Zylinder 4 |
| 0x1349 | P1349 | P1349 Aussetzer mit Kraftstoffabschaltung Zylinder 4 |
| 0x134A | P134A | P134A Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 4 - Leitungsunterbrechung |
| 0x134B | P134B | P134B Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 5 - Leitungsunterbrechung |
| 0x134C | P134C | P134C Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 6 - Leitungsunterbrechung |
| 0x134D | P134D | P134D Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 7 - Leitungsunterbrechung |
| 0x134E | P134E | P134E Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 8 - Leitungsunterbrechung |
| 0x134F | P134F | P134F Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 9 - Leitungsunterbrechung |
| 0x1350 | P1350 | P1350 Aussetzer im Start Zylinder 5 |
| 0x1351 | P1351 | P1351 Aussetzer mit Kraftstoffabschaltung Zylinder 5 |
| 0x1352 | P1352 | P1352 Aussetzer im Start Zylinder 6 |
| 0x1353 | P1353 | P1353 Aussetzer mit Kraftstoffabschaltung Zylinder 6 |
| 0x1354 | P1354 | P1354 Aussetzer im Start Zylinder 7 |
| 0x1355 | P1355 | P1355 Aussetzer mit Kraftstoffabschaltung Zylinder 7 |
| 0x1356 | P1356 | P1356 Aussetzer im Start Zylinder 8 |
| 0x1357 | P1357 | P1357 Aussetzer mit Kraftstoffabschaltung Zylinder 8 |
| 0x1358 | P1358 | P1358 Aussetzer im Start Zylinder 9 |
| 0x1359 | P1359 | P1359 Aussetzer mit Kraftstoffabschaltung Zylinder 9 |
| 0x135A | P135A | P135A Ionenstrom-Steuergerät Ansteuerleitung Zündung Zylinder 10 - Leitungsunterbrechung |
| 0x135B | P135B | P135B Klopfsensor 2 Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x135C | P135C | P135C Klopfsensor 2 Schaltkreis (Bank 1) - Fehlfunktion |
| 0x135D | P135D | P135D Klopfsensor 5 Schaltkreis - Fehlfunktion |
| 0x135E | P135E | P135E Klopfsensor 6 Schaltkreis - Fehlfunktion |
| 0x135F | P135F | P135F Klopfsensor 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1360 | P1360 | P1360 Aussetzer im Start Zylinder 10 |
| 0x1361 | P1361 | P1361 Aussetzer mit Kraftstoffabschaltung Zylinder 10 |
| 0x1362 | P1362 | P1362 Aussetzer im Start Zylinder 11 |
| 0x1363 | P1363 | P1363 Aussetzer mit Kraftstoffabschaltung Zylinder 11 |
| 0x1364 | P1364 | P1364 Aussetzer im Start Zylinder 12 |
| 0x1365 | P1365 | P1365 Aussetzer mit Kraftstoffabschaltung Zylinder 12 |
| 0x1366 | P1366 | P1366 Zündspule 1 Primär-/Sekundärschaltkreis - niedrig |
| 0x1367 | P1367 | P1367 Zündspule 2 Primär-/Sekundärschaltkreis - niedrig |
| 0x1368 | P1368 | P1368 Ionenstrom (Bank 2) - Signal zu niedrig |
| 0x1369 | P1369 | P1369 Ionenstrom (Bank 2) - kein Signal |
| 0x136A | P136A | P136A Zündkreisüberwachung Bank 1 - Brenndauer zu klein |
| 0x136B | P136B | P136B Zündkreisüberwachung Bank 2 - Brenndauer zu klein |
| 0x136C | P136C | P136C Klopfregelung - Superklopfer erkannt |
| 0x136D | P136D | P136D Ionen-Zündspule Zylinder 1 |
| 0x136E | P136E | P136E Ionen-Zündspule Zylinder 2 |
| 0x136F | P136F | P136F Ionen-Zündspule Zylinder 3 |
| 0x1370 | P1370 | P1370 Ionenstrom Signalverstärkung Steuerkreis (Bank 1) - niedrig |
| 0x1371 | P1371 | P1371 Ionenstrom Signalverstärkung Steuerkreis (Bank 1) - hoch |
| 0x1372 | P1372 | P1372 Ionenstrom Signalverstärkung Steuerkreis (Bank 1) - Leitungsunterbrechung |
| 0x1373 | P1373 | P1373 Ionenstrom Signalverstärkung Steuerkreis (Bank 2) - niedrig |
| 0x1374 | P1374 | P1374 Ionenstrom Signalverstärkung Steuerkreis (Bank 2) - hoch |
| 0x1375 | P1375 | P1375 Ionenstrom Signalverstärkung Steuerkreis (Bank 2) - Leitungsunterbrechung |
| 0x1376 | P1376 | P1376 Ionen-Zündspule Zylinder 4 |
| 0x1377 | P1377 | P1377 Nockenwellengeber - Masternockenwellengeber nicht definiert |
| 0x1378 | P1378 | P1378 Steuergeräte-Selbsttest, Klopfregelung Offset (Bank 2) |
| 0x1379 | P1379 | P1379 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 2) |
| 0x137A | P137A | P137A Klopfregelung - Superklopfer durch defekte Zündspule |
| 0x137B | P137B | P137B Klopfregelung - Superklopfer durch defekten Klopfsensor |
| 0x137C | P137C | P137C Klopfregelung - Anzahl der Superklopfer zu hoch |
| 0x137D | P137D | P137D Klopfregelung - Drehmomentbegrenzung durch zu hohe Anzahl Superklopfer |
| 0x137E | P137E | P137E Klopfregelung - dauerhafte Drehmomentbegrenzung durch zu hohe Anzahl Superklopfer |
| 0x137F | P137F | P137F Klopfregelung - Kraftstoffabschaltung wegen Superklopfer |
| 0x1380 | P1380 | P1380 Steuergeräte-Selbsttest, Klopfregelung Nulltest (Bank 2) |
| 0x1381 | P1381 | P1381 Steuergeräte-Selbsttest, Klopfregelung Offset (Bank 1) |
| 0x1382 | P1382 | P1382 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 1) |
| 0x1383 | P1383 | P1383 Zündkreisüberwachung - Fehlfunktion |
| 0x1384 | P1384 | P1384 Klopfsensor 3 Schaltkreis - Fehlfunktion |
| 0x1385 | P1385 | P1385 Klopfsensor 4 Schaltkreis - Fehlfunktion |
| 0x1386 | P1386 | P1386 Steuergeräte-Selbsttest, Klopfregelung Nulltest (Bank 1) |
| 0x1387 | P1387 | P1387 Ionenstrom (Bank 1) - Signal zu niedrig |
| 0x1388 | P1388 | P1388 Ionenstrom (Bank 1) - kein Signal |
| 0x1389 | P1389 | P1389 Ionen-Zündspule Zylinder 5 |
| 0x138A | P138A | P138A Ionen-Zündspule Zylinder 6 |
| 0x138B | P138B | P138B Ionen-Zündspule Zylinder 7 |
| 0x138C | P138C | P138C Ionen-Zündspule Zylinder 8 |
| 0x138D | P138D | P138D Ionen-Zündspule Zylinder 9 |
| 0x138E | P138E | P138E Ionen-Zündspule Zylinder 10 |
| 0x138F | P138F | P138F Kurbelwellengebersignal - Synchronisationsfehler |
| 0x1390 | P1390 | P1390 Ionenstrom Spannungswahl Messschaltkreis - niedrig |
| 0x1391 | P1391 | P1391 Ionenstrom Spannungswahl Messschaltkreis - hoch |
| 0x1392 | P1392 | P1392 Ionenstrom Spannungswahl Messschaltkreis - Leitungsunterbrechung |
| 0x1393 | P1393 | P1393 Ionenstrom Spannungswahl Schaltkreis - niedrig |
| 0x1394 | P1394 | P1394 Ionenstrom Spannungswahl Schaltkreis - hoch |
| 0x1395 | P1395 | P1395 Ionenstrom Spannungswahl Schaltkreis - Leitungsunterbrechung |
| 0x1396 | P1396 | P1396 Kurbelwellengeber Segmentzeitmessung - Plausibilitätsfehler |
| 0x1397 | P1397 | P1397 Nockenwellengeber Auslass Schaltkreis (Bank 1) - Fehlfunktion |
| 0x1398 | P1398 | P1398 Ionenstrom-Steuergerät (Bank 1) - interner Fehler |
| 0x1399 | P1399 | P1399 Ionenstrom-Steuergerät (Bank 2) - interner Fehler |
| 0x139A | P139A | P139A Nockenwellengeber Einlass (Bank 2) - Segmentzeitfehler |
| 0x139B | P139B | P139B Nockenwellengeber Auslass (Bank 2) - Segmentzeitfehler |
| 0x139C | P139C | P139C Kurbelwellengeber - Pulsweitenfehler |
| 0x139D | P139D | P139D Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Impulse sporadisch/unregelmäßig im Start |
| 0x139E | P139E | P139E Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Fehlfunktion im Start |
| 0x139F | P139F | P139F Motor - Rückwärtsdrehung |
| 0x13A0 | P13A0 | P13A0 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 1 |
| 0x13A1 | P13A1 | P13A1 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 2 |
| 0x13A2 | P13A2 | P13A2 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 3 |
| 0x13A3 | P13A3 | P13A3 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 4 |
| 0x13A4 | P13A4 | P13A4 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 5 |
| 0x13A5 | P13A5 | P13A5 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 6 |
| 0x13A6 | P13A6 | P13A6 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 7 |
| 0x13A7 | P13A7 | P13A7 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 8 |
| 0x13A8 | P13A8 | P13A8 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 9 |
| 0x13A9 | P13A9 | P13A9 Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 10 |
| 0x13AA | P13AA | P13AA Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 11 |
| 0x13AB | P13AB | P13AB Klopfregelung - Kraftstoffabschaltung wegen Superklopfer Zylinder 12 |
| 0x13AC | P13AC | P13AC Klopfsensor 5 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x13AD | P13AD | P13AD Klopfsensor 6 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x13AE | P13AE | P13AE Klopfsensor 1 Schaltkreis 1 (Bank 1) - niedrig |
| 0x13AF | P13AF | P13AF Klopfsensor 1 Schaltkreis 1 (Bank 1) - hoch |
| 0x13B0 | P13B0 | P13B0 Nockenwellengebersignal Einlass (Bank 1) - Synchronisationsfehler |
| 0x13B1 | P13B1 | P13B1 Nockenwellengebersignal Einlass (Bank 2) - Synchronisationsfehler |
| 0x13B2 | P13B2 | P13B2 Nockenwellengebersignal Auslass (Bank 1) - Synchronisationsfehler |
| 0x13B3 | P13B3 | P13B3 Nockenwellengebersignal Auslass (Bank 2) - Synchronisationsfehler |
| 0x13B4 | P13B4 | P13B4 Kurbelwelle / Nockenwelle Einlass (Bank 1) - Referenzfehler |
| 0x13B5 | P13B5 | P13B5 Kurbelwelle / Nockenwelle Einlass (Bank 2) - Referenzfehler |
| 0x13B6 | P13B6 | P13B6 Kurbelwelle / Nockenwelle Auslass (Bank 1) - Referenzfehler |
| 0x13B7 | P13B7 | P13B7 Kurbelwelle / Nockenwelle Auslass (Bank 2) - Referenzfehler |
| 0x13B8 | P13B8 | P13B8 Klopfsensor 1 Schaltkreis 2 (Bank 1) - niedrig |
| 0x13B9 | P13B9 | P13B9 Klopfsensor 1 Schaltkreis 2 (Bank 1) - hoch |
| 0x13BA | P13BA | P13BA Nockenwelle Einlass (Bank 1) - Zahnsprung |
| 0x13BB | P13BB | P13BB Nockenwelle Einlass (Bank 2) - Zahnsprung |
| 0x13BC | P13BC | P13BC Nockenwelle Auslass (Bank 1) - Zahnsprung |
| 0x13BD | P13BD | P13BD Nockenwelle Auslass (Bank 2) - Zahnsprung |
| 0x13BE | P13BE | P13BE Klopfsensor 2 Schaltkreis 1 (Bank 1) - niedrig |
| 0x13BF | P13BF | P13BF Klopfsensor 2 Schaltkreis 1 (Bank 1) - hoch |
| 0x13C0 | P13C0 | P13C0 Nockenwelle Einlass - klemmt |
| 0x13C1 | P13C1 | P13C1 Zündkreisüberwachung Zyl. 1 - Fehlfunktion |
| 0x13C2 | P13C2 | P13C2 Zündkreisüberwachung Zyl. 2 - Fehlfunktion |
| 0x13C3 | P13C3 | P13C3 Zündkreisüberwachung Zyl. 3 - Fehlfunktion |
| 0x13C4 | P13C4 | P13C4 Zündkreisüberwachung Zyl. 4 - Fehlfunktion |
| 0x13C5 | P13C5 | P13C5 Zündkreisüberwachung Zyl. 5 - Fehlfunktion |
| 0x13C6 | P13C6 | P13C6 Zündkreisüberwachung Zyl. 6 - Fehlfunktion |
| 0x13C7 | P13C7 | P13C7 Klopfsensor 2 Schaltkreis 2 (Bank 1) - niedrig |
| 0x13C8 | P13C8 | P13C8 Klopfsensor 2 Schaltkreis 2 (Bank 1) - hoch |
| 0x13C9 | P13C9 | P13C9 Nockenwelle Auslass - klemmt |
| 0x13CA | P13CA | P13CA Nockenwelle  Einlass - Montage fehlerhaft |
| 0x13CB | P13CB | P13CB Nockenwelle  Auslass - Montage fehlerhaft |
| 0x13CC | P13CC | P13CC Zündung und Einspritzventile Relais Spannungsversorgungsschaltkreis Zündung - Fehlfunktion |
| 0x13CD | P13CD | P13CD Zündung und Einspritzventile Relais Spannungsversorgungsschaltkreis Einspritzung - Fehlfunktion |
| 0x13CE | P13CE | P13CE Kurbelwelle - Abstellposition unplausibel |
| 0x13EA | P13EA | P13EA Kaltstart Zündwinkelverstellung - Leistungsproblem in Teillast |
| 0x1400 | P1400 | P1400 E-Katalysator (Bank 1) - Batteriespannung oder Strom zu gering beim Heizen |
| 0x1401 | P1401 | P1401 E-Katalysator (Bank 1) - Strom zu groß beim Heizen |
| 0x1402 | P1402 | P1402 E-Katalysator Leistungsschalter (Bank 1) - Übertemperatur |
| 0x1403 | P1403 | P1403 Aktivkohlefilterabsperrventil Ansteuerung - elektrischer Fehler (M73: E-Katalysator (Bank 2) - Batteriespannung oder Strom zu gering beim Heizen) |
| 0x1404 | P1404 | P1404 E-Katalysator (Bank 2) - Strom zu groß beim Heizen |
| 0x1405 | P1405 | P1405 E-Katalysator Leistungsschalter (Bank 2) - Übertemperatur |
| 0x1406 | P1406 | P1406 E-Katalysator Steuergerät - interner Prüfsummenfehler/ROM |
| 0x1407 | P1407 | P1407 Kraftstoff-Füllstandssignal 1 - Signal fehlerhaft |
| 0x1408 | P1408 | P1408 Kraftstoff-Füllstandssignal 2 - Signal fehlerhaft |
| 0x1409 | P1409 | P1409 Kraftstoff-Füllstand 1 - CAN Fehler |
| 0x140A | P140A | P140A Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering |
| 0x140B | P140B | P140B Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering und Durchsatz Bank 1 zu gering |
| 0x140C | P140C | P140C Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering und Durchsatz Bank 2 zu gering |
| 0x140D | P140D | P140D Sekundärluftventil, elektromagnetisch - klemmt offen |
| 0x140E | P140E | P140E Zylindereinspritzabschaltung - Tankfüllstand zu gering |
| 0x140F | P140F | P140F Katalysator Konvertierung im Schichtbetrieb (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x1410 | P1410 | P1410 Kraftstoff-Füllstandssignal Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1411 | P1411 | P1411 Sekundärluftpumpe - keine Aktivität festzustellen |
| 0x1412 | P1412 | P1412 Sekundärluftpumpe/Sekundärluftventil - grobe Undichtigkeit |
| 0x1413 | P1413 | P1413 Sekundärluftpumpenrelais - Signal niedrig |
| 0x1414 | P1414 | P1414 Sekundärluftpumpenrelais - Signal hoch |
| 0x1415 | P1415 | P1415 Luftmassen- oder Luftmengendurchsatz - zu gering |
| 0x1416 | P1416 | P1416 Sekundärluftventil - klemmt offen |
| 0x1417 | P1417 | P1417 Drosselklappensteuerung (Bank 1) - fehlerhafte Luftzufuhr |
| 0x1418 | P1418 | P1418 Sekundärluftventil/Sekundärluftschlauch - blockiert |
| 0x1419 | P1419 | P1419 Sekundärluftmassenmesser Schaltkreis - Fehlfunktion |
| 0x141A | P141A | P141A Abgasdruckregelventil 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x141B | P141B | P141B Abgasdruckregelventil 2 - Messbereichs- oder Leistungsproblem |
| 0x141C | P141C | P141C Abgasdruckregelventil 2 - niedrig |
| 0x141D | P141D | P141D Abgasdruckregelventil 2 - hoch |
| 0x141E | P141E | P141E Abgasdruckregelventil 2 - sporadisch |
| 0x141F | P141F | P141F Katalysator Konvertierung im Schichtbetrieb (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x1420 | P1420 | P1420 Sekundärluftventil - elektrischer Fehler |
| 0x1421 | P1421 | P1421 Sekundärluftsystem (Bank 2) - Fehlfunktion |
| 0x1422 | P1422 | P1422 Tankentlüftungssystem (Bank 2) - fehlerhafter Durchsatz |
| 0x1423 | P1423 | P1423 Sekundärluftsystem (Bank 1) - Fehlfunktion |
| 0x1424 | P1424 | P1424 Luftmassen- oder Luftmengendurchsatz - zu groß |
| 0x1425 | P1425 | P1425 Drallklappe Schaltkreis - hoch |
| 0x1426 | P1426 | P1426 Drallklappe Schaltkreis - niedrig |
| 0x1427 | P1427 | P1427 Drallklappe Schaltkreis - Leitungsunterbrechung |
| 0x1428 | P1428 | P1428 Drallklappe Endstufe - Übertemperatur |
| 0x1429 | P1429 | P1429 Diagnosemodul Tankleckage (DM-TL) Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x142A | P142A | P142A Kurbelgehäuseentlüftung Heizungsrelais Schaltkreis - hoch |
| 0x142B | P142B | P142B Kurbelgehäuseentlüftung Heizungsrelais Schaltkreis - niedrig |
| 0x142C | P142C | P142C Kurbelgehäuseentlüftung Heizungsrelais Schaltkreis - Leitungsunterbrechung |
| 0x142D | P142D | P142D Kraftstoff-Füllstandssensor - klemmt |
| 0x142E | P142E | P142E Zylindereinspritzabschaltung - Druck zu niedrig im Hochdruck-System |
| 0x142F | P142F | P142F Zylindereinspritzabschaltung - Druck zu niedrig im Niederdruck-System |
| 0x1430 | P1430 | P1430 Diagnosemodul Tankleckage (DM-TL) Heizungssteuerkreis - niedrig |
| 0x1431 | P1431 | P1431 Diagnosemodul Tankleckage (DM-TL) Heizungssteuerkreis - hoch |
| 0x1432 | P1432 | P1432 Sekundärluftsystem - Durchsatzfehler erkannt |
| 0x1433 | P1433 | P1433 Kraftstoff-Füllstand 2 - CAN Fehler |
| 0x1434 | P1434 | P1434 Diagnosemodul Tankleckage (DM-TL) - Fehlfunktion |
| 0x1435 | P1435 | P1435 Tankentlüftungssystem (Bank 2) - Fehlfunktion |
| 0x1436 | P1436 | P1436 Leckdiagnosepumpe Steuerkreis - Leitungsunterbrechung |
| 0x1437 | P1437 | P1437 Leckdiagnosepumpe Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1438 | P1438 | P1438 Tankentlüftungsventil Schaltkreis - Leitungsunterbrechung |
| 0x1439 | P1439 | P1439 Tankentlüftungsventil Schaltkreis - niedrig |
| 0x143A | P143A | P143A Direkte Ozon-Reduzierung Katalysatortemperaturfühler  - Manipulation Einbauort |
| 0x143B | P143B | P143B Direkte Ozon-Reduzierung Katalysatortemperaturfühler  - falscher Code |
| 0x143C | P143C | P143C Direkte Ozon-Reduzierung Katalysatortemperatur / Kühlmitteltemperatur Kühleraustritt - Korrelationsfehler |
| 0x143D | P143D | P143D Direkte Ozon-Reduzierung Katalysatortemperaturfühler Kommunikation - Plausibilitätsfehler |
| 0x143E | P143E | P143E Direkte Ozon-Reduzierung Katalysatortemperaturfühler - Gradient zu flach |
| 0x1440 | P1440 | P1440 Tankentlüftungsventil Schaltkreis - hoch |
| 0x1441 | P1441 | P1441 Leckdiagnosepumpe Steuerkreis - Leitungsunterbrechung |
| 0x1442 | P1442 | P1442 Leckdiagnosepumpe Steuerkreis - niedrig |
| 0x1443 | P1443 | P1443 Leckdiagnosepumpe Steuerkreis - hoch |
| 0x1444 | P1444 | P1444 Diagnosemodul Tankleckage (DM-TL) Pumpe Steuerkreis - Leitungsunterbrechung |
| 0x1445 | P1445 | P1445 Diagnosemodul Tankleckage (DM-TL) Pumpe Steuerkreis - niedrig |
| 0x1446 | P1446 | P1446 Diagnosemodul Tankleckage (DM-TL) Pumpe Steuerkreis - hoch |
| 0x1447 | P1447 | P1447 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom bei Ventilprüfung zu groß |
| 0x1448 | P1448 | P1448 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom zu klein |
| 0x1449 | P1449 | P1449 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom zu groß |
| 0x144A | P144A | P144A Kraftstoff-Füllstand / Tankinhalt - Korrelationsfehler |
| 0x144B | P144B | P144B Kraftstoff-Füllstand / Kraftstoffverbrauch - Korrelationsfehler |
| 0x144C | P144C | P144C Motorlüfter Sicherungsrelais Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x144D | P144D | P144D Motorlüfter Sicherungsrelais Schaltkreis - niedrig |
| 0x144E | P144E | P144E Motorlüfter Sicherungsrelais Schaltkreis - hoch |
| 0x144F | P144F | P144F Motorlüfter Sicherungsrelais Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1450 | P1450 | P1450 Diagnosemodul Tankleckage (DM-TL) Ventil Steuerkreis - Leitungsunterbrechung |
| 0x1451 | P1451 | P1451 Diagnosemodul Tankleckage (DM-TL) Ventil Steuerkreis - niedrig |
| 0x1452 | P1452 | P1452 Diagnosemodul Tankleckage (DM-TL) Ventil Steuerkreis - hoch |
| 0x1453 | P1453 | P1453 Sekundärluftpumpenrelais Steuerkreis - elektrischer Fehler |
| 0x1454 | P1454 | P1454 Sekundärluftpumpe mit Vorwiderstand - elektrischer Fehler |
| 0x1455 | P1455 | P1455 Drosselklappensteuerung (Bank 2) - fehlerhafte Luftzufuhr |
| 0x1456 | P1456 | P1456 E-Katalysator Heizung Leistungspfad (Bank 1) - Leitungsunterbrechung |
| 0x1457 | P1457 | P1457 E-Katalysator Temperaturfühler Leistungsschalter (Bank 1) - elektrischer Fehler |
| 0x1459 | P1459 | P1459 E-Katalysator Heizung Leistungspfad (Bank 2) - Leitungsunterbrechung |
| 0x145A | P145A | P145A Sekundärluftmassenmesser/Drucksensor Initialisierung (Bank 1) - Druck außerhalb gültigem Bereich |
| 0x145B | P145B | P145B Sekundärluftmassenmesser/Drucksensor Initialisierung (Bank 2) - Druck außerhalb gültigem Bereich |
| 0x145C | P145C | P145C Sekundärluftmassenmesser/Drucksensor Initialisierung (Bank 1) - Druckdifferenz zwischen 2 Fahrzyklen |
| 0x145D | P145D | P145D Sekundärluftmassenmesser/Drucksensor Initialisierung (Bank 2) - Druckdifferenz zwischen 2 Fahrzyklen |
| 0x145E | P145E | P145E Sekundärluftpumpe (Bank 1) - Leistung zu niedrig |
| 0x145F | P145F | P145F Sekundärluftpumpe (Bank 2) - Leistung zu niedrig |
| 0x1460 | P1460 | P1460 E-Katalysator Temperaturfühler Leistungsschalter (Bank 2) - elektrischer Fehler |
| 0x1461 | P1461 | P1461 E-Katalysator Gatespannung - Signal niedrig |
| 0x1462 | P1462 | P1462 E-Katalysator Steuergerät - interner Prüfsummenfehler/EEPROM |
| 0x1463 | P1463 | P1463 E-Katalysator Batterietemperaturfühler 1 - elektrischer Fehler |
| 0x1464 | P1464 | P1464 E-Katalysator Batterietemperaturfühler 2 - elektrischer Fehler |
| 0x1465 | P1465 | P1465 E-Katalysator Batterietemperaturfühler 1 oder 2 - Plausibilitätsfehler |
| 0x1466 | P1466 | P1466 E-Katalysator Temperaturfühler Leistungsschalter - Plausibilitätsfehler |
| 0x1467 | P1467 | P1467 E-Katalysator Vergleich der Batteriespannungen der Leistungsschalter - Plausibilitätsfehler |
| 0x1468 | P1468 | P1468 E-Katalysator Batterietrennschalter - Plausibilitätsfehler |
| 0x146A | P146A | P146A Katalysator (Bank 1) - defekt |
| 0x146B | P146B | P146B Katalysator (Bank 2) - defekt |
| 0x146C | P146C | P146C Sekundärluftleitung (Bank 1) - undicht |
| 0x146D | P146D | P146D Sekundärluftleitung (Bank 2) - undicht |
| 0x1470 | P1470 | P1470 Leckdiagnosepumpe Steuerkreis - elektrischer Fehler |
| 0x1471 | P1471 | P1471 Leckdiagnosepumpe Steuerkreis - Leitungsunterbrechung |
| 0x1472 | P1472 | P1472 Diagnosemodul Tankleckage (DM-TL) Ventil Ansteuerung - elektrischer Fehler |
| 0x1473 | P1473 | P1473 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom Plausibilitätsfehler |
| 0x1474 | P1474 | P1474 Leckdiagnosepumpe Reed Switch - schließt nicht |
| 0x1475 | P1475 | P1475 Leckdiagnosepumpe Reed Switch - nicht geschlossen |
| 0x1476 | P1476 | P1476 Leckdiagnosepumpe - blockierte Leitung (M52 MJ99/00: Leckdiagnosepumpe Reed Switch - Fehlfunktion) |
| 0x1477 | P1477 | P1477 Leckdiagnosepumpe Reed Switch - öffnet nicht |
| 0x1478 | P1478 | P1478 Tankentlüftungssystem - sehr kleines Leck entdeckt |
| 0x147A | P147A | P147A Tankentlüftungssystem Drucksensor/-schalter - Druck unplausibel |
| 0x147B | P147B | P147B Tankentlüftungssystem Drucksensor/-schalter - Framefehler |
| 0x147C | P147C | P147C Tankentlüftungssystem Drucksensor/-schalter - mechanischer Fehler |
| 0x1481 | P1481 | P1481 Motorlüfter Relais 1 Steuerkreis - niedrig |
| 0x1482 | P1482 | P1482 Motorlüfter Relais 1 Steuerkreis - hoch |
| 0x1483 | P1483 | P1483 Diagnosemodul Tankleckage (DM-TL) Heizungssteuerkreis  - hoch |
| 0x1484 | P1484 | P1484 Motorlüfter Relais 2 Steuerkreis - niedrig |
| 0x1485 | P1485 | P1485 Motorlüfter Relais 2 Steuerkreis - hoch |
| 0x1487 | P1487 | P1487 Motorlüfter Relais 3 Steuerkreis - niedrig |
| 0x1488 | P1488 | P1488 Motorlüfter Relais 3 Steuerkreis - hoch |
| 0x148A | P148A | P148A Tankentlüftungssystem Absperrventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x148B | P148B | P148B Tankentlüftungssystem Absperrventil Schaltkreis - niedrig |
| 0x148C | P148C | P148C Tankentlüftungssystem Absperrventil Schaltkreis - hoch |
| 0x148D | P148D | P148D Tankentlüftungssystem Absperrventil Schaltkreis - Kurzschluss |
| 0x148E | P148E | P148E Tankentlüftungssystem Absperrventil - klemmt offen |
| 0x148F | P148F | P148F Tankentlüftungssystem Absperrventil - klemmt geschlossen |
| 0x1490 | P1490 | P1490 Abgastemperaturfühler 1 - elektrischer Fehler |
| 0x1491 | P1491 | P1491 Abgasrückführung (Bank 2) - zu geringer Durchsatz erkannt |
| 0x1492 | P1492 | P1492 Abgasrückführung (Bank 2) - zu hoher Durchsatz erkannt |
| 0x1495 | P1495 | P1495 Umgebungsdrucksensor - elektrischer Fehler |
| 0x1497 | P1497 | P1497 Leckluft nach Drosselklappe |
| 0x1498 | P1498 | P1498 Leckluft nach Kompressor |
| 0x1499 | P1499 | P1499 Luftfilter - Leckage |
| 0x14A0 | P14A0 | P14A0 Abgasgegendrucksensor Schaltkreis (Bank 1, vor Partikelfilter) - niedrig |
| 0x14A1 | P14A1 | P14A1 Abgasgegendrucksensor Schaltkreis (Bank 1, vor Partikelfilter) - hoch |
| 0x14A2 | P14A2 | P14A2 Abgasgegendrucksensor Schaltkreis (Bank 1, vor Partikelfilter) - Messbereichs- oder Leistungsproblem |
| 0x14A3 | P14A3 | P14A3 Abgasgegendrucksensor (Bank 1, vor Partikelfilter) / Ladedrucksensor / Umgebungsdrucksensor - Korrelationsfehler  |
| 0x14A4 | P14A4 | P14A4 Abgastemperaturfühler Schaltkreis (Bank 1, vor Dieselpartikelfilter) - niedrig |
| 0x14A5 | P14A5 | P14A5 Abgastemperaturfühler Schaltkreis (Bank 1, vor Dieselpartikelfilter) - hoch |
| 0x14A6 | P14A6 | P14A6 Partikelfilter (Bank 1) - Strömungswiderstand niedrig |
| 0x14A7 | P14A7 | P14A7 Partikelfilter (Bank 1) - Strömungswiderstand hoch |
| 0x14B0 | P14B0 | P14B0 Abgasgegendrucksensor Schaltkreis (Bank 2, vor Partikelfilter) - niedrig |
| 0x14B1 | P14B1 | P14B1 Abgasgegendrucksensor Schaltkreis (Bank 2, vor Partikelfilter) - hoch |
| 0x14B2 | P14B2 | P14B2 Abgasgegendrucksensor Schaltkreis (Bank 2, vor Partikelfilter) - Messbereichs- oder Leistungsproblem |
| 0x14B3 | P14B3 | P14B3 Abgasgegendrucksensor (Bank 2, vor Partikelfilter) / Ladedrucksensor / Umgebungsdrucksensor - Korrelationsfehler  |
| 0x14B4 | P14B4 | P14B4 Abgastemperaturfühler Schaltkreis (Bank 2, vor Dieselpartikelfilter) - niedrig |
| 0x14B5 | P14B5 | P14B5 Abgastemperaturfühler Schaltkreis (Bank 2, vor Dieselpartikelfilter) - hoch |
| 0x14B6 | P14B6 | P14B6 Partikelfilter (Bank 2) - Strömungswiderstand niedrig |
| 0x14B7 | P14B7 | P14B7 Partikelfilter (Bank 2) - Strömungswiderstand hoch |
| 0x14C0 | P14C0 | P14C0 Motorlüfter 1 - mechanischer Defekt oder Hardwaredefekt |
| 0x14C1 | P14C1 | P14C1 Gesteuerte Luftführung - mechanischer Fehler oder Hardwaredefekt |
| 0x14C2 | P14C2 | P14C2 DISA (differenzierte Sauganlage) Steller 1 - mechanischer Defekt oder Hardwaredefekt |
| 0x14C3 | P14C3 | P14C3 DISA (differenzierte Sauganlage) Steller 2 - mechanischer Defekt oder Hardwaredefekt |
| 0x14C4 | P14C4 | P14C4 Gesteuerte Luftführung oben - mechanischer Fehler |
| 0x14C5 | P14C5 | P14C5 Gesteuerte Luftführung oben - Hardwaredefekt |
| 0x14C6 | P14C6 | P14C6 Gesteuerte Luftführung unten - elektrischer Fehler |
| 0x14C7 | P14C7 | P14C7 Motorlüfter 2 - mechanischer Defekt oder Hardwaredefekt |
| 0x14D0 | P14D0 | P14D0 Niederdruck-Abgasrückführung Kühler - Wirkungsgrad unter Schwellwert |
| 0x1500 | P1500 | P1500 Leerlaufsteller - klemmt offen |
| 0x1501 | P1501 | P1501 Leerlaufsteller - klemmt geschlossen |
| 0x1502 | P1502 | P1502 Leerlaufsteller schließende Spule Steuerkreis - hoch |
| 0x1503 | P1503 | P1503 Leerlaufsteller schließende Spule Steuerkreis - niedrig |
| 0x1504 | P1504 | P1504 Leerlaufsteller schließende Spule Steuerkreis - Leitungsunterbrechung |
| 0x1505 | P1505 | P1505 Leerlaufsteller schließende Spule Steuerkreis - elektrischer Fehler |
| 0x1506 | P1506 | P1506 Leerlaufsteller öffnende Spule Steuerkreis - hoch |
| 0x1507 | P1507 | P1507 Leerlaufsteller öffnende Spule Steuerkreis - niedrig |
| 0x1508 | P1508 | P1508 Leerlaufsteller öffnende Spule Steuerkreis - Leitungsunterbrechung |
| 0x1509 | P1509 | P1509 Leerlaufsteller öffnende Spule Steuerkreis - elektrischer Fehler |
| 0x150A | P150A | P150A Batteriesensor BSD (Bitserielle Datenschnittstelle) erweiterte Kommunikation - Fehlfunktion |
| 0x150B | P150B | P150B Batteriesensor BSD (Bitserielle Datenschnittstelle) Kommunikation - Fehlfunktion |
| 0x150C | P150C | P150C Batteriesensor - Firmware unplausibel |
| 0x150D | P150D | P150D Batteriesensor - Temperaturfehler |
| 0x150E | P150E | P150E Batteriesensor - Spannungsfehler |
| 0x150F | P150F | P150F Batteriesensor - Stromfehler |
| 0x1510 | P1510 | P1510 Leerlaufsteller - klemmt offen oder geschlossen |
| 0x1511 | P1511 | P1511 DISA (differenzierte Sauganlage) - elektrischer Fehler |
| 0x1512 | P1512 | P1512 DISA (differenzierte Sauganlage) Steuerkreis - niedrig |
| 0x1513 | P1513 | P1513 DISA (differenzierte Sauganlage) Steuerkreis - hoch |
| 0x1514 | P1514 | P1514 Gaspedal und Bremspedal - Plausibilitätsfehler |
| 0x1515 | P1515 | P1515 Zeitgeber extern - Messbereichs- oder Leistungsproblem |
| 0x1516 | P1516 | P1516 Thermostat Heizungssteuerkreis - Messbereichs- oder Leistungsproblem |
| 0x1517 | P1517 | P1517 Schlechtwegstreckenerkennung - Radrehzahl kein Signal |
| 0x1518 | P1518 | P1518 Schlechtwegstreckenerkennung - Raddrehzahl zu hoch |
| 0x1519 | P1519 | P1519 Motorölqualitätssensor Temperaturmessung - Fehlfunktion (M62/M52/S52: Nockenwellenversteller Einlass Schaltkreis (Bank 1) - Fehlfunktion) |
| 0x151A | P151A | P151A Batteriesensor - Klemme 15/30 Wakeup Fehlfunktion |
| 0x151B | P151B | P151B Batteriesensor - Wakeup Fehlfunktion |
| 0x151C | P151C | P151C Batteriesensor - Systemfehler |
| 0x151D | P151D | P151D Batteriesensor - Klemme 15 Schaltkreis - niedrig |
| 0x151E | P151E | P151E Batteriesensor - Klemme 15 Spannungsfehler |
| 0x151F | P151F | P151F CAN-Botschaftsüberwachung Fahrzeuggeschwindigkeitssensor - Timeout |
| 0x1520 | P1520 | P1520 Motorölqualitätssensor Niveaumessung - Fehlfunktion (M52: Nockenwellenversteller Auslass Steuerkreis (Bank 1) - Fehlfunktion) |
| 0x1521 | P1521 | P1521 Motorölqualitätssensor - Kommunikationsfehler |
| 0x1522 | P1522 | P1522 Motorölqualitätssensor Permeabilitätsmessung - Fehlfunktion (M62: Nockenwellenversteller Einlass Schaltkreis (Bank 2) - Fehlfunktion; M52: Nockenwellenversteller Einlass - schwergängig oder blockiert) |
| 0x1523 | P1523 | P1523 Nockenwellenversteller Einlass Steuerkreis (Bank 1) - niedrig (M52: Nockenwellenversteller Auslass - schwergängig oder blockiert) |
| 0x1524 | P1524 | P1524 Nockenwellenversteller Einlass Steuerkreis (Bank 1) - hoch |
| 0x1525 | P1525 | P1525 Nockenwellenversteller Einlass Steuerkreis (Bank 1) - Leitungsunterbrechung |
| 0x1526 | P1526 | P1526 Nockenwellenversteller Einlass Steuerkreis (Bank 2) - Leitungsunterbrechung |
| 0x1527 | P1527 | P1527 Nockenwellenversteller Einlass Steuerkreis (Bank 2) - niedrig |
| 0x1528 | P1528 | P1528 Nockenwellenversteller Einlass Steuerkreis (Bank 2) - hoch |
| 0x1529 | P1529 | P1529 Nockenwellenversteller Auslass Steuerkreis (Bank 1) - niedrig |
| 0x152A | P152A | P152A Fahrzeuggeschwindigkeitssensor - Geschwindigkeit gegenüber Referenz unter Last zu niedrig |
| 0x152B | P152B | P152B Fahrzeuggeschwindigkeitssensor - Geschwindigkeit gegenüber Referenz im Schub zu niedrig |
| 0x152C | P152C | P152C Leerlaufstellerüberwachung (Bank 1) - Sollwerte ungleich |
| 0x152D | P152D | P152D Leerlaufstellerüberwachung (Bank 1) - Istwert fehlerhaft |
| 0x152E | P152E | P152E Leerlaufstellerüberwachung (Bank 1) - Soll- / Istwert Vergleichsfehler |
| 0x152F | P152F | P152F Leerlaufstellerüberwachung (Bank 1) - Resetfehler |
| 0x1530 | P1530 | P1530 Nockenwellenversteller Auslass Steuerkreis (Bank 1) - hoch (S54 bis 09/00: Drosselklappen Lageregelung - Regeldifferenz) |
| 0x1531 | P1531 | P1531 Nockenwellenversteller Auslass Steuerkreis (Bank 1) - Leitungsunterbrechung |
| 0x1532 | P1532 | P1532 Nockenwellenversteller Auslass Steuerkreis (Bank 2) - Leitungsunterbrechung (S54 bis 09/00: Drosselklappen Ansteuerung - Fehlfunktion) |
| 0x1533 | P1533 | P1533 Nockenwellenversteller Auslass Steuerkreis (Bank 2) - niedrig (S54 bis 09/00: SG - interner Prozessorfehler) |
| 0x1534 | P1534 | P1534 Nockenwellenversteller Auslass Steuerkreis (Bank 2) - hoch |
| 0x1535 | P1535 | P1535 DISA (differenzierte Sauganlage) - Wicklungstemperaturgrenzwert überschritten |
| 0x1536 | P1536 | P1536 DISA (differenzierte Sauganlage) Reglerüberwachung - Regeldifferenz |
| 0x1537 | P1537 | P1537 DISA (differenzierte Sauganlage) - Potentiometerspannung im unteren Diagnosebereich |
| 0x1538 | P1538 | P1538 DISA (differenzierte Sauganlage) - Potentiometerspannung im oberen Diagnosebereich |
| 0x1539 | P1539 | P1539 DISA (differenzierte Sauganlage) - Wicklungstemperaturschwellwert überschritten |
| 0x153A | P153A | P153A Drosselklappenitialisierung (Bank 1) - Kommunikation mit Motorsteuergerät fehlerhaft |
| 0x153B | P153B | P153B Drosselklappeninitialisierung (Bank 1) - Anzahl der gültigen Initialisierungen überschritten |
| 0x153C | P153C | P153C Leerlaufstellerüberwachung (Bank 2) - Sollwerte ungleich |
| 0x153D | P153D | P153D Leerlaufstellerüberwachung (Bank 2) - Istwert fehlerhaft |
| 0x153E | P153E | P153E Leerlaufstellerüberwachung (Bank 2) - Soll- / Istwert Vergleichsfehler |
| 0x153F | P153F | P153F Leerlaufstellerüberwachung (Bank 2) - Resetfehler |
| 0x1540 | P1540 | P1540 Fahrdynamikkontrollschalter Schaltkreis - hoch |
| 0x1541 | P1541 | P1541 Fahrdynamikkontrollschalter Schaltkreis - niedrig |
| 0x1542 | P1542 | P1542 Pedalwertgeber - elektrischer Fehler |
| 0x1543 | P1543 | P1543 Drosselklappe 1 Potentiometer 1/2 Schaltkreis - niedrig |
| 0x1544 | P1544 | P1544 Drosselklappe 1 Potentiometer 1/2 Schaltkreis - hoch |
| 0x1545 | P1545 | P1545 Drosselklappe 1 Potentiometer 1/2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1546 | P1546 | P1546 Steuergerätekopplung - interner Prüfsummenfehler, SG Bank 1 defekt |
| 0x1547 | P1547 | P1547 Steuergerätekopplung - CAN-Timeout, SG Bank 1 defekt |
| 0x1548 | P1548 | P1548 Leerlaufregelsystem (Bank 2) - Drehzahl niedriger als erwartet |
| 0x1549 | P1549 | P1549 Leerlaufregelsystem (Bank 2) - Drehzahl höher als erwartet |
| 0x154A | P154A | P154A Drosselklappenitialisierung (Bank 2) - Kommunikation mit Motorsteuergerät fehlerhaft |
| 0x154B | P154B | P154B Drosselklappeninitialisierung (Bank 2) - Anzahl der gültigen Initialisierungen überschritten |
| 0x154C | P154C | P154C Drosselklappenstellerüberwachung (Bank 1) - Sollwerte ungleich |
| 0x154D | P154D | P154D Drosselklappenstellerüberwachung (Bank 1) - Istwert fehlerhaft |
| 0x154E | P154E | P154E Drosselklappenstellerüberwachung (Bank 1) - Soll- / Istwert Vergleichsfehler |
| 0x154F | P154F | P154F Drosselklappenstellerüberwachung (Bank 1) - Resetfehler |
| 0x1550 | P1550 | P1550 Leerlaufsteller schließende Spule - elektrischer Fehler |
| 0x1551 | P1551 | P1551 Zeitgeber extern - Plausibilität |
| 0x1552 | P1552 | P1552 Nockenwellenversteller Einlass Steuerkreis (Bank 1) - Leitungsunterbrechung |
| 0x1553 | P1553 | P1553 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Auslass Bank 1) - Plausibilitätsfehler |
| 0x1554 | P1554 | P1554 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Einlass Bank 1) - Plausibilitätsfehler |
| 0x1555 | P1555 | P1555 Klimakompressor Schaltkreis - sporadisch |
| 0x1556 | P1556 | P1556 Klimakompressor Schaltkreis - niedrig (S54 bis 09/00: Nockenwellenversteller Einlass Steuerkreis (Bank 1) - Leitungsunterbrechung) |
| 0x1557 | P1557 | P1557 Klimakompressor Schaltkreis - hoch |
| 0x1558 | P1558 | P1558 Drosselklappe Microchip Controller 1/2 - Fehlfunktion |
| 0x1559 | P1559 | P1559 Kaltstartüberwachung - Integrierte Momentenreserve nicht erreicht |
| 0x155A | P155A | P155A Multifunktionslenkrad (MFL) - Togglebitfehler |
| 0x155B | P155B | P155B Multifunktionslenkrad (MFL) - Timeout Telegramm |
| 0x155C | P155C | P155C Drosselklappenstellerüberwachung (Bank 2) - Sollwerte ungleich |
| 0x155D | P155D | P155D Drosselklappenstellerüberwachung (Bank 2) - Istwert fehlerhaft |
| 0x155E | P155E | P155E Drosselklappenstellerüberwachung (Bank 2) - Soll- / Istwert Vergleichsfehler |
| 0x155F | P155F | P155F Drosselklappenstellerüberwachung (Bank 2) - Resetfehler |
| 0x1560 | P1560 | P1560 Nockenwellenversteller Auslass Steuerkreis (Bank 1) - Leitungsunterbrechung |
| 0x1561 | P1561 | P1561 Kaltstart Leerlaufregelsystem (Bank 1) - Drehzahl niederiger als erwartet |
| 0x1562 | P1562 | P1562 Kaltstart Leerlaufregelsystem (Bank 1) - Drehzahl höher als erwartet |
| 0x1563 | P1563 | P1563 Multifunktionslenkrad (MFL) - Wippschalter defekt |
| 0x1564 | P1564 | P1564 Steuergeräteauswahl - Plausibilitätsfehler |
| 0x1565 | P1565 | P1565 Multifunktionslenkrad (MFL) Schnittstelle - Bitfehler oder Tasten '+' und '-' gedrückt (S54 bis 09/00: Nockenwellenversteller Auslass Steuerkreis (Bank 1) - Leitungsunterbrechung) |
| 0x1566 | P1566 | P1566 Multifunktionslenkrad (MFL) - Telegrammfrequenz falsch (M62/TU: MFL - Togglebitfehler) |
| 0x1567 | P1567 | P1567 Multifunktionslenkrad (MFL) - Togglebitfehler (M62/TU: MFL -Timeout Telegramm) |
| 0x1568 | P1568 | P1568 Multifunktionslenkrad (MFL) - Timeout Telegramm (M62/TU: MFL - Telegrammfrequenz falsch) |
| 0x1569 | P1569 | P1569 Nockenwellenversteller Einlass Steuerkreis (Bank 2) - Leitungsunterbrechung |
| 0x156A | P156A | P156A Drosselklappen-Adaption (Bank 1) - Bereichsüberwachungsfehler |
| 0x156B | P156B | P156B Drosselklappen-Adaption (Bank 1) - Satellit meldet Adaptionsfehler |
| 0x156C | P156C | P156C Drosselklappen-Adaption (Bank 1) - Fehler Differenzüberwachung |
| 0x156D | P156D | P156D Drosselklappenfreigabeleitung Schaltkreis (Bank 1) - niedrig |
| 0x156E | P156E | P156E Drosselklappenfreigabeleitung Schaltkreis (Bank 1) - hoch |
| 0x156F | P156F | P156F Drosselklappenfreigabeleitung Schaltkreis (Bank 1) - Leitungsunterbrechung |
| 0x1570 | P1570 | P1570 Steuergerät Sensorversorgung A - Output niedrig |
| 0x1571 | P1571 | P1571 Steuergerät Sensorversorgung A - Output hoch |
| 0x1572 | P1572 | P1572 Steuergerät Sensorversorgung A - Signal rauschend |
| 0x1573 | P1573 | P1573 Steuergerät Sensorversorgung B - Output niedrig (S54/S62: Nockenwellenversteller Einlass Steuerkreis (Bank 2) - niedrig) |
| 0x1574 | P1574 | P1574 Steuergerät Sensorversorgung B - Output hoch |
| 0x1575 | P1575 | P1575 Steuergerät Sensorversorgung B - Signal rauschend |
| 0x1576 | P1576 | P1576 Multifunktionslenkrad (MFL) Schnittstelle - Bitfehler |
| 0x1577 | P1577 | P1577 Geschwindigkeitsanzeige Instrumentenkombination - Signal fehlerhaft |
| 0x1578 | P1578 | P1578 Geschwindigkeitsanzeige Instrumentenkombination / ASC-Signal Korrelationsfehler |
| 0x1579 | P1579 | P1579 Multifunktionslenkrad (MFL) - Signal unplausibel |
| 0x157A | P157A | P157A Drosselklappen-Adaption (Bank 2) - Bereichsüberwachungsfehler |
| 0x157B | P157B | P157B Drosselklappen-Adaption (Bank 2) - Satellit meldet Adaptionsfehler |
| 0x157C | P157C | P157C Drosselklappen-Adaption (Bank 2) - Fehler Differenzüberwachung |
| 0x157D | P157D | P157D Drosselklappenfreigabeleitung Schaltkreis (Bank 2) - niedrig |
| 0x157E | P157E | P157E Drosselklappenfreigabeleitung Schaltkreis (Bank 2) - hoch |
| 0x157F | P157F | P157F Drosselklappenfreigabeleitung Schaltkreis (Bank 2) - Leitungsunterbrechung |
| 0x1580 | P1580 | P1580 Drosselklappe - klemmt mechanisch (M73: Drosselklappe 1 Federtest - Fehlfunktion) |
| 0x1581 | P1581 | P1581 Nockenwellenversteller Auslass Steuerkreis (Bank 2) - Leitungsunterbrechung (M73: Drosselklappe 2 Federtest - Fehlfunktion) |
| 0x1582 | P1582 | P1582 Motorölpumpe Schaltkreis - hoch |
| 0x1583 | P1583 | P1583 Motorölpumpe Schaltkreis - niedrig |
| 0x1584 | P1584 | P1584 Motorölpumpe Schaltkreis - Leitungsunterbrechung |
| 0x1585 | P1585 | P1585 Verbrennungsaussetzer entdeckt bei niedrigem Kraftstoffstand |
| 0x1586 | P1586 | P1586 Motorölqualitätssensor Temperaturmessung - Fehlfunktion |
| 0x1587 | P1587 | P1587 Motorölqualitätssensor Niveaumessung - Fehlfunktion |
| 0x1588 | P1588 | P1588 Motorölqualitätssensor Permeabilitätsmessung - Fehlfunktion |
| 0x1589 | P1589 | P1589 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 1) |
| 0x158A | P158A | P158A Leerlaufsteller (Bank 1) - Fail Safe Modus |
| 0x158B | P158B | P158B Leerlaufsteller (Bank 1) - Interner Diagnosefehler |
| 0x158C | P158C | P158C Leerlaufsteller (Bank 1) - Adaptionsfehler |
| 0x158D | P158D | P158D Leerlaufsteller (Bank 1) - Lageregelungsfehler |
| 0x158E | P158E | P158E Kaltstart Leerlaufregelsystem (Bank 2) - Drehzahl niederiger als erwartet |
| 0x158F | P158F | P158F Kaltstart Leerlaufregelsystem (Bank 2) - Drehzahl höher als erwartet |
| 0x1590 | P1590 | P1590 Drosselklappe 2 Potentiometer 1/2 Schaltkreis - niedrig |
| 0x1591 | P1591 | P1591 Drosselklappe 2 Potentiometer 1/2 Schaltkreis - hoch |
| 0x1592 | P1592 | P1592 Drosselklappe 2 Potentiometer 1/2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1593 | P1593 | P1593 DISA (differenzierte Sauganlage) - elektrischer Fehler |
| 0x1594 | P1594 | P1594 Nockenwellenversteller Auslass Steuerkreis (Bank 2) - Leitungsunterbrechung |
| 0x1595 | P1595 | P1595 Steuergerätekopplung - interner Prüfsummenfehler, SG Bank 2 defekt |
| 0x1596 | P1596 | P1596 Steuergerätekopplung - CAN-Timeout, SG Bank 2 defekt |
| 0x1597 | P1597 | P1597 Steuergeräteauswahl - Entprellfehler |
| 0x1598 | P1598 | P1598 Steuergeräteauswahl Master/Slave - Plausibilitätsfehler |
| 0x1599 | P1599 | P1599 CAN-Timeout Botschaft 2 Getriebesteuergerät |
| 0x159A | P159A | P159A Leerlaufsteller (Bank 2) - Fail Safe Modus |
| 0x159B | P159B | P159B Leerlaufsteller (Bank 2) - Interner Diagnosefehler |
| 0x159C | P159C | P159C Leerlaufsteller (Bank 2) - Adaptionsfehler |
| 0x159D | P159D | P159D Leerlaufsteller (Bank 2) - Lageregelungsfehler |
| 0x159E | P159E | P159E Motoröldruckregelung, dynamisch - Druckschwankungen |
| 0x159F | P159F | P159F Motoröldruckregelung, statisch - Umschaltung in Notlauf-Betrieb, da Motoröldruck im Kennfeld-Betrieb zu hoch |
| 0x15A0 | P15A0 | P15A0 Motoröldruckregelung, statisch - Umschaltung in Notlauf-Betrieb, da Motoröldruck im Kennfeld-Betrieb zu niedrig |
| 0x15A1 | P15A1 | P15A1 Motoröldruckregelung, mechanisch - Magnetventil hängt in voll bestromter Stellung (minimaler Öldruck) |
| 0x15A2 | P15A2 | P15A2 Motoröldruckregelung, mechanisch - Magnetventil hängt in unbestromter Stellung  (maximaler Öldruck) |
| 0x15A3 | P15A3 | P15A3 Motoröldruck - zu hoch |
| 0x15A4 | P15A4 | P15A4 Multifunktionslenkrad (MFL) - Telegrammfrequenz falsch |
| 0x15A5 | P15A5 | P15A5 Motoröldruckregelung - instabil (nur für Entwicklung) |
| 0x15A6 | P15A6 | P15A6 Motoröldruck - zu hoch vor Start |
| 0x15A7 | P15A7 | P15A7 Motoröldruck - zu niedrig vor Start |
| 0x15A8 | P15A8 | P15A8 Füllstandsanzeige Instrumentenkombination - Signal fehlerhaft |
| 0x15A9 | P15A9 | P15A9 Energiesparmodus - Transportmodus |
| 0x15AA | P15AA | P15AA Turbolader (Bank 1) - Leckage im Ladersystem |
| 0x15AB | P15AB | P15AB Turbolader - Ungleichlauf |
| 0x15AC | P15AC | P15AC Soundklappe Schaltkreis - hoch |
| 0x15AD | P15AD | P15AD Soundklappe Schaltkreis - niedrig |
| 0x15AE | P15AE | P15AE Soundklappe Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x15AF | P15AF | P15AF Turbolader (Bank 2) - Leckage im Ladersystem |
| 0x15B0 | P15B0 | P15B0 Klemme 15 Überwachungsschaltkreis - hoch |
| 0x15B1 | P15B1 | P15B1 Klemme 15 Überwachungsschaltkreis  - niedrig |
| 0x15B2 | P15B2 | P15B2 Klemme 15 Überwachungsschaltkreis - CAS (Car Access System) Fehler |
| 0x15B3 | P15B3 | P15B3 Klemme 15 Überwachungsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x15B4 | P15B4 | P15B4 Motorölqualitätssensor Permittivitätsfehler |
| 0x15B5 | P15B5 | P15B5 Geschwindigkeitsanzeige Instrumentenkombination / DSC-Signal Korrelationsfehler |
| 0x15B6 | P15B6 | P15B6 MSA (Motor-Start-Automatik) Schaltkreis - niedrig |
| 0x15B7 | P15B7 | P15B7 MSA (Motor-Start-Automatik) Schaltkreis - hoch |
| 0x15B8 | P15B8 | P15B8 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Auslass Bank 2) - Plausibilitätsfehler |
| 0x15B9 | P15B9 | P15B9 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Einlass Bank 2) - Plausibilitätsfehler |
| 0x15BA | P15BA | P15BA Nullgangsensor Schaltkreis - niedrig |
| 0x15BB | P15BB | P15BB Nullgangsensor Schaltkreis - hoch |
| 0x15BC | P15BC | P15BC Nullgangsensor - Tastverhältnis zu hoch |
| 0x15BD | P15BD | P15BD Nullgangsensor - Tastverhältnis zu niedrig |
| 0x15BE | P15BE | P15BE Nullgangsensor - Position nicht gelernt |
| 0x15BF | P15BF | P15BF Nullgangsensor - Position unplausibel |
| 0x15C0 | P15C0 | P15C0 Unterdruckbehälter - Druck zu niedrig |
| 0x15C1 | P15C1 | P15C1 Unterdruckbehälter - Druck zu hoch |
| 0x15C2 | P15C2 | P15C2 Unterdruckbehälter - Druck unplausibel |
| 0x15C3 | P15C3 | P15C3 Batteriesensor Wakeup-Leitung Schaltkreis - Leitungsunterbrechung |
| 0x15C4 | P15C4 | P15C4 Batteriesensor Wakeup-Leitung Schaltkreis - niedrig |
| 0x15C5 | P15C5 | P15C5 Batteriesensor Wakeup-Leitung Schaltkreis - hoch |
| 0x15C6 | P15C6 | P15C6 Leerlaufstellerinitialisierung- Anzahl der gültigen Initialisierungen überschritten |
| 0x15C7 | P15C7 | P15C7 Motoröldruckregelventil - mechanischer Fehler |
| 0x15C8 | P15C8 | P15C8 Leerlaufregelsystem - Drehzahl unplausibel |
| 0x15C9 | P15C9 | P15C9 Kaltstart Leerlaufregelsystem - Drehzahl unplausibel |
| 0x15CA | P15CA | P15CA Turbolader Kühlmittelpumpe Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x15CB | P15CB | P15CB Turbolader Kühlmittelpumpe Schaltkreis - niedrig |
| 0x15CC | P15CC | P15CC Turbolader Kühlmittelpumpe Schaltkreis - hoch |
| 0x15CD | P15CD | P15CD Turbolader Kühlmittelpumpe - blockiert |
| 0x15CE | P15CE | P15CE Batteriesensor Wakeup-Leitung Schaltkreis - elektrischer Fehler |
| 0x15CF | P15CF | P15CF Batteriesensor Variante - Plausibilitätsfehler |
| 0x15D0 | P15D0 | P15D0 Kühlmittelpumpe - Drehzahl außerhalb der Toleranz |
| 0x15D1 | P15D1 | P15D1 Kühlmittelpumpen-Abschaltung - interne Temperatur zu hoch |
| 0x15D2 | P15D2 | P15D2 Kühlmittelpumpen-Abschaltung - Überspannung |
| 0x15D3 | P15D3 | P15D3 Kühlmittelpumpen-Abschaltung - Überstrom |
| 0x15D4 | P15D4 | P15D4 Kühlmittelpumpe - Trockenlauf |
| 0x15D5 | P15D5 | P15D5 Kühlmittelpumpe - Unterspannung |
| 0x15D6 | P15D6 | P15D6 Kühlmittelpumpe - Temperaturschwelle 1 überschritten |
| 0x15D7 | P15D7 | P15D7 Kühlmittelpumpe - Temperaturschwelle 2 überschritten |
| 0x15D8 | P15D8 | P15D8 Klemme 15 - CAN-Signal fehlerhaft |
| 0x15D9 | P15D9 | P15D9 Klemme 15N_1 Spannungsversorgungsschaltkreis - Fehlfunktion |
| 0x15DA | P15DA | P15DA Raddrehzahlsensor vorne/links - Messbereichs- oder Leistungsproblem |
| 0x15DB | P15DB | P15DB Raddrehzahlsensor vorne/rechts - Messbereichs- oder Leistungsproblem |
| 0x15DC | P15DC | P15DC Raddrehzahlsensor hinten/links - Messbereichs- oder Leistungsproblem |
| 0x15DD | P15DD | P15DD Raddrehzahlsensor hinten/rechts - Messbereichs- oder Leistungsproblem |
| 0x15DE | P15DE | P15DE Kaltstart Kraftstoffdruck (Bank 1) - Druck zu hoch |
| 0x15DF | P15DF | P15DF Kaltstart Kraftstoffdruck (Bank 1) - Druck zu niedrig |
| 0x15E0 | P15E0 | P15E0 Ladeluftkühler Kühlmittelpumpe - Drehzahl außerhalb der Toleranz |
| 0x15E1 | P15E1 | P15E1 Ladeluftkühler Kühlmittelpumpe Abschaltung - interne Temperatur zu hoch |
| 0x15E2 | P15E2 | P15E2 Ladeluftkühler Kühlmittelpumpe Abschaltung - Überspannung |
| 0x15E3 | P15E3 | P15E3 Ladeluftkühler Kühlmittelpumpe Abschaltung - Überstrom |
| 0x15E4 | P15E4 | P15E4 Ladeluftkühler Kühlmittelpumpe - Trockenlauf |
| 0x15E5 | P15E5 | P15E5 Ladeluftkühler Kühlmittelpumpe - Unterspannung |
| 0x15E6 | P15E6 | P15E6 Ladeluftkühler Kühlmittelpumpe - Temperaturschwelle 1 überschritten |
| 0x15E7 | P15E7 | P15E7 Ladeluftkühler Kühlmittelpumpe - Temperaturschwelle 2 überschritten |
| 0x15E8 | P15E8 | P15E8 Zeitgeber extern - Motorabstellzeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15E9 | P15E9 | P15E9 Zeitgeber extern - Motorabstellzeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15EA | P15EA | P15EA Motoröldruckregelventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x15EB | P15EB | P15EB Motoröldruckregelventil Schaltkreis - niedrig |
| 0x15EC | P15EC | P15EC Motoröldruckregelventil Schaltkreis - hoch |
| 0x15ED | P15ED | P15ED Klemme 15N_2 Spannungsversorgungsschaltkreis - Fehlfunktion |
| 0x15EE | P15EE | P15EE Kaltstart Kraftstoffdruck (Bank 2) - Druck zu hoch |
| 0x15EF | P15EF | P15EF Kaltstart Kraftstoffdruck (Bank 2) - Druck zu niedrig |
| 0x15F0 | P15F0 | P15F0 Ladeluftkühler Kühlmittelpumpe 2 - Drehzahl außerhalb der Toleranz |
| 0x15F1 | P15F1 | P15F1 Ladeluftkühler Kühlmittelpumpe 2 Abschaltung - interne Temperatur zu hoch |
| 0x15F2 | P15F2 | P15F2 Ladeluftkühler Kühlmittelpumpe 2 Abschaltung - Überspannung |
| 0x15F3 | P15F3 | P15F3 Ladeluftkühler Kühlmittelpumpe 2 Abschaltung - Überstrom |
| 0x15F4 | P15F4 | P15F4 Ladeluftkühler Kühlmittelpumpe 2 - Trockenlauf |
| 0x15F5 | P15F5 | P15F5 Ladeluftkühler Kühlmittelpumpe 2 - Unterspannung |
| 0x15F6 | P15F6 | P15F6 Ladeluftkühler Kühlmittelpumpe 2 - Temperaturschwelle 1 überschritten |
| 0x15F7 | P15F7 | P15F7 Ladeluftkühler Kühlmittelpumpe 2 - Temperaturschwelle 2 überschritten |
| 0x15F8 | P15F8 | P15F8 Klemme 15N_3 Spannungsversorgungsschaltkreis - Fehlfunktion |
| 0x15F9 | P15F9 | P15F9 Klemme 15N Spannungsversorgungsschaltkreis - Fehlfunktion |
| 0x15FA | P15FA | P15FA Zeitgeber extern - Inkrementierung zu schnell während Motorlauf |
| 0x15FB | P15FB | P15FB Zeitgeber extern - Inkrementierung zu langsam während Motorlauf |
| 0x15FC | P15FC | P15FC Zeitgeber extern - Inkrementierung zu schnell während Motorsteuergeräte-Nachlauf |
| 0x15FD | P15FD | P15FD Zeitgeber extern - Inkrementierung zu langsam während Motorsteuergeräte-Nachlauf |
| 0x15FE | P15FE | P15FE Zeitgeber extern - Signal fehlt |
| 0x1600 | P1600 | P1600 Steuergerät - externer 'Random Access Memory' (RAM) Fehler |
| 0x1601 | P1601 | P1601 Steuergeräte-Selbsttest, Sicherheitskraftstoffabschaltung (SKA) - Fehlfunktion |
| 0x1602 | P1602 | P1602 Steuergeräte-Selbsttest, Gerät defekt |
| 0x1603 | P1603 | P1603 Steuergeräte-Selbsttest, Momentüberwachung |
| 0x1604 | P1604 | P1604 Steuergeräte-Selbsttest, Drehzahlüberwachung |
| 0x1605 | P1605 | P1605 Sicherheitskonzept Momentbegrenzung Ebene 1 |
| 0x1606 | P1606 | P1606 Fehlerspeicher - Plausibilitätsfehler |
| 0x1607 | P1607 | P1607 CAN-Stand |
| 0x1608 | P1608 | P1608 Serielle Kommunikationsverbindung Steuergerät |
| 0x1609 | P1609 | P1609 Serielle Kommunikationsverbindung EML (elektronische Motorleistungsregelung) |
| 0x160A | P160A | P160A Powermanagement - Tiefentladung |
| 0x160B | P160B | P160B Powermanagement - Defekt |
| 0x160C | P160C | P160C Powermanagement - Überspannung |
| 0x160D | P160D | P160D Powermanagement - Unterspannung |
| 0x160E | P160E | P160E Powermanagement - Batterieloser Betrieb |
| 0x160F | P160F | P160F Powermanagement - Ruhestromfehler |
| 0x1610 | P1610 | P1610 Serielle Kommunikationsverbindung E-Katalysator |
| 0x1611 | P1611 | P1611 Serielle Kommunikationsverbindung Getriebesteuergerät |
| 0x1612 | P1612 | P1612 Serielle Kommunikationsverbindung Instrumentenkombination |
| 0x1613 | P1613 | P1613 Serielle Kommunikationsverbindung ASC (Automatic Stability Control) |
| 0x1614 | P1614 | P1614 Serielle Kommunikationsverbindung ACC (Adaptive Cruise Control) |
| 0x1615 | P1615 | P1615 Steuergerät Prozessor SPI-Bus - Fehlfunktion |
| 0x1616 | P1616 | P1616 Steuergerät Kodierspeicher - Prüfsummenfehler |
| 0x1617 | P1617 | P1617 Steuergerät H-Brückentreiber |
| 0x1618 | P1618 | P1618 Steuergeräte-Selbsttest, AD-Wandler-Überwachung |
| 0x1619 | P1619 | P1619 Kennfeldkühlung Thermostat Steuerkreis - niedrig |
| 0x161A | P161A | P161A Kraftstoffrücklaufbelüftungsventil Schaltkreis - hoch |
| 0x161B | P161B | P161B Kraftstoffrücklaufbelüftungsventil Schaltkreis - niedrig |
| 0x161C | P161C | P161C Kraftstoffrücklaufbelüftungsventil Schaltkreis - Leitungsunterbrechung |
| 0x161D | P161D | P161D Drosselklappen-Adaption (Bank 2) - Federtest verfehlt |
| 0x161E | P161E | P161E Drosselklappensteller Federtest (Bank 2) - Fehlfunktion |
| 0x161F | P161F | P161F Drosselklappensteller Federtest (Bank 2) - Fehlfunktion beim Öffnen |
| 0x1620 | P1620 | P1620 Kennfeldkühlung Thermostat Steuerkreis - hoch |
| 0x1621 | P1621 | P1621 Kennfeldkühlung Thermostat Steuerkreis  - sporadisch |
| 0x1622 | P1622 | P1622 Kennfeldkühlung Thermostat Steuerkreis - elektrischer Fehler |
| 0x1623 | P1623 | P1623 Pedalwertgeber Potentiometerversorgung - Fehlfunktion |
| 0x1624 | P1624 | P1624 Pedalwertgeber Potentiometerversorgung Kanal 1 - elektrischer Fehler (M52: Kühlmittelthermostat (Kühlmitteltemperatur unterhalb Thermostat Regeltemperatur)) |
| 0x1625 | P1625 | P1625 Pedalwertgeber Potentiometerversorgung Kanal 2 - elektrischer Fehler |
| 0x1626 | P1626 | P1626 Generator Lastsensor Schaltkreis - niedrig |
| 0x1627 | P1627 | P1627 Generator Lastsensor Schaltkreis - hoch |
| 0x1628 | P1628 | P1628 Drosselklappensteller Federtest (Bank 1) - Fehlfunktion beim Öffnen |
| 0x1629 | P1629 | P1629 Drosselklappensteller Federtest (Bank 1) - Abbruch, Feder öffnet nicht |
| 0x162A | P162A | P162A Drosselklappensteller Federtest (Bank 2) - Abbruch, Feder öffnet nicht |
| 0x162B | P162B | P162B Drosselklappen Lageregelung  (Bank 2) - Regeldifferenz |
| 0x162C | P162C | P162C Drosselklappen Lageregelung (Bank 2) - klemmt kurzzeitig |
| 0x162D | P162D | P162D Drosselklappen Lageregelung (Bank 2) - klemmt anhaltend |
| 0x162E | P162E | P162E Steuergerät - interner 'Reset TPU-RAM' Fehler |
| 0x162F | P162F | P162F Steuergerät - interner 'Reset TPU' Fehler |
| 0x1630 | P1630 | P1630 Drosselklappen Schaltkreis (Bank 2) - Fehlfunktion |
| 0x1631 | P1631 | P1631 Drosselklappensteller Federtest (Bank 1) - Fehlfunktion |
| 0x1632 | P1632 | P1632 Drosselklappen-Adaption (Bank 1) - Randbedingungen verletzt |
| 0x1633 | P1633 | P1633 Drosselklappen-Adaption (Bank 1) - Notluftpunkt nicht adaptiert |
| 0x1634 | P1634 | P1634 Drosselklappen-Adaption (Bank 1) - Federtest verfehlt |
| 0x1635 | P1635 | P1635 Drosselklappen-Adaption (Bank 1) - unterer mechanischer Anschlag (UMA) nicht adaptiert |
| 0x1636 | P1636 | P1636 Drosselklappen Schaltkreis (Bank 1) - Fehlfunktion |
| 0x1637 | P1637 | P1637 Drosselklappen Lageregelung  (Bank 1) - Regeldifferenz |
| 0x1638 | P1638 | P1638 Drosselklappen Lageregelung (Bank 1) - klemmt kurzzeitig |
| 0x1639 | P1639 | P1639 Drosselklappen Lageregelung (Bank 1) - klemmt anhaltend |
| 0x163A | P163A | P163A Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät - Innentemperatur zu niedrig |
| 0x163B | P163B | P163B Drosselklappen-Adaption - keine Adaption nach Austausch |
| 0x163C | P163C | P163C Spannungsüberwachungs-Steuergerät - Überspannung |
| 0x163D | P163D | P163D Spannungsüberwachungs-Steuergerät - Abschaltung erkannt |
| 0x163E | P163E | P163E Spannungsüberwachungs-Steuergerät - Kommunikationsfehler |
| 0x163F | P163F | P163F Steuergeräteüberwachung A/D-Wandler Testspannung - Plausibilitätsfehler |
| 0x1640 | P1640 | P1640 Steuergerät - interner RAM/ROM Fehler |
| 0x1641 | P1641 | P1641 Drosselklappen-Adaption - Abbruch wegen Umweltbedingungen |
| 0x1642 | P1642 | P1642 Drosselklappen-Adaption - Abbruch wegen Umweltgrößen |
| 0x1643 | P1643 | P1643 Drosselklappensteller Startprüfung Verstärkerabgleich - Plausibilitätsfehler |
| 0x1644 | P1644 | P1644 Drosselklappen-Adaption (Bank 1) - Abbruch unterer mechanischer Anschlag (UMA) Wiederlernen |
| 0x1645 | P1645 | P1645 Steuergerät - interner 'Random Access Memory' (RAM) Lesefehler |
| 0x1646 | P1646 | P1646 Anlasserrelais 2 Ansteuerung - Signal sporadisch |
| 0x1647 | P1647 | P1647 Anlasserrelais 2 Ansteuerung - Signal niedrig |
| 0x1648 | P1648 | P1648 Anlasserrelais 2 Ansteuerung - Signal hoch |
| 0x1649 | P1649 | P1649 Steuergerät - interner 'Random Access Memory' (RAM) Schreibfehler |
| 0x164A | P164A | P164A Hauptrelais - Unterspannung |
| 0x164B | P164B | P164B Hauptrelais - Überspannung |
| 0x164C | P164C | P164C Pedalwertgeber Potentiometerversorgung Kanal 1 - elektrischer Fehler |
| 0x164D | P164D | P164D Drosselklappen-Adaption (Bank 2) - unterer mechanischer Anschlag (UMA) nicht adaptiert |
| 0x164E | P164E | P164E Drosselklappe, Enteisung - klemmt in Schließrichtung |
| 0x164F | P164F | P164F Drosselklappe, Enteisung - klemmt in Öffnungsrichtung |
| 0x1650 | P1650 | P1650 Start in laufendem Motor |
| 0x1651 | P1651 | P1651 Malfunction Indicator Lamp (MIL) - Signal niedrig |
| 0x1652 | P1652 | P1652 Malfunction Indicator Lamp (MIL) - Signal hoch |
| 0x1653 | P1653 | P1653 Getriebemoment - Plausibilitätsfehler |
| 0x1654 | P1654 | P1654 CAN-Timeout Message Counter |
| 0x1655 | P1655 | P1655 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage Fehlfunktion |
| 0x1656 | P1656 | P1656 EWS (elektronische Wegfahrsperre) - falscher Code |
| 0x1657 | P1657 | P1657 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im Flash fehlerhaft |
| 0x1658 | P1658 | P1658 EWS (elektronische Wegfahrsperre) - Wechselcode vorletztes Wort im Flash fehlerhaft |
| 0x1659 | P1659 | P1659 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im RAM fehlerhaft |
| 0x165A | P165A | P165A EWS (elektronische Wegfahrsperre) Schnittstelle zum Motorsteuergerät - Hardwarefehler |
| 0x165B | P165B | P165B EWS (elektronische Wegfahrsperre) Schnittstelle zum Motorsteuergerät - Prüfsummenfehler |
| 0x165C | P165C | P165C EWS (elektronische Wegfahrsperre)-Daten - keine verfügbare Speichermöglichkeit |
| 0x165D | P165D | P165D EWS (elektronische Wegfahrsperre)-Daten - Freischaltcodeablage fehlerhaft |
| 0x165E | P165E | P165E EWS (elektronische Wegfahrsperre)-Daten - Prüfsummenfehler |
| 0x165F | P165F | P165F Steuergerät - interner Messfehler Lambdasondenheizung (Bank 1, vor Katalysator) |
| 0x1660 | P1660 | P1660 EWS (elektronische Wegfahrsperre) - Telegrammfehler |
| 0x1661 | P1661 | P1661 Timeout EWS (elektronische Wegfahrsperre)-Telegramm |
| 0x1662 | P1662 | P1662 EWS (elektronische Wegfahrsperre) - Telegrammparityfehler |
| 0x1663 | P1663 | P1663 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im EEPROM fehlerhaft |
| 0x1664 | P1664 | P1664 EWS (elektronische Wegfahrsperre) - Schreib-/Lesefehler EEPROM |
| 0x1665 | P1665 | P1665 EWS (elektronische Wegfahrsperre) - Manipulation über Wechselcode |
| 0x1666 | P1666 | P1666 EWS (elektronische Wegfahrsperre) - Manipulation über KWP2000Ü / Startwert nicht akzeptiert |
| 0x1667 | P1667 | P1667 EWS (elektronische Wegfahrsperre) - noch kein Startwert programmiert |
| 0x1668 | P1668 | P1668 EWS (elektronische Wegfahrsperre) - Startwert zerstört |
| 0x1669 | P1669 | P1669 EWS (elektronische Wegfahrsperre) - Startwertprogrammierung fehlerhaft |
| 0x166A | P166A | P166A Steuergeräte-Selbsttest, LDM (Längsdynamikmanagement)-Überwachung |
| 0x166B | P166B | P166B LDM (Längsdynamikmanagement) - Momentenanforderung trotz Bremssignal |
| 0x166C | P166C | P166C LDM (Längsdynamikmanagement) - Momentenanforderung unplausibel |
| 0x166D | P166D | P166D Drosselklappen-Adaption (Bank 1) - oberer mechanischer Anschlag (OMA) nicht adaptiert |
| 0x166E | P166E | P166E Drosselklappen-Adaption (Bank 2) - oberer mechanischer Anschlag (OMA) nicht adaptiert |
| 0x166F | P166F | P166F Steuergerät - interner Messfehler Lambdasondenheizung (Bank 2, vor Katalysator) |
| 0x1670 | P1670 | P1670 Getriebeeingriff - Plausibilitätsfehler |
| 0x1671 | P1671 | P1671 ASC (Automatic Stability Control)-Eingriff mit Zylinderabschaltung - Plausibilitätsfehler |
| 0x1672 | P1672 | P1672 MSR (MotorSchleppmomentRegelung)-Eingriff - Plausibilitätsfehler |
| 0x1673 | P1673 | P1673 ASC (Automatic Stability Control)-Eingriff - Plausibilitätsfehler |
| 0x1674 | P1674 | P1674 ASC (Automatic Stability Control) - keine Aktivität festzustellen |
| 0x1675 | P1675 | P1675 Drosselklappensteller Startprüfung - Neuadaption erforderlich |
| 0x1676 | P1676 | P1676 ACC (Adaptive Cruise Control) Signal - Plausibilitätsfehler |
| 0x1677 | P1677 | P1677 ACC (Adaptive Cruise Control) - keine Aktivität festzustellen |
| 0x1678 | P1678 | P1678 ACC (Adaptive Cruise Control) - keine Reaktion auf ACC Abschaltung |
| 0x1679 | P1679 | P1679 Elektronische Drosselklappenüberwachung Ebene 2/3 Verlustmomentberechung - Fehler |
| 0x167A | P167A | P167A ACC (Adaptive Cruise Control) - sporadische Aktivität festzustellen |
| 0x167B | P167B | P167B Drosselklappenheizung, Relais Schaltkreis - hoch |
| 0x167C | P167C | P167C Drosselklappenheizung, Relais Schaltkreis - niedrig |
| 0x167D | P167D | P167D Drosselklappenheizung, Relais Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x167E | P167E | P167E Steuergerät - interner Fehler, 5 Volt Versorgungsspannung - Überspannung |
| 0x167F | P167F | P167F Steuergerät - interner Fehler, 5 Volt Versorgungsspannung - Unterspannung |
| 0x1680 | P1680 | P1680 Elektronische Drosselklappenüberwachung Ebene 2/3 AD-Wandler -  Prozesserfehler |
| 0x1681 | P1681 | P1681 Elektronische Drosselklappenüberwachung Ebene 2/3 Drehzahl - Berechnungsfehler |
| 0x1682 | P1682 | P1682 Elektronische Drosselklappenüberwachung Ebene 2/3 Leerlaufdrehzahl 'A' - Berechnungsfehler |
| 0x1683 | P1683 | P1683 Elektronische Drosselklappenüberwachung Ebene 2/3 Leerlaufdrehzahl 'B' - Berechnungsfehler |
| 0x1684 | P1684 | P1684 Elektronische Drosselklappenüberwachung Ebene 2/3 Kupplungsmoment - Min-Fehler |
| 0x1685 | P1685 | P1685 Elektronische Drosselklappenüberwachung Ebene 2/3 Kupplungsmoment - Max-Fehler |
| 0x1686 | P1686 | P1686 Elektronische Drosselklappenüberwachung Ebene 2/3 Pedalwertgeber - Diagnosefehler |
| 0x1687 | P1687 | P1687 Elektronische Drosselklappenüberwachung Ebene 2/3 Drosselklappenpotentiometer - Diagnosefehler |
| 0x1688 | P1688 | P1688 Elektronische Drosselklappenüberwachung Ebene 2/3  Luftmassenberechnung - Fehler |
| 0x1689 | P1689 | P1689 Elektronische Drosselklappenüberwachung Ebene 2/3 Momentenberechnung - Fehler |
| 0x168A | P168A | P168A Drosselklappenstellung Ausgangsschaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x168B | P168B | P168B Drosselklappenstellung Ausgangsschaltkreis (Bank 2) - niedrig |
| 0x168C | P168C | P168C Drosselklappenstellung Ausgangsschaltkreis (Bank 2) - hoch |
| 0x168D | P168D | P168D Drosselklappensteller (Bank 1) - Notluftpunkt nicht erreicht |
| 0x168E | P168E | P168E Drosselklappensteller (Bank 2) - Notluftpunkt nicht erreicht |
| 0x168F | P168F | P168F Steuergeräte-Selbsttest, ACC (Adaptive Cruise Control)-Überwachung |
| 0x1690 | P1690 | P1690 Malfunction Indicator Lamp (MIL) - elektrischer Fehler |
| 0x1691 | P1691 | P1691 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrehzahlbegrenzung - Fehler |
| 0x1692 | P1692 | P1692 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrosselklappe und Einspritzabschaltung 'A' |
| 0x1693 | P1693 | P1693 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrosselklappe und Einspritzabschaltung 'B' |
| 0x1694 | P1694 | P1694 Drosselklappensteller Startprüfung (Bank 1) - Federtest und Notluftprüfung verfehlt |
| 0x1695 | P1695 | P1695 Hauptrelais - elektrischer Fehler |
| 0x1696 | P1696 | P1696 Hauptrelais Steuerkreis - niedrig |
| 0x1697 | P1697 | P1697 Hauptrelais Steuerkreis - hoch |
| 0x1698 | P1698 | P1698 Getriebesteuergerät - Steuerungsfehler |
| 0x1699 | P1699 | P1699 Getriebesteuergerät - Prüfsummenfehler |
| 0x169A | P169A | P169A Drosselklappensteller Startprüfung (Bank 1) - Notluftprüfung verfehlt |
| 0x169B | P169B | P169B Drosselklappen-Adaption (Bank 1) - unterer mechanischer Anschlag (UMA) außerhalb Gültigkeitsbereich |
| 0x169C | P169C | P169C Drosselklappen-Adaption (Bank 2) - unterer mechanischer Anschlag (UMA) außerhalb Gültigkeitsbereich |
| 0x169D | P169D | P169D Drosselklappen-Adaption (Bank 1) - oberer mechanischer Anschlag (OMA) außerhalb Gültigkeitsbereich |
| 0x169E | P169E | P169E Drosselklappen-Adaption (Bank 2) - oberer mechanischer Anschlag (OMA) außerhalb Gültigkeitsbereich |
| 0x169F | P169F | P169F Drosselklappe - OBD Summenfehler |
| 0x16A0 | P16A0 | P16A0 Steuergerät - interner Prüfsummenfehler in Bootsoftware |
| 0x16A1 | P16A1 | P16A1 Steuergerät - interner Prüfsummenfehler in Applikatonssoftware |
| 0x16A2 | P16A2 | P16A2 Steuergerät - interner Prüfsummenfehler im Datenbereich |
| 0x16A3 | P16A3 | P16A3 Steuergerät - interner 'Non-Volatile Memory' (NVMY) Fehler |
| 0x16A4 | P16A4 | P16A4 Steuergerät - interner Fehler Klopfsensorbaustein |
| 0x16A5 | P16A5 | P16A5 Steuergerät Mehrfachendstufe SPI-Bus - Kommunikationsfehler |
| 0x16A6 | P16A6 | P16A6 Steuergeräte-Selbsttest, Fahrgeschwindigkeitsregelungsüberwachung |
| 0x16A7 | P16A7 | P16A7 Steuergeräte-Selbsttest, Heißfilmluftmassenmesser (HFM)-Überwachung |
| 0x16A8 | P16A8 | P16A8 Steuergeräte-Selbsttest, Drosselklappenstellungsüberwachung |
| 0x16A9 | P16A9 | P16A9 Steuergeräte-Selbsttest, Drehzahlüberwachung Reset |
| 0x16AA | P16AA | P16AA Drosselklappen-Adaption (Bank 2) - Randbedingungen verletzt |
| 0x16AB | P16AB | P16AB Drosselklappen-Adaption (Bank 2) - Notluftpunkt nicht adaptiert |
| 0x16AC | P16AC | P16AC Drosselklappen-Adaption (Bank 2) - Abbruch unterer mechanischer Anschlag (UMA) Wiederlernen |
| 0x16AD | P16AD | P16AD Drosselklappensteller Startprüfung  (Bank 2) - Notluftprüfung verfehlt |
| 0x16AE | P16AE | P16AE Drosselklappensteller Startprüfung (Bank 2) - Federtest und Notluftprüfung verfehlt |
| 0x16AF | P16AF | P16AF Steuergerät - interner Fehler Gemischüberwachung |
| 0x16B0 | P16B0 | P16B0 Steuergeräte-Selbsttest, Pedalwertüberwachung |
| 0x16B1 | P16B1 | P16B1 Steuergeräte-Selbsttest, Leerlaufregelsystemüberwachung integrierender Anteil - Plausibilitätsfehler |
| 0x16B2 | P16B2 | P16B2 Steuergeräte-Selbsttest, Leerlaufregelsystemüberwachung PD (Proportional-Differential)-Anteil - Plausibilitätsfehler |
| 0x16B3 | P16B3 | P16B3 Steuergeräte-Selbsttest, MSR (MotorSchleppmomentRegelung)-Überwachung |
| 0x16B4 | P16B4 | P16B4 Steuergeräte-Selbsttest, DCC (Dynamic Cruise Control)-Überwachung |
| 0x16B5 | P16B5 | P16B5 Steuergeräte-Selbsttest, SSG (sequentielles Schaltgetriebe)-Überwachung |
| 0x16B6 | P16B6 | P16B6 Steuergeräte-Selbsttest, EGS (elektronische Getriebesteuerung)-Überwachung |
| 0x16B7 | P16B7 | P16B7 Steuergeräte-Selbsttest, Kupplungsmomentüberwachung - Maximalwert Plausibilitätsfehler |
| 0x16B8 | P16B8 | P16B8 Steuergeräte-Selbsttest, Kupplungsmomentüberwachung - Minimalwert Plausibilitätsfehler |
| 0x16B9 | P16B9 | P16B9 Steuergeräte-Selbsttest, Verlustmomentüberwachung |
| 0x16BA | P16BA | P16BA Drosselklappensteller Startprüfung (Bank 1) - Federtest verfehlt |
| 0x16BB | P16BB | P16BB Drosselklappensteller Startprüfung (Bank 2) - Federtest verfehlt |
| 0x16BC | P16BC | P16BC Drosselklappen-Adaption (Bank 1) - unterer Anschlag nicht gelernt |
| 0x16BD | P16BD | P16BD Drosselklappen-Adaption (Bank 2) - unterer Anschlag nicht gelernt |
| 0x16BE | P16BE | P16BE Drosselklappen-Adaption (Bank 1) - Fehler untere Rückstellfeder |
| 0x16BF | P16BF | P16BF Drosselklappen-Adaption (Bank 2) - Fehler untere Rückstellfeder |
| 0x16C0 | P16C0 | P16C0 Steuergeräte-Selbsttest, Fahrdynamikkontrollschalter-Überwachung |
| 0x16C1 | P16C1 | P16C1 Steuergeräte-Selbsttest, Momentüberwachung - aktuell indizierter Wert Plausibilitätsfehler |
| 0x16C2 | P16C2 | P16C2 Steuergeräte-Selbsttest, Drehzahlbegrenzungsüberwachung |
| 0x16C3 | P16C3 | P16C3 Steuergeräte-Selbsttest, Drehzahlbegrenzung Reset |
| 0x16C4 | P16C4 | P16C4 Schaltphase - Drehmoment Plausibilitätsfehler |
| 0x16C5 | P16C5 | P16C5 Hauptrelais - Schaltverzögerung |
| 0x16C6 | P16C6 | P16C6 CAN-Timeout BSD (Bitserielle Datenschnittstelle) |
| 0x16C7 | P16C7 | P16C7 ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Sperrung wegen unplausibler Werte |
| 0x16C8 | P16C8 | P16C8 Serielle Kommunikationverbindung EKP (elektrische Kraftstoffpumpe) |
| 0x16C9 | P16C9 | P16C9 Steuergeräte-Selbsttest, ICM (integriertes Chassis Management)-Überwachung |
| 0x16CA | P16CA | P16CA Drosselklappen-Adaption (Bank 1) - Fehler obere Rückstellfeder |
| 0x16CB | P16CB | P16CB Drosselklappen-Adaption (Bank 2) - Fehler obere Rückstellfeder |
| 0x16CC | P16CC | P16CC Drosselklappen-Adaption (Bank 1) - obere Sollposition nicht erreicht |
| 0x16CD | P16CD | P16CD Drosselklappen-Adaption (Bank 2) - obere Sollposition nicht erreicht |
| 0x16CE | P16CE | P16CE Steuergeräte-Selbsttest, Hardware-Überwachung |
| 0x16CF | P16CF | P16CF EWS (elektronische Wegfahrsperre) - unplausible Antwort |
| 0x16D0 | P16D0 | P16D0 Drosselklappen Lageregelung (Bank 1) - klemmt |
| 0x16D1 | P16D1 | P16D1 Drosselklappen Lageregelung (Bank 2) - klemmt |
| 0x16D2 | P16D2 | P16D2 DTC Report - DTC Sendepuffer Überlauf |
| 0x16D3 | P16D3 | P16D3 DTC Report - DTC-Senden fehlgeschlagen |
| 0x16D4 | P16D4 | P16D4 Steuergeräte-Selbsttest, Warm Reset - geplanter Software Reset |
| 0x16D5 | P16D5 | P16D5 Steuergeräte-Selbsttest, Warm Reset - unerwünschter Software Reset |
| 0x16D6 | P16D6 | P16D6 Steuergeräte-Selbsttest, Warm Reset - Power On Reset |
| 0x16D7 | P16D7 | P16D7 Steuergeräte-Selbsttest, Warm Reset - Hardware Reset |
| 0x16D8 | P16D8 | P16D8 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler 1 Schaltkreis - Signal festliegend |
| 0x16D9 | P16D9 | P16D9 Steuergerät - nicht programmiert |
| 0x16DA | P16DA | P16DA FlexRay Controller - Synchronisationsfehler |
| 0x16DB | P16DB | P16DB FlexRay Controller - maximale Startupzeit überschritten |
| 0x16DC | P16DC | P16DC FlexRay Controller - Startup-Fehler |
| 0x16DD | P16DD | P16DD Steuergerät - interner Fehler Lambdasonde Offsetabgleich im niedrigen Verstärkungsbereich (Bank 1, vor Katalysator) |
| 0x16DE | P16DE | P16DE Steuergerät - interner Fehler Lambdasonde Offsetabgleich im hohen Verstärkungsbereich (Bank 1, vor Katalysator) |
| 0x16DF | P16DF | P16DF Steuergerät - interner Fehler Lambdasonde Zeit für Offsetabgleich überschritten (Bank 1, vor Katalysator) |
| 0x16E0 | P16E0 | P16E0 Steuergerät - interner Fehler Lambdasonde Offsetabgleich im niedrigen Verstärkungsbereich (Bank 2, vor Katalysator) |
| 0x16E1 | P16E1 | P16E1 Steuergerät - interner Fehler Lambdasonde Offsetabgleich im hohen Verstärkungsbereich (Bank 2, vor Katalysator) |
| 0x16E2 | P16E2 | P16E2 Steuergerät - interner Fehler Lambdasonde Zeit für Offsetabgleich überschritten (Bank 2, vor Katalysator) |
| 0x16E3 | P16E3 | P16E3 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Einschalt-Temperaturfühler - Messbereichs- oder Leistungsproblem |
| 0x16E4 | P16E4 | P16E4 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Einschalt-Temperaturfühler Schaltkreis - niedrig |
| 0x16E5 | P16E5 | P16E5 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Einschalt-Temperaturfühler  Schaltkreis - hoch |
| 0x16E6 | P16E6 | P16E6 Drosselklappen-Adaption (Bank 1) - Randbedingungen verletzt, Batteriespannung zu niedrig |
| 0x16E7 | P16E7 | P16E7 Steuergerät - internes Leistungsproblem 5 Volt Versorgungsspannung 1 |
| 0x16E8 | P16E8 | P16E8 Steuergerät - internes Leistungsproblem 5 Volt Versorgungsspannung 2 |
| 0x16E9 | P16E9 | P16E9 Steuergerät - internes Leistungsproblem 5 Volt Versorgungsspannung 3 |
| 0x16EA | P16EA | P16EA Steuergerät - interner Watchdogfehler |
| 0x16EB | P16EB | P16EB Steuergerät - interner Watchdog Kommunikationsfehler |
| 0x16EC | P16EC | P16EC Steuergerät - interner Watchdog Überspannungsfehler |
| 0x16F3 | P16F3 | P16F3 Steuergerät - interner 'Random Access Memory' (RAM') Datenredundanz Fehler |
| 0x1700 | P1700 | P1700 Doppelfehler Abtriebsdrehzahl und Turbinendrehzahl |
| 0x1701 | P1701 | P1701 Doppelfehler Positionsinformation CAN / serielle Leitung |
| 0x1702 | P1702 | P1702 Ersatzfunktion - Kombinationsfehler |
| 0x1703 | P1703 | P1703 Getriebewählschalter - Fehlfunktion |
| 0x1704 | P1704 | P1704 Getriebeöltemperaturfühler 1 Schaltkreis - Kurzschluss |
| 0x1705 | P1705 | P1705 Getriebesteuergerät LED Output - Leitungsunterbrechung |
| 0x1706 | P1706 | P1706 Getriebesteuergerät LED Output Schaltkreis - Kurzschluss |
| 0x1707 | P1707 | P1707 EGS (elektronische Getriebesteuerung) Sicherheitskonzept Getriebe - Fehlfunktion |
| 0x1708 | P1708 | P1708 EGS (elektronische Getriebesteuerung) Sicherheitskonzept Kupplung - Fehlfunktion |
| 0x1709 | P1709 | P1709 EGS (elektronische Getriebesteuerung) Sicherheitskonzept - Fehlfunktion |
| 0x170A | P170A | P170A Elektrischer Drucksteller 1 - Nebenschlussüberwachung |
| 0x170B | P170B | P170B Elektrischer Drucksteller 2 - Nebenschlussüberwachung |
| 0x170C | P170C | P170C Elektrischer Drucksteller 3 - Nebenschlussüberwachung |
| 0x170D | P170D | P170D Elektrischer Drucksteller 4 - Nebenschlussüberwachung |
| 0x170E | P170E | P170E Elektrischer Drucksteller 5 - Nebenschlussüberwachung |
| 0x170F | P170F | P170F Elektrischer Drucksteller 6 - Nebenschlussüberwachung |
| 0x1710 | P1710 | P1710 Getriebesteuergerät Temperaturfühler Schaltkreis - hoch |
| 0x1711 | P1711 | P1711 Getriebesteuergerät Temperaturfühler Schaltkreis - niedrig |
| 0x1712 | P1712 | P1712 Getriebesteuergerät - interner Fehler Überwachungsebene 2, positiver Motoreingriff |
| 0x1713 | P1713 | P1713 Getriebesteuergerät - interner Fehler Überwachungsebene 2, Berechnung positiver Motoreingriff |
| 0x1714 | P1714 | P1714 Getriebesteuergerät - interner Fehler Überwachungsebene 2, Berechnung Shift By Wire |
| 0x1715 | P1715 | P1715 Hydraulikeinheit Drucküberwachung - Fehlfunktion |
| 0x1716 | P1716 | P1716 Hydraulikeinheit Einschalthäufigkeit - Fehlfunktion |
| 0x1717 | P1717 | P1717 Hydraulikeinheit Einschaltdauer - Fehlfunktion |
| 0x1718 | P1718 | P1718 Getriebeöltemperaturfühler 1 - unerlaubter Temperaturanstieg |
| 0x1719 | P1719 | P1719 CAN Stand Fehler |
| 0x171A | P171A | P171A Getriebesteuergerät - interner Watchdog allgemeiner Fehler |
| 0x171B | P171B | P171B Getriebesteuergerät - interner Watchdog Laufzeitfehler |
| 0x171C | P171C | P171C Getriebesteuergerät - interner Watchdog Initialisierungsfehler |
| 0x171D | P171D | P171D Getriebesteuergerät - interner Watchdog elektrischer Fehler |
| 0x171E | P171E | P171E Getriebesteuergerät - interner Watchdog Plausibilitätsfehler |
| 0x171F | P171F | P171F Getriebesteuergerät - interner Bauteilfehler CG122 |
| 0x1720 | P1720 | P1720 CAN-Timeout Steuergerät |
| 0x1721 | P1721 | P1721 CAN-Timeout ASC/DSC (Automatic Stability Control/Dynamic Stability Control) |
| 0x1722 | P1722 | P1722 Getriebesteuergerät - interner leichter QADC Fehler |
| 0x1723 | P1723 | P1723 Getriebesteuergerät - interner schwerer QADC Fehler |
| 0x1724 | P1724 | P1724 Getriebesteuergerät - interner TPU AliveCounter Fehler |
| 0x1725 | P1725 | P1725 Getriebesteuergerät - interner TPU RAM Fehler |
| 0x1726 | P1726 | P1726 Turbinendrehzahl und Motordrehzahl in Getriebeposition N - Korrelationsfehler |
| 0x1727 | P1727 | P1727 CAN Motordrehzahl |
| 0x1728 | P1728 | P1728 Motorüberdrehzahl |
| 0x1729 | P1729 | P1729 Motor - hohe Drehungleichförmigkeit |
| 0x172A | P172A | P172A Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 1 größer Schwelle |
| 0x172B | P172B | P172B Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 2 größer Schwelle |
| 0x172C | P172C | P172C Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 3 größer Schwelle |
| 0x172D | P172D | P172D Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 4 größer Schwelle |
| 0x172E | P172E | P172E Getriebesteuergerät - interner Fehler Ebene 2, Störzähler größer Schwelle allgemeiner Fehler |
| 0x172F | P172F | P172F Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 1 kleiner Schwelle |
| 0x1730 | P1730 | P1730 Elektrischer Drucksteller - unerlaubte Ansteuerung |
| 0x1731 | P1731 | P1731 Falsches Übersetzungsverhältnis - 1. Gang manuell |
| 0x1732 | P1732 | P1732 Gangüberwachung 4 bei elektrischem Ersatzprogramm |
| 0x1733 | P1733 | P1733 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 2 kleiner Schwelle |
| 0x1734 | P1734 | P1734 Elektrischer Drucksteller 2 - elektrischer Fehler |
| 0x1735 | P1735 | P1735 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 3 kleiner Schwelle |
| 0x1736 | P1736 | P1736 Falsches Übersetzungsverhältnis - 6. Gang |
| 0x1737 | P1737 | P1737 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 4 kleiner Schwelle |
| 0x1738 | P1738 | P1738 Elektrischer Drucksteller 3 - elektrischer Fehler |
| 0x1739 | P1739 | P1739 Kupplungsmagnet - Kommunikationsfehler |
| 0x173A | P173A | P173A Elektrischer Drucksteller 1 Steuerkreis - elektrischer Fehler |
| 0x173B | P173B | P173B CAN Motorkühlmitteltemperatur - ungültig |
| 0x173C | P173C | P173C Elektrischer Drucksteller 7  - Nebenschlussüberwachung |
| 0x173D | P173D | P173D CAN Botschaftsüberwachung Getriebeaufnahmemoment |
| 0x173E | P173E | P173E Schaltstange 1/3 Sensor Schaltkreis - niedrig |
| 0x173F | P173F | P173F Schaltstange 1/3 Sensor Schaltkreis - hoch |
| 0x1740 | P1740 | P1740 Kupplungsmagnet Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1741 | P1741 | P1741 Kupplungsmagnet Schaltkreis - Leitungsunterbrechung |
| 0x1742 | P1742 | P1742 Kupplungsmagnet Schaltkreis - Kurzschluss |
| 0x1743 | P1743 | P1743 Elektrischer Drucksteller 5 - elektrischer Fehler (M44/M52: Bremsband - elektrischer Fehler) |
| 0x1744 | P1744 | P1744 Elektrischer Drucksteller 1 - elektrischer Fehler |
| 0x1745 | P1745 | P1745 Elektrischer Drucksteller 5 - Fehlfunktion |
| 0x1746 | P1746 | P1746 Getriebesteuergerät - Endstufenfehler |
| 0x1747 | P1747 | P1747 CAN-Bus Überwachung |
| 0x1748 | P1748 | P1748 Getriebesteuergerät Selbsttest - Fehlfunktion |
| 0x1749 | P1749 | P1749 Sekundär-Drucksteller - Kommunikationsfehler (M52: Getriebesteuergerät - interner Fehler) |
| 0x174A | P174A | P174A Magnetventil 3/5/6 Schaltkreis - niedrig |
| 0x174B | P174B | P174B Magnetventil 1/2 Schaltkreis - niedrig |
| 0x174C | P174C | P174C Getriebeposition 5/3 Schaltkreis - falsche Frequenz |
| 0x174D | P174D | P174D Getriebeposition 5/3 Schaltkreis - Tastverhältnis zu hoch |
| 0x174E | P174E | P174E Getriebeposition 5/3 Schaltkreis - Tastverhältnis zu niedrig |
| 0x174F | P174F | P174F Getriebeposition 5/3 Schaltkreis - unplausible Position |
| 0x1750 | P1750 | P1750 Sekundär-Drucksteller Schaltkreis - Messbereichs- oder Leistungsproblem (M44/M52/S52/M62/M73: Versorgungsspannungskreis - niedrig) |
| 0x1751 | P1751 | P1751 Sekundär-Drucksteller Schaltkreis - Leitungsunterbrechung (M52: Versorgungsspannungskreis - hoch) |
| 0x1752 | P1752 | P1752 Sekundär-Drucksteller Schaltkreis - Kurzschluss |
| 0x1753 | P1753 | P1753 Elektrischer Drucksteller 4 - elektrischer Fehler |
| 0x1754 | P1754 | P1754 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler kleiner Schwelle allgemeiner Fehler |
| 0x1755 | P1755 | P1755 Elektrischer Drucksteller 4 - Fehlfunktion |
| 0x1756 | P1756 | P1756 Schaltvorgang X-Position Gang nicht einlegbar |
| 0x1757 | P1757 | P1757 Schaltvorgang Gangspringer |
| 0x1758 | P1758 | P1758 Schaltvorgang Y-Position nicht regelbar |
| 0x1759 | P1759 | P1759 Schaltvorgang X-Position Gang nicht auslegbar |
| 0x175A | P175A | P175A Getriebesteuergerät - interner Fehler Schalten nach D ohne Fahrerwunsch |
| 0x175B | P175B | P175B Kommunikationsverlust zwischen EGS (elektronische Getriebesteuerung) Softwaremodulen  |
| 0x175C | P175C | P175C Getriebeposition 2/4 Schaltkreis - falsche Frequenz |
| 0x175D | P175D | P175D Getriebeposition 2/4 Schaltkreis - Tastverhältnis zu hoch |
| 0x175E | P175E | P175E Getriebeposition 2/4 Schaltkreis - Tastverhältnis zu niedrig |
| 0x175F | P175F | P175F Getriebeposition 2/4 Schaltkreis - unplausible Position |
| 0x1760 | P1760 | P1760 Motoreingriff - Plausibilitätsfehler |
| 0x1761 | P1761 | P1761 Magnetventil Shiftlock Steuerkreis - Fehlfunktion |
| 0x1762 | P1762 | P1762 Magnetventil Shiftlock Steuerkreis - hoch |
| 0x1763 | P1763 | P1763 Magnetventil Shiftlock Steuerkreis - niedrig |
| 0x1764 | P1764 | P1764 Magnetventil Shiftlock Steuerkreis - Leitungsunterbrechung |
| 0x1765 | P1765 | P1765 CAN Drosselklappe - Fehlfunktion |
| 0x1766 | P1766 | P1766 Doppelfehler Motordrehzahl CAN / direkt verdrahtet |
| 0x1767 | P1767 | P1767 CAN Raddrehzahlen Hinterachse |
| 0x1768 | P1768 | P1768 CAN-Botschaftsüberwachung Pedalwertgeber - Timeout |
| 0x1769 | P1769 | P1769 Getriebesteuergerät interner Temperaturfühler - Wakeup nach Hotmode |
| 0x176A | P176A | P176A Radgeschwindigkeit / Abtriebdrehzahl - Korrelationsfehler |
| 0x176B | P176B | P176B EGS (elektronische Getriebesteuerung) - Unterspannungsreset |
| 0x176C | P176C | P176C Getriebeposition 6/7 Schaltkreis - falsche Frequenz |
| 0x176D | P176D | P176D Getriebeposition 6/7 Schaltkreis - Tastverhältnis zu hoch |
| 0x176E | P176E | P176E Getriebeposition 6/7 Schaltkreis - Tastverhältnis zu niedrig |
| 0x176F | P176F | P176F Getriebeposition 6/7 Schaltkreis - unplausible Position |
| 0x1770 | P1770 | P1770 CAN Momentenschnittstelle - Fehlfunktion |
| 0x1771 | P1771 | P1771 CAN Momentenschnittstelle - Plausibilitätsfehler |
| 0x1772 | P1772 | P1772 Turbinendrehzahl und Motordrehzahl in Getriebeposition D - Korrelationsfehler |
| 0x1773 | P1773 | P1773 CAN-Timeout ABS-Steuergerät |
| 0x1774 | P1774 | P1774 CAN Raddrehzahl Hinterrad links - kein Signal |
| 0x1775 | P1775 | P1775 CAN Raddrehzahl Hinterrad rechts - kein Signal |
| 0x1776 | P1776 | P1776 CAN Raddrehzahl Vorderrad links - kein Signal |
| 0x1777 | P1777 | P1777 CAN Raddrehzahl Vorderrad rechts - kein Signal |
| 0x1778 | P1778 | P1778 CAN-Botschaftsüberwachung Pedalwertgebersignal - Plausibilitätsfehler |
| 0x1779 | P1779 | P1779 Getriebeöltemperatur / Getriebesteuergerät-Temperatur - Korrelationsfehler |
| 0x177A | P177A | P177A Getriebesteuergerät - interner Fehler kein Schalten trotz Fahrerwunsch |
| 0x177B | P177B | P177B Getriebesteuergerät - interner Korrelationsfehler angezeigte / tatsächliche Getriebeposition |
| 0x177C | P177C | P177C Getriebesteuergerät - interner Fehler der Shift-By-Wire Bedatung |
| 0x177D | P177D | P177D Antriebsstrang Kommunikationsschaltkreis - Fehlfunktion |
| 0x177E | P177E | P177E Getriebesteuergerät - interner Berechnungsfehler Überwachungsebene 2, Antriebsstrang |
| 0x177F | P177F | P177F Getriebesteuergerät - interner Fehler Überwachungsebene 2, Plausibilität |
| 0x1780 | P1780 | P1780 CAN Momentreduzierung - Fehlfunktion |
| 0x1782 | P1782 | P1782 CAN Bremssignal |
| 0x1783 | P1783 | P1783 Kupplung 1 Entleerungsventil Schaltkreis - Fehlfunktion |
| 0x1784 | P1784 | P1784 Kupplung 2 Entleerungsventil Schaltkreis - Fehlfunktion |
| 0x1785 | P1785 | P1785 Getriebeübersetzungssteller Schaltkreis - Fehlfunktion |
| 0x1786 | P1786 | P1786 Getriebeübersetzungssteller Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1787 | P1787 | P1787 Getriebeübersetzungssteller Schaltkreis - Leitungsunterbrechung |
| 0x1788 | P1788 | P1788 Getriebeübersetzungssteller Schaltkreis - Kurzschluss |
| 0x1789 | P1789 | P1789 Getriebeübersetzungssteller - Kommunikationsfehler |
| 0x178A | P178A | P178A Kupplung 1 Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x178B | P178B | P178B Kupplung 1 Drucksensor Schaltkreis - Kurzschluss |
| 0x178C | P178C | P178C Kupplung 1 Drucksensor Schaltkreis - Leitungsunterbrechung |
| 0x178D | P178D | P178D Kupplung 2 Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x178E | P178E | P178E Kupplung 2 Drucksensor Schaltkreis - Kurzschluss |
| 0x178F | P178F | P178F Kupplung 2 Drucksensor Schaltkreis - Leitungsunterbrechung |
| 0x1790 | P1790 | P1790 Getriebesteuergerät - interner Prüfsummenfehler/EPROM  |
| 0x1791 | P1791 | P1791 Getriebesteuergerät - interner Prüfsummenfehler/EEPROM |
| 0x1792 | P1792 | P1792 Getriebesteuergerät - interner Watchdogfehler |
| 0x1793 | P1793 | P1793 EGS (elektronische Getriebesteuerung) - Abschaltung wegen Übertemperatur |
| 0x1794 | P1794 | P1794 Getriebesteuergerät - interner Prüfsummenfehler |
| 0x1795 | P1795 | P1795 Antriebsstrang Kommunikationsschaltkreis - Signal fehlerhaft auf A-CAN |
| 0x1796 | P1796 | P1796 Getriebesteuergerät - interner Fehler 7 (High Side Treiber) |
| 0x1797 | P1797 | P1797 Getriebesteuergerät - interner 'Random Access Memory' (RAM) Fehler  |
| 0x1798 | P1798 | P1798 Getriebesteuergerät - interner EEPROM Schreibfehler |
| 0x1799 | P1799 | P1799 Ersatzfunktion - Prioritätenfehler |
| 0x179A | P179A | P179A Getriebesteuergerät - interner EEPROM Lesefehler |
| 0x179C | P179C | P179C Schaltstange 1/3 - mechanischer Fehler |
| 0x179D | P179D | P179D Schaltstange 2/R - mechanischer Fehler |
| 0x179E | P179E | P179E Schaltstange 4/6 - mechanischer Fehler |
| 0x179F | P179F | P179F Schaltstange 5/7 - mechanischer Fehler |
| 0x17A0 | P17A0 | P17A0 Kupplung 1 Hydraulikkreislauf - Befüllungszeit falsch |
| 0x17A1 | P17A1 | P17A1 Kupplung 1 Hydraulikkreislauf - Druck zu niedrig |
| 0x17A2 | P17A2 | P17A2 Kupplung 1 Hydraulikkreislauf - Druck zu hoch |
| 0x17A3 | P17A3 | P17A3 Kupplung 2 Hydraulikkreislauf - Befüllungszeit falsch |
| 0x17A4 | P17A4 | P17A4 Kupplung 2 Hydraulikkreislauf - Druck zu niedrig |
| 0x17A5 | P17A5 | P17A5 Kupplung 2 Hydraulikkreislauf - Druck zu hoch |
| 0x17A6 | P17A6 | P17A6 Schaltstange 2/R Sensor Schaltkreis - niedrig |
| 0x17A7 | P17A7 | P17A7 Schaltstange 2/R Sensor Schaltkreis - hoch |
| 0x17A8 | P17A8 | P17A8 Schaltstange 4/6 Sensor Schaltkreis - niedrig |
| 0x17A9 | P17A9 | P17A9 Schaltstange 4/6 Sensor Schaltkreis - hoch |
| 0x17AA | P17AA | P17AA Schaltstange 5/7 Sensor Schaltkreis - niedrig |
| 0x17AB | P17AB | P17AB Schaltstange 5/7 Sensor Schaltkreis - hoch |
| 0x17AC | P17AC | P17AC Getriebesteuergerät - interner Watchdog Endstufenfehler |
| 0x17AD | P17AD | P17AD Getriebesteuergerät - interner Watchdog Überwachungsfehler |
| 0x17AE | P17AE | P17AE Getriebesteuergerät - interner Watchdog 'Random Access Memory' (RAM) Fehler |
| 0x17AF | P17AF | P17AF Getriebesteuergerät - interner Watchdog 'Read only Memory' (ROM) Fehler |
| 0x17B0 | P17B0 | P17B0 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 5 größer Schwelle |
| 0x17B1 | P17B1 | P17B1 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 6 größer Schwelle |
| 0x17B2 | P17B2 | P17B2 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 14 größer Schwelle |
| 0x17B3 | P17B3 | P17B3 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 5 kleiner Schwelle |
| 0x17B4 | P17B4 | P17B4 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 6 kleiner Schwelle |
| 0x17B5 | P17B5 | P17B5 Getriebesteuergerät - interner Fehler Ebene 2, Störzähler 14 kleiner Schwelle |
| 0x17B6 | P17B6 | P17B6 Antriebsstrang Kommunikationsschaltkreis - Signal fehlerhaft auf FA-CAN |
| 0x17B7 | P17B7 | P17B7 Getriebesteuergerät - interner Fehler Komplementüberwachung Signal |
| 0x17B8 | P17B8 | P17B8 Getriebesteuergerät - interner Fehler Komplementüberwachung Software Schaltstrategie |
| 0x17B9 | P17B9 | P17B9 Kommunikation Überwachungsschaltkreis FA-CAN - Getriebeposition unplausibel |
| 0x17BA | P17BA | P17BA Getriebeverlustmoment - Rückkopplungssignal fehlerhaft auf A-CAN |
| 0x17BB | P17BB | P17BB Getriebeverlustmoment - Rückkopplungssignal fehlerhaft auf FA-CAN |
| 0x17BC | P17BC | P17BC Getriebeverlustmoment - allgemeiner Berechnungsfehler |
| 0x17BD | P17BD | P17BD Getriebeverlustmoment - Berechnungsfehler Plausibilität |
| 0x17BE | P17BE | P17BE Kupplung 1 Drucksensor - Plausibilitätsfehler wegen Sensordrift |
| 0x17BF | P17BF | P17BF Kupplung 2 Drucksensor - Plausibilitätsfehler wegen Sensordrift |
| 0x17C1 | P17C1 | P17C1 Getriebe-Reibelemente - Korrelationsfehler |
| 0x17C2 | P17C2 | P17C2 Getriebe-Reibelemente - Korrelationsfehler während/nach Schaltvorgang |
| 0x17C3 | P17C3 | P17C3 Elektrischer Drucksteller 1 Überwachungsschaltkreis - Strom zu niedrig |
| 0x17C4 | P17C4 | P17C4 Elektrischer Drucksteller 2 Überwachungsschaltkreis - Strom zu niedrig |
| 0x17C5 | P17C5 | P17C5 Elektrischer Drucksteller 3 Überwachungsschaltkreis - Strom zu niedrig |
| 0x17C6 | P17C6 | P17C6 Elektrischer Drucksteller 4 Überwachungsschaltkreis - Strom zu niedrig |
| 0x17C7 | P17C7 | P17C7 Elektrischer Drucksteller 5 Überwachungsschaltkreis - Strom zu niedrig |
| 0x17C8 | P17C8 | P17C8 Wandlerüberbrückungskupplung elektrischer Drucksteller Überwachungsschaltkreis - Strom zu niedrig |
| 0x17C9 | P17C9 | P17C9 Elektrischer Drucksteller 7 Überwachungsschaltkreis - Strom zu niedrig |
| 0x17CA | P17CA | P17CA Elektrischer Drucksteller 1 Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17CB | P17CB | P17CB Elektrischer Drucksteller 2 Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17CC | P17CC | P17CC Elektrischer Drucksteller 3 Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17CD | P17CD | P17CD Elektrischer Drucksteller 4 Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17CE | P17CE | P17CE Elektrischer Drucksteller 5 Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17CF | P17CF | P17CF Wandlerüberbrückungskupplung elektrischer Drucksteller Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17D0 | P17D0 | P17D0 Elektrischer Drucksteller 7 Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17D1 | P17D1 | P17D1 Magnetventil 2 Steuerkreis - Rückkopplungssignal fehlerhaft |
| 0x17D2 | P17D2 | P17D2 Parksperre - fehlerhaft eingelegt |
| 0x17D3 | P17D3 | P17D3 Elektrischer Drucksteller 1 Überwachungsschaltkreis - Strom zu hoch |
| 0x17D4 | P17D4 | P17D4 Elektrischer Drucksteller 2 Überwachungsschaltkreis - Strom zu hoch |
| 0x17D5 | P17D5 | P17D5 Elektrischer Drucksteller 3 Überwachungsschaltkreis - Strom zu hoch |
| 0x17D6 | P17D6 | P17D6 Elektrischer Drucksteller 4 Überwachungsschaltkreis - Strom zu hoch |
| 0x17D7 | P17D7 | P17D7 Elektrischer Drucksteller 5 Überwachungsschaltkreis - Strom zu hoch |
| 0x17D8 | P17D8 | P17D8 Wandlerüberbrückungskupplung elektrischer Drucksteller Überwachungsschaltkreis - Strom zu hoch |
| 0x17D9 | P17D9 | P17D9 Elektrischer Drucksteller 7 Überwachungsschaltkreis - Strom zu hoch |
| 0x17DB | P17DB | P17DB Getriebeöltemperaturfühler 1 - Initialisierungsfehler |
| 0x17DC | P17DC | P17DC Multipler Sensorausfall - Abtriebsdrehzahlfühler und Turbinendrehzahlfühler |
| 0x17DD | P17DD | P17DD Multipler Sensorausfall - Getriebesteuergerät interne Temperaturfühler und Getriebeöltemperaturfühler |
| 0x17DE | P17DE | P17DE Turbinendrehzahl und Motordrehzahl - Korrelationsfehler |
| 0x17DF | P17DF | P17DF Getriebesteuergerät - interner Fehler Drehmomentanforderung zu hoch |
| 0x17E0 | P17E0 | P17E0 Übersetzungsüberwachung alle Kupplungen |
| 0x17E1 | P17E1 | P17E1 Übersetzungsüberwachung Kupplung A |
| 0x17E2 | P17E2 | P17E2 Übersetzungsüberwachung Kupplung B |
| 0x17E3 | P17E3 | P17E3 Übersetzungsüberwachung Kupplung C |
| 0x17E4 | P17E4 | P17E4 Übersetzungsüberwachung Kupplung D |
| 0x17E5 | P17E5 | P17E5 Übersetzungsüberwachung Kupplung E |
| 0x17E6 | P17E6 | P17E6 Übersetzungsüberwachung Schaltung 1-2 |
| 0x17E7 | P17E7 | P17E7 Übersetzungsüberwachung Schaltung 2-3 |
| 0x17E8 | P17E8 | P17E8 Übersetzungsüberwachung Schaltung 3-4 |
| 0x17E9 | P17E9 | P17E9 Übersetzungsüberwachung Schaltung 4-5 |
| 0x17EA | P17EA | P17EA Übersetzungsüberwachung Schaltung 5-6 |
| 0x17EB | P17EB | P17EB Übersetzungsüberwachung Schaltung 6-5 |
| 0x17EC | P17EC | P17EC Übersetzungsüberwachung Schaltung 5-4 |
| 0x17ED | P17ED | P17ED Übersetzungsüberwachung Schaltung 4-3 |
| 0x17EE | P17EE | P17EE Übersetzungsüberwachung Schaltung 3-2 |
| 0x17EF | P17EF | P17EF Übersetzungsüberwachung Schaltung 2-1 |
| 0x17F0 | P17F0 | P17F0 Übersetzungsüberwachung Kupplungen A und D |
| 0x17F1 | P17F1 | P17F1 Übersetzungsüberwachung Kupplungen A und C |
| 0x17F2 | P17F2 | P17F2 Übersetzungsüberwachung Kupplungen A und B |
| 0x17F3 | P17F3 | P17F3 Übersetzungsüberwachung Kupplungen A und E |
| 0x17F4 | P17F4 | P17F4 Übersetzungsüberwachung Kupplungen B und E |
| 0x17F5 | P17F5 | P17F5 Übersetzungsüberwachung Kupplungen C und E |
| 0x17F6 | P17F6 | P17F6 Übersetzungsüberwachung Kupplungen B und D |
| 0x17F7 | P17F7 | P17F7 Übersetzungsüberwachung Schaltung 6-4 |
| 0x17F8 | P17F8 | P17F8 Übersetzungsüberwachung Schaltung 5-3  |
| 0x17F9 | P17F9 | P17F9 Übersetzungsüberwachung Schaltung 4-2 |
| 0x17FA | P17FA | P17FA Übersetzungsüberwachung Schaltung 3-1 |
| 0x1800 | P1800 | P1800 Eingangsdrehzahl / Gang - Korrelationsfehler |
| 0x1801 | P1801 | P1801 Magnetventil 1 Schaltkreis - niedrig |
| 0x1802 | P1802 | P1802 Magnetventil 2 Schaltkreis - niedrig |
| 0x1803 | P1803 | P1803 Magnetventil 3 Schaltkreis - niedrig |
| 0x1804 | P1804 | P1804 Magnetventil 4 Schaltkreis - niedrig |
| 0x1806 | P1806 | P1806 Magnetventil 1 oder 2 klemmt mechanisch |
| 0x1808 | P1808 | P1808 Getriebesteuergerät - interner Fehler Überwachungsebene 2, ungewollter Kraftschluss in Neutral |
| 0x1809 | P1809 | P1809 Getriebesteuergerät - interner Fehler Überwachungsebene 2, ungewollter Fahrtrichtungswechsel |
| 0x180A | P180A | P180A Kupplung A - Kraftschlussverlust |
| 0x180B | P180B | P180B Kupplung A - Verspannung |
| 0x180C | P180C | P180C Kupplung B - Kraftschlussverlust |
| 0x180D | P180D | P180D Kupplung B - Verspannung |
| 0x180E | P180E | P180E Kupplung C - Kraftschlussverlust |
| 0x180F | P180F | P180F Kupplung C - Verspannung |
| 0x1810 | P1810 | P1810 Eingangsdrehzahlfühler Turbine Schaltkreis - hoch |
| 0x1811 | P1811 | P1811 Eingangsdrehzahlfühler Turbine Schaltkreis - niedrig |
| 0x1812 | P1812 | P1812 Abtriebsdrehzahlfühler Schaltkreis - hoch |
| 0x1813 | P1813 | P1813 Abtriebsdrehzahlfühler Schaltkreis - niedrig |
| 0x1814 | P1814 | P1814 Abtriebsdrehzahlsensor - Gradient zu hoch |
| 0x1815 | P1815 | P1815 Getriebestufenschalter am Lenkrad Taste '+' Schaltkreis - niedrig |
| 0x1816 | P1816 | P1816 Getriebestufenschalter am Lenkrad Taste '-' Schaltkreis - niedrig |
| 0x1817 | P1817 | P1817 Wählhebel GSL0 Schaltkreis - hoch |
| 0x1818 | P1818 | P1818 Wählhebel GSL0 Schaltkreis - niedrig |
| 0x1819 | P1819 | P1819 Wählhebel GSL0 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x181A | P181A | P181A Kupplung D - Kraftschlussverlust |
| 0x181B | P181B | P181B Kupplung D - Verspannung |
| 0x1820 | P1820 | P1820 Wählhebel GSL1 Schaltkreis - hoch |
| 0x1821 | P1821 | P1821 Wählhebel GSL1 Schaltkreis - niedrig |
| 0x1822 | P1822 | P1822 Wählhebel GSL1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1823 | P1823 | P1823 Wählhebel Digitalleitung Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1825 | P1825 | P1825 Shiftlock - Fehlfunktion |
| 0x1826 | P1826 | P1826 Shiftlock Relais (CVT) Schaltkreis - niedrig |
| 0x1827 | P1827 | P1827 Shiftlock Relais (CVT) Schaltkreis - hoch |
| 0x1828 | P1828 | P1828 Elektrische Drucksteller Sollwerte - Messbereichs- oder Leistungsproblem |
| 0x1829 | P1829 | P1829 Kupplungsansteuerung Sollwerte - Messbereichs- oder Leistungsproblem |
| 0x1830 | P1830 | P1830 Drucksteller - Stromfehler in P/R/N |
| 0x1831 | P1831 | P1831 Elektrischer Drucksteller 1 Schaltkreis - hoch |
| 0x1832 | P1832 | P1832 Elektrischer Drucksteller 2 Schaltkreis - hoch |
| 0x1833 | P1833 | P1833 Elektrischer Drucksteller 3 Schaltkreis - hoch |
| 0x1834 | P1834 | P1834 Elektrischer Drucksteller 4 Schaltkreis - hoch |
| 0x1835 | P1835 | P1835 Elektrischer Drucksteller 5 Schaltkreis - hoch |
| 0x1836 | P1836 | P1836 Wandlerüberbrückungskupplung Schaltkreis - hoch |
| 0x1837 | P1837 | P1837 Antriebsstrang Kommunikationsschaltkreis A-CAN - Fehlfunktion |
| 0x1840 | P1840 | P1840 Hydraulikeinheit / Steuergeräteprogramm - Korrelationsfehler |
| 0x1841 | P1841 | P1841 Elektrischer Drucksteller 1 Schaltkreis - niedrig |
| 0x1842 | P1842 | P1842 Elektrischer Drucksteller 2 Schaltkreis - niedrig |
| 0x1843 | P1843 | P1843 Elektrischer Drucksteller 3 Schaltkreis - niedrig |
| 0x1844 | P1844 | P1844 Elektrischer Drucksteller 4 Schaltkreis - niedrig |
| 0x1845 | P1845 | P1845 Elektrischer Drucksteller 5 Schaltkreis - niedrig |
| 0x1846 | P1846 | P1846 Wandlerüberbrückungskupplung Schaltkreis - niedrig |
| 0x1847 | P1847 | P1847 Eingangsdrehzahlfühler Turbine - Fehlererkennung unplausibel |
| 0x1848 | P1848 | P1848 Getriebepositionssensor Schaltkreis - Fehlfunktion |
| 0x1849 | P1849 | P1849 Abtriebsdrehzahlfühler - Fehlererkennung unplausibel |
| 0x1850 | P1850 | P1850 Wählwinkel Sensor Schaltkreis - hoch |
| 0x1851 | P1851 | P1851 Wählwinkel Sensor Schaltkreis - niedrig |
| 0x1852 | P1852 | P1852 Wählwinkel Sensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1853 | P1853 | P1853 Kupplungsweg Sensor Schaltkreis - hoch |
| 0x1854 | P1854 | P1854 Kupplungsweg Sensor Schaltkreis - niedrig |
| 0x1855 | P1855 | P1855 Kupplungsweg Sensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1856 | P1856 | P1856 Hydraulikdrucksensor Schaltkreis - hoch |
| 0x1857 | P1857 | P1857 Hydraulikdrucksensor Schaltkreis - niedrig |
| 0x1858 | P1858 | P1858 Hydraulikdrucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1859 | P1859 | P1859 Kupplungsdrehzahl Sensor - Plausibilitätsfehler |
| 0x185A | P185A | P185A Elektrischer Drucksteller Ansteuerung - in Position oder Sollposition D oder R unplausibel |
| 0x185B | P185B | P185B Elektrischer Drucksteller Ansteuerung - unerlaubtes Einlegen vom Rückwärtsgang bei zu hoher Fahrzeuggeschwindigkeit  |
| 0x185C | P185C | P185C Elektrischer Drucksteller Ansteuerung - unerlaubtes Einlegen P bei unplausiblem Fahrzeuggeschwindigkeitsignal |
| 0x185D | P185D | P185D Elektrischer Drucksteller Ansteuerung - in Position P unplausibel |
| 0x185E | P185E | P185E Getriebesteuergerät - interner Fehler EWS (elektronische Wegfahrsperre) Manipulationsversuch entdeckt |
| 0x185F | P185F | P185F Getriebesteuergerät - interner Fehler EWS (elektronische Wegfahrsperre) Sperre aktiv |
| 0x1860 | P1860 | P1860 Wählhebel Hallsensor Fehler 1 |
| 0x1861 | P1861 | P1861 Schaltvorgang 2./1. Gang - Fehlfunktion |
| 0x1862 | P1862 | P1862 Schaltvorgang 3./2. Gang - Fehlfunktion |
| 0x1863 | P1863 | P1863 Schaltvorgang 4./3. Gang - Fehlfunktion |
| 0x1864 | P1864 | P1864 Schaltvorgang 5./4. Gang - Fehlfunktion |
| 0x1865 | P1865 | P1865 Schaltvorgang 6./5. Gang - Fehlfunktion |
| 0x1866 | P1866 | P1866 Wählhebel GSL2 Schaltkreis - hoch |
| 0x1867 | P1867 | P1867 Wählhebel GSL2 Schaltkreis - niedrig |
| 0x1868 | P1868 | P1868 Wählhebel GSL2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1869 | P1869 | P1869 Wählhebel GSL3 Schaltkreis - hoch |
| 0x1870 | P1870 | P1870 Wählhebel GSL3 Schaltkreis - niedrig |
| 0x1871 | P1871 | P1871 Schaltvorgang 2./1. Gang - hoch |
| 0x1872 | P1872 | P1872 Schaltvorgang 3./2. Gang - hoch |
| 0x1873 | P1873 | P1873 Schaltvorgang 4./3. Gang - hoch |
| 0x1874 | P1874 | P1874 Schaltvorgang 5./4. Gang - hoch |
| 0x1875 | P1875 | P1875 Schaltvorgang 6./5. Gang - hoch |
| 0x1876 | P1876 | P1876 Wählhebel GSL3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1877 | P1877 | P1877 Wählhebel GSL4 Schaltkreis - hoch |
| 0x1878 | P1878 | P1878 Wählhebel GSL4 Schaltkreis - niedrig |
| 0x1879 | P1879 | P1879 Wählhebel GSL4 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1880 | P1880 | P1880 Getriebe-Zahnradpaar (ein oder mehrere) - mechanischer Fehler |
| 0x1881 | P1881 | P1881 Schaltvorgang 1./2. Gang - hoch |
| 0x1882 | P1882 | P1882 Schaltvorgang 2./3. Gang - hoch |
| 0x1883 | P1883 | P1883 Schaltvorgang 3./4. Gang - hoch |
| 0x1884 | P1884 | P1884 Schaltvorgang 4./5. Gang - hoch |
| 0x1885 | P1885 | P1885 Schaltvorgang 5./6. Gang - hoch |
| 0x1886 | P1886 | P1886 Schaltvorgang 5./6. Gang - Fehlfunktion |
| 0x1887 | P1887 | P1887 Hydraulikpumpe - Fehlfunktion |
| 0x1888 | P1888 | P1888 CAN-Timeout Instrumentenkombination bei Betätigung Parksperren-Notentriegelung |
| 0x1889 | P1889 | P1889 Versorgungsspannung - elektrischer Fehler |
| 0x1890 | P1890 | P1890 Versorgungsspannung - Fehlfunktion |
| 0x1891 | P1891 | P1891 Versorgungsspannung - Überspannung |
| 0x1892 | P1892 | P1892 Versorgungsspannung - Unterspannung |
| 0x1893 | P1893 | P1893 Versorgungsspannung Elektrischer Drucksteller/Magnetventil Schaltkreis - hoch |
| 0x1894 | P1894 | P1894 Versorgungsspannung Elektrischer Drucksteller/Magnetventil Schaltkreis - niedrig |
| 0x1895 | P1895 | P1895 Versorgungsspannung Elektrischer Drucksteller/Magnetventil Schaltkreis - kein Signal |
| 0x1896 | P1896 | P1896 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - Fehlfunktion |
| 0x1897 | P1897 | P1897 Versorgungsspannung Sensoren - hoch |
| 0x1898 | P1898 | P1898 Versorgungsspannung Sensoren - niedrig |
| 0x1899 | P1899 | P1899 Versorgungsspannung Sensoren - Messbereichs- oder Leistungsproblem |
| 0x18A0 | P18A0 | P18A0 Elektrischer Drucksteller 1 - statische Nebenschlussüberwachung |
| 0x18A1 | P18A1 | P18A1 Elektrischer Drucksteller 2 - statische Nebenschlussüberwachung |
| 0x18A2 | P18A2 | P18A2 Elektrischer Drucksteller 3 - statische Nebenschlussüberwachung |
| 0x18A3 | P18A3 | P18A3 Elektrischer Drucksteller 4 - statische Nebenschlussüberwachung |
| 0x18A4 | P18A4 | P18A4 Elektrischer Drucksteller 5 - statische Nebenschlussüberwachung |
| 0x18A5 | P18A5 | P18A5 Wandlerüberbrückungskupplung elektrischer Drucksteller - statische Nebenschlussüberwachung |
| 0x18A6 | P18A6 | P18A6 Elektrischer Drucksteller 7 - statische Nebenschlussüberwachung |
| 0x18A7 | P18A7 | P18A7 Magnetventil 2 - statische Nebenschlussüberwachung |
| 0x18B0 | P18B0 | P18B0 Elektrischer Drucksteller 1 - dynamische Nebenschlussüberwachung |
| 0x18B1 | P18B1 | P18B1 Elektrischer Drucksteller 2 - dynamische Nebenschlussüberwachung |
| 0x18B2 | P18B2 | P18B2 Elektrischer Drucksteller 3 - dynamische Nebenschlussüberwachung |
| 0x18B3 | P18B3 | P18B3 Elektrischer Drucksteller 4 - dynamische Nebenschlussüberwachung |
| 0x18B4 | P18B4 | P18B4 Elektrischer Drucksteller 5 - dynamische Nebenschlussüberwachung |
| 0x18B5 | P18B5 | P18B5 Wandlerüberbrückungskupplung elektrischer Drucksteller - dynamische Nebenschlussüberwachung |
| 0x18B6 | P18B6 | P18B6 Elektrischer Drucksteller 7 - dynamische Nebenschlussüberwachung |
| 0x18B7 | P18B7 | P18B7 Magnetventil 2 - dynamische Nebenschlussüberwachung |
| 0x18B8 | P18B8 | P18B8 Status Bremsdruck - CAN-Signal fehlerhaft |
| 0x18B9 | P18B9 | P18B9 Fahrzeug-Längsbeschleunigung - CAN-Signal fehlerhaft |
| 0x18C0 | P18C0 | P18C0 Übersetzungsüberwachung Kupplungen B und C |
| 0x18C1 | P18C1 | P18C1 Übersetzungsüberwachung Kupplungen C und D |
| 0x18C2 | P18C2 | P18C2 Übersetzungsüberwachung Kupplungen D und E |
| 0x18C3 | P18C3 | P18C3 Übersetzungsüberwachung Kupplungen A, B und C |
| 0x18C4 | P18C4 | P18C4 Übersetzungsüberwachung Kupplungen A, B und E |
| 0x18C5 | P18C5 | P18C5 Übersetzungsüberwachung Kupplungen B, C und E |
| 0x18C6 | P18C6 | P18C6 Übersetzungsüberwachung Kupplungen B, D und E |
| 0x18C7 | P18C7 | P18C7 Übersetzungsüberwachung Kupplungen B, C und D |
| 0x18C8 | P18C8 | P18C8 Übersetzungsüberwachung Kupplungen C, D und E |
| 0x18C9 | P18C9 | P18C9 Übersetzungsüberwachung Kupplungen A, C und D |
| 0x18CA | P18CA | P18CA Übersetzungsüberwachung Kupplungen A, D und E |
| 0x18CB | P18CB | P18CB Übersetzungsüberwachung Kupplungen A, B und D |
| 0x18D0 | P18D0 | P18D0 Getriebesteuerung - interner Fehler Schnittstelle Fahrstrategie |
| 0x18D1 | P18D1 | P18D1 Übersetzungsüberwachung Schaltung aus Gang 1 |
| 0x18D2 | P18D2 | P18D2 Übersetzungsüberwachung Schaltung aus Gang 2 |
| 0x18D3 | P18D3 | P18D3 Übersetzungsüberwachung Schaltung aus Gang 3 |
| 0x18D4 | P18D4 | P18D4 Übersetzungsüberwachung Schaltung aus Gang 4 |
| 0x18D5 | P18D5 | P18D5 Übersetzungsüberwachung Schaltung aus Gang 5 |
| 0x18D6 | P18D6 | P18D6 Übersetzungsüberwachung Schaltung aus Gang 6 |
| 0x18D7 | P18D7 | P18D7 Übersetzungsüberwachung Schaltung aus Gang 7 |
| 0x18D8 | P18D8 | P18D8 Übersetzungsüberwachung Schaltung aus Gang 8 |
| 0x1900 | P1900 | P1900 Getriebeölkühler - kein Durchsatz |
| 0x1920 | P1920 | P1920 Getriebeöltemperaturfühler 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1930 | P1930 | P1930 Getriebesteuergerät - interner Fehler Überwachungsebene 2, Notlauf 1 |
| 0x1931 | P1931 | P1931 Getriebesteuergerät - interner Fehler Überwachungsebene 2, Notlauf 2 |
| 0x1932 | P1932 | P1932 Getriebesteuergerät - interner Fehler Überwachungsebene 2, Notlauf 3 |
| 0x1933 | P1933 | P1933 Getriebesteuergerät - interner Fehler Überwachungsebene 2, Notlauf 4 |
| 0x1A00 | P1A00 | P1A00 Hybridantriebs-Steuergerät Drehmomentanforderung Motor - Fehlfunktion |
| 0x1A01 | P1A01 | P1A01 Hybridbatterie-Steuergrät - interner EEPROM Fehler |
| 0x1A02 | P1A02 | P1A02 PEB (Power Electronic Box) Pin Leitung Hybridbatterie Schaltkreis - Leitungsunterbrechung |
| 0x1A03 | P1A03 | P1A03 PEB (Power Electronic Box) Pin Leitung Hybridbatterie Schaltkreis - niedrig |
| 0x1A04 | P1A04 | P1A04 PEB (Power Electronic Box) Pin Leitung Hybridbatterie Schaltkreis - hoch |
| 0x1A05 | P1A05 | P1A05 Hybridbatterie-Steuergrät - interner 'Random Access Memory' (RAM) Fehler |
| 0x1A06 | P1A06 | P1A06 Hybridbatterie-Steuergrät - interner 'Read Only Memory' (ROM) Fehler |
| 0x1A07 | P1A07 | P1A07 Hybridbatteriesatz Stromsensor Versorgungsspannungskreis - Messbereichs- oder Leistungsproblem |
| 0x1A08 | P1A08 | P1A08 Hybridbatterie Schütze Schaltkreis - verklebt/festgebrannt im geschlossenen Zustand |
| 0x1A09 | P1A09 | P1A09 Hochvoltsystem - Abschaltung |
| 0x1A0A | P1A0A | P1A0A Hybridantriebs-Steuergerät Weckleitung Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1A0C | P1A0C | P1A0C Hybridbatterie-Steuergrät Versorgungsspannungskreis - niedrig |
| 0x1A0D | P1A0D | P1A0D Hybridbatterie-Steuergrät Versorgungsspannungskreis - hoch |
| 0x1A0E | P1A0E | P1A0E Antriebsmotor 1 Kalibrierdaten Hochvolt-Sensorik - ungültig |
| 0x1A0F | P1A0F | P1A0F Antriebsmotor 2 Kalibrierdaten Hochvolt-Sensorik - ungültig |
| 0x1A10 | P1A10 | P1A10 Inverter 2 Kühlkreislauf - Kühlmitteltemperatur Messbereichs- oder Leistungsproblem |
| 0x1A11 | P1A11 | P1A11 Inverter 1 Kühlkreislauf - Kühlmitteltemperatur Messbereichs- oder Leistungsproblem |
| 0x1A12 | P1A12 | P1A12 Hybridbatterie Schütze Versorgungsspannungskreis - niedrig |
| 0x1A13 | P1A13 | P1A13 Hybridbatterie Schütze Versorgungsspannungskreis - hoch |
| 0x1A21 | P1A21 | P1A21 Hybridbatterie Schütze - offen (erkannt vom Hybridantriebs-Steuergerät) |
| 0x1A23 | P1A23 | P1A23 Hybridbatterie - System-Vorbelastungszeit zu lang nach Schließung der Schütze |
| 0x1A25 | P1A25 | P1A25 Antriebsmotor 1 Inverter - Strom zu hoch |
| 0x1A26 | P1A26 | P1A26 Antriebsmotor 2 Inverter - Strom zu hoch |
| 0x1A2A | P1A2A | P1A2A Antriebsmotor 2 Steuergerät 5V Logikspannungskreis - hoch |
| 0x1A2B | P1A2B | P1A2B Antriebsmotor 2 Steuergerät 5V Logikspannungskreis - niedrig |
| 0x1A2C | P1A2C | P1A2C Antriebsmotor 1 Steuergerät 5V Logikspannungskreis - hoch |
| 0x1A2D | P1A2D | P1A2D Antriebsmotor 1 Steuergerät 5V Logikspannungskreis - niedrig |
| 0x1A30 | P1A30 | P1A30 Hybridbatterie Weckleitung 1 Schaltkreis - niedrig |
| 0x1A31 | P1A31 | P1A31 Hybridbatterie Weckleitung 1 Schaltkreis - hoch |
| 0x1A32 | P1A32 | P1A32 Hybridbatterie Weckleitung 2 Schaltkreis - hoch |
| 0x1A33 | P1A33 | P1A33 Antriebsmotor 2 Steuergerät 15V Spannungsversorgungsschaltkreis - hoch |
| 0x1A34 | P1A34 | P1A34 Antriebsmotor 2 Steuergerät 15V Spannungsversorgungsschaltkreis - niedrig |
| 0x1A35 | P1A35 | P1A35 Antriebsmotor 1 Steuergerät 15V Spannungsversorgungsschaltkreis - hoch |
| 0x1A36 | P1A36 | P1A36 Antriebsmotor 1 Steuergerät 15V Spannungsversorgungsschaltkreis - niedrig |
| 0x1A37 | P1A37 | P1A37 Antriebsmotor 1 Steuergerät Drehmomentüberwachung - Fehlfunktion |
| 0x1A38 | P1A38 | P1A38 Antriebsmotor 2 Steuergerät Drehmomentüberwachung - Fehlfunktion |
| 0x1A40 | P1A40 | P1A40 Hybridantriebs-Steuergerät - interner 'Read only Memory' (ROM) Fehler |
| 0x1A41 | P1A41 | P1A41 Hybridantriebs-Steuergerät - interner 'Random Access Memory' (RAM') Fehler |
| 0x1A42 | P1A42 | P1A42 Hybridantriebs-Steuergerät - interner EEPROM Schreibfehler |
| 0x1A43 | P1A43 | P1A43 Hybridantriebs-Steuergerät - Prozessorfehler |
| 0x1A44 | P1A44 | P1A44 Hybridantriebs-Steuergerät  Abschaltung - Leistungsproblem |
| 0x1A45 | P1A45 | P1A45 Hybridantriebs-Steuergerät - nicht programmiert |
| 0x1A46 | P1A46 | P1A46 Hybridantriebs-Steuergerät - interner EEPROM Lesefehler |
| 0x1A47 | P1A47 | P1A47 Hybridantriebs-Steuergerät - internes Leistungsproblem Prozessor |
| 0x1A48 | P1A48 | P1A48 Hybridantriebs-Steuergerät - interner 'Random Access Memory' (RAM') Datenredundanz Fehler |
| 0x1A4F | P1A4F | P1A4F Antriebsmotor 1 Steuergerät - nicht programmiert |
| 0x1A50 | P1A50 | P1A50 Steuergerät Antriebsmotor 1 - interner 'Random Access Memory' (RAM) Fehler |
| 0x1A51 | P1A51 | P1A51 Steuergerät Antriebsmotor 1 - interner 'Read Only Memory' (ROM) Fehler |
| 0x1A52 | P1A52 | P1A52 Antriebsmotor 2 Steuergerät - nicht programmiert |
| 0x1A53 | P1A53 | P1A53 Steuergerät Antriebsmotor 2 - interner 'Random Access Memory' (RAM) Fehler |
| 0x1A54 | P1A54 | P1A54 Steuergerät Antriebsmotor 2 - interner 'Read Only Memory' (ROM) Fehler |
| 0x1A55 | P1A55 | P1A55 Getriebeöl-Zusatzpumpenmotor Steuergerät - Übertemperatur |
| 0x1A5A | P1A5A | P1A5A Hybridbatteriesatz Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x1A69 | P1A69 | P1A69 Getriebeöl-Zusatzpumpenmotor Hochspannungskreis - niedrig |
| 0x1A6A | P1A6A | P1A6A Getriebeöl-Zusatzpumpenmotor Hochspannungskreis - hoch |
| 0x1A6B | P1A6B | P1A6B Getriebeöl-Zusatzpumpenmotor Phase U Spannungssensor Schaltkreis - Fehlfunktion |
| 0x1A6C | P1A6C | P1A6C Getriebeöl-Zusatzpumpenmotor Phase V Spannungssensor Schaltkreis - Fehlfunktion |
| 0x1A6D | P1A6D | P1A6D Getriebeöl-Zusatzpumpenmotor Phase W Spannungssensor Schaltkreis - Fehlfunktion |
| 0x1A6E | P1A6E | P1A6E Getriebeöl-Zusatzpumpe - Überdehzahl |
| 0x1A6F | P1A6F | P1A6F Getriebeöl-Zusatzpumpe Spannungsisolation - Fehler |
| 0x1A70 | P1A70 | P1A70 Getriebeöl-Zusatzpumpe Stromsensor Schaltkreis - niedrig |
| 0x1A71 | P1A71 | P1A71 Getriebeöl-Zusatzpumpe Stromsensor Schaltkreis - hoch |
| 0x1A74 | P1A74 | P1A74 Getriebeöl-Zusatzpumpe Spannungssensor Schaltkreis - niedrig |
| 0x1A75 | P1A75 | P1A75 Getriebeöl-Zusatzpumpe Spannungssensor Schaltkreis - hoch |
| 0x1ABC | P1ABC | P1ABC 14 Volt Powermodul Hybridbatterie Bordnetzspannung - Unterspannung |
| 0x1ABD | P1ABD | P1ABD 14 Volt Powermodul Hybridbatterie Bordnetzspannung - Überspannung |
| 0x1ABE | P1ABE | P1ABE Hybridbatteriesatz Übertemperatur - 2. Schwellwert überschritten |
| 0x1AC6 | P1AC6 | P1AC6 Antriebsmotor 2 Steuergerät - Verlust Kurbelwellengebersignal |
| 0x1AC7 | P1AC7 | P1AC7 Antriebsmotor 2 Steuergerät - Kurbelwellengebersignal Messbereichs- oder Leistungsproblem |
| 0x1ADC | P1ADC | P1ADC Steuergerät Antriebsmotor 1 - interner EEPROM Fehler |
| 0x1ADD | P1ADD | P1ADD Steuergerät Antriebsmotor 2 - interner EEPROM Fehler |
| 0x1ADE | P1ADE | P1ADE Antriebsmotor 2 Steuergerät 14V Spannungsversorgungsschaltkreis - niedrig |
| 0x1ADF | P1ADF | P1ADF Antriebsmotor 2 Steuergerät 14V Spannungsversorgungsschaltkreis - hoch |
| 0x1AE0 | P1AE0 | P1AE0 Antriebsmotor 1 Steuergerät 14V Spannungsversorgungsschaltkreis - niedrig |
| 0x1AE1 | P1AE1 | P1AE1 Antriebsmotor 1 Steuergerät 14V Spannungsversorgungsschaltkreis - hoch |
| 0x1AE5 | P1AE5 | P1AE5 Hybridbatterie Schütze Steuerkreis - ungültiges Signal vom Hybridantriebs-Steuergerät erhalten |
| 0x1AE7 | P1AE7 | P1AE7 Hybridbatterie Spannungsisolation - interner Widerstand unter 2. Schwellwert |
| 0x1AE8 | P1AE8 | P1AE8 Antriebsmotor 1 Spannungssensor Schaltkreis - niedrig |
| 0x1AE9 | P1AE9 | P1AE9 Antriebsmotor 1 Spannungssensor Schaltkreis - hoch |
| 0x1AEA | P1AEA | P1AEA Antriebsmotor 2 Spannungssensor Schaltkreis - niedrig |
| 0x1AEB | P1AEB | P1AEB Antriebsmotor 2 Spannungssensor Schaltkreis - hoch |
| 0x1AEC | P1AEC | P1AEC Antriebsmotor 1 Spannungssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1AED | P1AED | P1AED Antriebsmotor 2 Spannungssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x1AEE | P1AEE | P1AEE Antriebsmotor 1 Hochspannungskreis - hoch |
| 0x1AEF | P1AEF | P1AEF Antriebsmotor 2 Hochspannungskreis - hoch |
| 0x1AF0 | P1AF0 | P1AF0 Antriebsmotor 1 Spannungsversorgungsschaltkreis - Isolationsfehler |
| 0x1AF1 | P1AF1 | P1AF1 Antriebsmotor 1 Spannungsversorgungsschaltkreis - Warnung Isolationsfehler |
| 0x1AF2 | P1AF2 | P1AF2 Antriebsmotor 2 Spannungsversorgungsschaltkreis - Isolationsfehler |
| 0x1AF3 | P1AF3 | P1AF3 Antriebsmotor 2 Spannungsversorgungsschaltkreis - Warnung Isolationsfehler |
| 0x1AF4 | P1AF4 | P1AF4 Antriebsmotor 1 Spannungsisolationssensor Schaltkreis - niedrig |
| 0x1AF5 | P1AF5 | P1AF5 Antriebsmotor 1 Spannungsisolationssensor Schaltkreis - hoch |
| 0x1AF6 | P1AF6 | P1AF6 Antriebsmotor 2 Spannungsisolationssensor Schaltkreis - niedrig |
| 0x1AF7 | P1AF7 | P1AF7 Antriebsmotor 2 Spannungsisolationssensor Schaltkreis - hoch |
| 0x1AF8 | P1AF8 | P1AF8 Antriebsmotor 1 Inverter - Abschaltpfad-Fehler |
| 0x1AF9 | P1AF9 | P1AF9 Antriebsmotor 1 Inverter - Einschaltfehler |
| 0x1AFA | P1AFA | P1AFA Antriebsmotor 2 Steuergerät - Programmierfehler |
| 0x1AFB | P1AFB | P1AFB Antriebsmotor 1 Steuergerät - Programmablaufkontrolle ungültig |
| 0x1AFE | P1AFE | P1AFE Antriebsmotor 2 Inverter - Abschaltpfad-Fehler |
| 0x1AFF | P1AFF | P1AFF Antriebsmotor 2 Inverter - Einschaltfehler |
| 0x1B01 | P1B01 | P1B01 Antriebsmotor 2 Steuergerät - Programmablaufkontrolle ungültig |
| 0x1B03 | P1B03 | P1B03 Antriebsmotor 1 Positionssensor Schaltkreis - kein Signal |
| 0x1B04 | P1B04 | P1B04 Antriebsmotor 2 Positionssensor Schaltkreis - kein Signal |
| 0x1B05 | P1B05 | P1B05 Antriebsmotor 1 Hochvoltkontaktüberwachung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x1B06 | P1B06 | P1B06 Antriebsmotor 2 Hochvoltkontaktüberwachung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x1B07 | P1B07 | P1B07 Antriebsmotor 1 Hochspannungskreis - niedrig |
| 0x1B08 | P1B08 | P1B08 Antriebsmotor 2 Hochspannungskreis - niedrig |
| 0x1B09 | P1B09 | P1B09 Antriebsmotor 1 Steuergerät 14V Spannungsversorgungsschaltkreis - zu niedrig für Betrieb Steuergerät |
| 0x1B0A | P1B0A | P1B0A Antriebsmotor 2 Steuergerät 14V Spannungsversorgungsschaltkreis - zu niedrig für Betrieb Steuergerät |
| 0x1B0F | P1B0F | P1B0F Antriebsmotor 1 Positionssensor - gelernte Adaption nicht korrekt |
| 0x1B10 | P1B10 | P1B10 Antriebsmotor 2 Positionssensor - gelernte Adaption nicht korrekt |
| 0x1B11 | P1B11 | P1B11 Hybridantriebs-Steuergerät Drehmomenterfassung - Wert zu niedrig |
| 0x1B12 | P1B12 | P1B12 Hybridantriebs-Steuergerät Drehmomenterfassung - Wert zu hoch |
| 0x1B18 | P1B18 | P1B18 Getriebeöl-Zusatzpumpe - Regelabweichung |
| 0x1B20 | P1B20 | P1B20 Hybridbatteriesatz Kühlmittelpumpe - gesperrt |
| 0x1B21 | P1B21 | P1B21 Hybridantriebs-Steuergerät Verlustmoment dynamisch / berechnet - Korrelationsfehler |
| 0x1B22 | P1B22 | P1B22 Hybridbatterie Spannungsisolation - interner Widerstand unter 1. Schwellwert |
| 0x1B27 | P1B27 | P1B27 Hybridbatterie Kühlsystem Kühlaggregat - Leistungsproblem |
| 0x1B28 | P1B28 | P1B28 Hybridbatteriesatz Kühlmittelpumpe - eingeschränkter Betrieb |
| 0x1B29 | P1B29 | P1B29 Hybridbatteriesatz Kühlmittelpumpe - Trockenlauf |
| 0x1B2A | P1B2A | P1B2A Hybridbatteriesatz Kühlmittelpumpe Steuerkreis - Überspannung oder Überstrom |
| 0x1B2B | P1B2B | P1B2B Hybridbatteriesatz Kühlmittelpumpe - defekt |
| 0x1B2D | P1B2D | P1B2D Hybridbatterie Leitung PEB (Power Electronic Box) Schaltkreis - Leitungsunterbrechung |
| 0x1B2E | P1B2E | P1B2E Hybridbatteriesatz Übertemperatur - 1. Schwellwert überschritten |
| 0x1B2F | P1B2F | P1B2F Hybridbatterie Schütze - klemmen offen |
| 0x1B30 | P1B30 | P1B30 Hybridantriebs-Steuergerät, interne Getriebeüberwachung - Parkposition eingelegt entgegen Fahrerwunsch |
| 0x1B31 | P1B31 | P1B31 Hybridantriebs-Steuergerät, interne Getriebeüberwachung - Parkposition nicht eingelegt entgegen Fahrerwunsch |
| 0x1B32 | P1B32 | P1B32 Hybridantriebs-Steuergerät, interne Getriebeüberwachung - aktuelle Parkposition nicht erkennbar |
| 0x1B33 | P1B33 | P1B33 Hybridantriebs-Steuergerät, interne Getriebeüberwachung - aktuelle Parkposition nicht erkennbar oder unplausibel |
| 0x1B34 | P1B34 | P1B34 Hybridbatterie Kühlmittelventil zum Wärmetauscher Schaltkreis - hoch |
| 0x1B35 | P1B35 | P1B35 Hybridbatterie Kühlmittelventil zum Wärmetauscher Schaltkreis - niedrig |
| 0x1B36 | P1B36 | P1B36 Hybridbatterie Kühlmittelventil zum Wärmetauscher Schaltkreis - Leitungsunterbrechung |
| 0x1B37 | P1B37 | P1B37 Hybridbatterie Kühlmittelventil zum Kühlaggregat Schaltkreis - hoch |
| 0x1B38 | P1B38 | P1B38 Hybridbatterie Kühlmittelventil zum Kühlaggregat Schaltkreis - niedrig |
| 0x1B39 | P1B39 | P1B39 Hybridbatterie Kühlmittelventil zum Kühlaggregat Schaltkreis - Leitungsunterbrechung |
| 0x1B3F | P1B3F | P1B3F Hybridbatterie - Überstrom |
| 0x1B40 | P1B40 | P1B40 Hochvolt-Trennschalter für Service - ausgeschaltet |
| 0x1B41 | P1B41 | P1B41 Hybridbatterie Schütze - offen (erkannt vom Hybridbatterie-Steuergerät) |
| 0x1B42 | P1B42 | P1B42 Hybridbatterie Vorbelastunsgswiderstand - Überhitzungsschutz aktiv |
| 0x1B43 | P1B43 | P1B43 Hybridbatterie Spannungsisolation - Widerstand unter 2. Schwellwert |
| 0x1B44 | P1B44 | P1B44 Hybridbatterie Spannungsisolation - Widerstand unter 1. Schwellwert |
| 0x1B45 | P1B45 | P1B45 Hybridbatterie Pluspol- und Vorbelastungs-Schütz Schaltkreis - verklebt/festgebrannt |
| 0x1B46 | P1B46 | P1B46 Hybridbatterie Minuspol-Schütz Schaltkreis - verklebt/festgebrannt |
| 0x1B47 | P1B47 | P1B47 Hochvoltsicherheit - Funktion ausgeschaltet |
| 0x1B48 | P1B48 | P1B48 Hybridbatteriesatz Kühlmittelpumpe - Drehzahl unplausibel |
| 0x1B4A | P1B4A | P1B4A Hybridantriebs-Steuergerät - interner Fehler Shift By Wire Überwachung |
| 0x1B4B | P1B4B | P1B4B Hochvoltsystem - Unterspannung |
| 0x1B4C | P1B4C | P1B4C Hochvoltsystem - Überspannung |
| 0x1B4D | P1B4D | P1B4D Hybridantriebs-Steuergerät, interne Getriebeüberwachung - falsche Anweisung |
| 0x1B4E | P1B4E | P1B4E Hybridantriebs-Steuergerät, interne Getriebeüberwachung - Signalfehler Getriebeposition |
| 0x1B4F | P1B4F | P1B4F Hybridantriebs-Steuergerät, interne Getriebeüberwachung - falsche Getriebeposition |
| 0x1B50 | P1B50 | P1B50 Hybridantriebs-Steuergerät, interne Getriebeüberwachung - Anweisungen nicht ausgeführt |
| 0x1B51 | P1B51 | P1B51 Hybridantriebs-Steuergerät, interne Getriebeüberwachung - falscher Gang |
| 0x1B5F | P1B5F | P1B5F Hybridantriebs-Steuergerät Istmomente - Korrelationsfehler |
| 0x1B71 | P1B71 | P1B71 Batteriesteuerung - Zwangs-Systemabschaltung |
| 0x1B72 | P1B72 | P1B72 Antriebsmotorsteuerung - Zwangs-Systemabschaltung |
| 0x1B73 | P1B73 | P1B73 Sensorik - Zwangs-Systemabschaltung |
| 0x1B74 | P1B74 | P1B74 Notlauf-Ersatzreaktion - Zwangs-Systemabschaltung |
| 0x1B90 | P1B90 | P1B90 14 Volt Powermodul Bordnetzspannung - Überstrom |
| 0x1B91 | P1B91 | P1B91 14 Volt Powermodul Hybridbatterie Bordnetzspannung - Überstrom |
| 0x1C43 | P1C43 | P1C43 Hybridbatteriesatz Kühleraustritt Temperaturfühler Schaltkreis - Leistungsproblem |
| 0x1C44 | P1C44 | P1C44 Hybridbatteriesatz Kühleraustritt Temperaturfühler Schaltkreis - niedrig |
| 0x1C45 | P1C45 | P1C45 Hybridbatteriesatz Kühleraustritt Temperaturfühler Schaltkreis - hoch |
| 0x2000 | P2000 | P2000 NOx-Speicher (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2001 | P2001 | P2001 NOx-Speicher (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2002 | P2002 | P2002 Dieselpartikelfilter (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2003 | P2003 | P2003 Dieselpartikelfilter (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2004 | P2004 | P2004 Ansaugkrümmer Drallklappensteuerung (Bank 1) - klemmt offen |
| 0x2005 | P2005 | P2005 Ansaugkrümmer Drallklappensteuerung (Bank 2) - klemmt offen |
| 0x2006 | P2006 | P2006 Ansaugkrümmer Drallklappensteuerung (Bank 1) - klemmt geschlossen |
| 0x2007 | P2007 | P2007 Ansaugkrümmer Drallklappensteuerung (Bank 2) - klemmt geschlossen |
| 0x2008 | P2008 | P2008 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2009 | P2009 | P2009 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 1) - niedrig |
| 0x200A | P200A | P200A Ansaugkrümmer Drallklappensteuerung (Bank 1) - Leistungsproblem |
| 0x200B | P200B | P200B Ansaugkrümmer Drallklappensteuerung (Bank 2) - Leistungsproblem |
| 0x200C | P200C | P200C Dieselpartikelfilter (Bank1 ) - Übertemperatur |
| 0x200D | P200D | P200D Dieselpartikelfilter (Bank2 ) - Übertemperatur |
| 0x200E | P200E | P200E Katalysatorsystem (Bank 1) - Übertemperatur |
| 0x200F | P200F | P200F Katalysatorsystem (Bank 2) - Übertemperatur |
| 0x2010 | P2010 | P2010 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 1) - hoch |
| 0x2011 | P2011 | P2011 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2012 | P2012 | P2012 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 2) - niedrig |
| 0x2013 | P2013 | P2013 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 2) - hoch |
| 0x2014 | P2014 | P2014 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2015 | P2015 | P2015 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2016 | P2016 | P2016 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 1) - niedrig |
| 0x2017 | P2017 | P2017 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 1) - hoch |
| 0x2018 | P2018 | P2018 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 1) - sporadisch |
| 0x2019 | P2019 | P2019 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x201A | P201A | P201A Reduktionsmittel Einspritzventil Schaltkreis - Messbereichs- oder Leistungsproblem (Bank 2, Gruppe 1) |
| 0x201B | P201B | P201B Ansaugkrümmer Drallklappensteuerung Aktuator Versorgungsspannungskreis (Bank 1) - niedrig |
| 0x201C | P201C | P201C Ansaugkrümmer Drallklappensteuerung Aktuator Versorgungsspannungskreis (Bank 2) - niedrig |
| 0x201D | P201D | P201D Ansaugkrümmer Drallklappensteuerung Aktuator (Bank 1) - internes Leistungsproblem |
| 0x201E | P201E | P201E Ansaugkrümmer Drallklappensteuerung Aktuator (Bank 2) - internes Leistungsproblem |
| 0x2020 | P2020 | P2020 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2021 | P2021 | P2021 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 2) - niedrig |
| 0x2022 | P2022 | P2022 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 2) - hoch |
| 0x2023 | P2023 | P2023 Ansaugkrümmer Drallklappe Positionssensor/-schalter Schaltkreis (Bank 2) - sporadisch |
| 0x2024 | P2024 | P2024 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2025 | P2025 | P2025 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler Schaltkreis - Leistungsproblem  |
| 0x2026 | P2026 | P2026 Tankentlüftungssystem  Kraftstoffverdunstung Temperaturfühler Schaltkreis - Spannung niedrig |
| 0x2027 | P2027 | P2027 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler Schaltkreis - Spannung hoch  |
| 0x2028 | P2028 | P2028 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler Schaltkreis - sporadisch |
| 0x2029 | P2029 | P2029 Standheizung - gesperrt |
| 0x202A | P202A | P202A Reduktionsmitteltank Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x202B | P202B | P202B Reduktionsmitteltank Heizungssteuerkreis - niedrig |
| 0x202C | P202C | P202C Reduktionsmitteltank Heizungssteuerkreis - hoch |
| 0x202D | P202D | P202D Reduktionsmittel - Leck |
| 0x202E | P202E | P202E Reduktionsmittel Einspritzventil Schaltkreis - Messbereichs- oder Leistungsproblem (Bank 1, Gruppe 1) |
| 0x202F | P202F | P202F Reduktionsmittel-/Regenerationsversorgung Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2030 | P2030 | P2030 Standheizung - Leistungsproblem |
| 0x2031 | P2031 | P2031 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2032 | P2032 | P2032 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 2) - niedrig |
| 0x2033 | P2033 | P2033 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 2) - hoch |
| 0x2034 | P2034 | P2034 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2035 | P2035 | P2035 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 2) - niedrig |
| 0x2036 | P2036 | P2036 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 2) - hoch |
| 0x2037 | P2037 | P2037 Reduktionsmittel-Einspritzung Luftdrucksensor 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2038 | P2038 | P2038 Reduktionsmittel-Einspritzung Luftdrucksensor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2039 | P2039 | P2039 Reduktionsmittel-Einspritzung Luftdrucksensor 1 Schaltkreis - niedrig |
| 0x203A | P203A | P203A Reduktionsmittel-Füllstandssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x203B | P203B | P203B Reduktionsmittel-Füllstandssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x203C | P203C | P203C Reduktionsmittel-Füllstandssensor Schaltkreis - niedrig |
| 0x203D | P203D | P203D Reduktionsmittel-Füllstandssensor Schaltkreis - hoch |
| 0x203E | P203E | P203E Reduktionsmittel-Füllstandssensor Schaltkreis - sporadisch/unregelmäßig |
| 0x203F | P203F | P203F Reduktionsmittel-Füllstand - zu niedrig |
| 0x2040 | P2040 | P2040 Reduktionsmittel-Einspritzung Luftdrucksensor 1 Schaltkreis - hoch |
| 0x2041 | P2041 | P2041 Reduktionsmittel-Einspritzung Luftdrucksensor 1 Schaltkreis - sporadisch |
| 0x2042 | P2042 | P2042 Reduktionsmittel Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2043 | P2043 | P2043 Reduktionsmittel Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2044 | P2044 | P2044 Reduktionsmittel Temperaturfühler Schaltkreis - niedrig |
| 0x2045 | P2045 | P2045 Reduktionsmittel Temperaturfühler Schaltkreis - hoch |
| 0x2046 | P2046 | P2046 Reduktionsmittel Temperaturfühler Schaltkreis - sporadisch |
| 0x2047 | P2047 | P2047 Reduktionsmittel Einspritzventil Schaltkreis (Bank 1, Gruppe 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2048 | P2048 | P2048 Reduktionsmittel Einspritzventil Schaltkreis (Bank 1, Gruppe 1) - niedrig |
| 0x2049 | P2049 | P2049 Reduktionsmittel Einspritzventil Schaltkreis (Bank 1, Gruppe 1) - hoch |
| 0x204A | P204A | P204A Reduktionsmittel Drucksensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x204B | P204B | P204B Reduktionsmittel Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x204C | P204C | P204C Reduktionsmittel Drucksensor Schaltkreis - niedrig |
| 0x204D | P204D | P204D Reduktionsmittel Drucksensor Schaltkreis - hoch |
| 0x204E | P204E | P204E Reduktionsmittel Drucksensor Schaltkreis - sporadisch/unregelmäßig |
| 0x204F | P204F | P204F Reduktionssystem (Bank 1) - Leistungsproblem |
| 0x2050 | P2050 | P2050 Reduktionsmittel Einspritzventil Schaltkreis (Bank 2, Gruppe 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2051 | P2051 | P2051 Reduktionsmittel Einspritzventil Schaltkreis (Bank 2, Gruppe 1) - niedrig |
| 0x2052 | P2052 | P2052 Reduktionsmittel Einspritzventil Schaltkreis (Bank 2, Gruppe 1) - hoch |
| 0x2053 | P2053 | P2053 Reduktionsmittel Einspritzventil Schaltkreis (Bank 1, Gruppe 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2054 | P2054 | P2054 Reduktionsmittel Einspritzventil Schaltkreis (Bank 1, Gruppe 2) - niedrig |
| 0x2055 | P2055 | P2055 Reduktionsmittel Einspritzventil Schaltkreis (Bank 1, Gruppe 2) - hoch |
| 0x2056 | P2056 | P2056 Reduktionsmittel Einspritzventil Schaltkreis (Bank 2, Gruppe 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2057 | P2057 | P2057 Reduktionsmittel Einspritzventil Schaltkreis (Bank 2, Gruppe 2) - niedrig |
| 0x2058 | P2058 | P2058 Reduktionsmittel Einspritzventil Schaltkreis (Bank 2, Gruppe 2) - hoch |
| 0x2059 | P2059 | P2059 Reduktionsmittel-Einspritzung Luftpumpe Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x205A | P205A | P205A Reduktionsmitteltank Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x205B | P205B | P205B Reduktionsmitteltank Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x205C | P205C | P205C Reduktionsmitteltank Temperaturfühler Schaltkreis - niedrig |
| 0x205D | P205D | P205D Reduktionsmitteltank Temperaturfühler Schaltkreis - hoch |
| 0x205E | P205E | P205E Reduktionsmitteltank Temperaturfühler Schaltkreis - sporadisch/unregelmäßig |
| 0x205F | P205F | P205F Reduktionssystem (Bank 2) - Leistungsproblem |
| 0x2060 | P2060 | P2060 Reduktionsmittel-Einspritzung Luftpumpe Steuerkreis - niedrig |
| 0x2061 | P2061 | P2061 Reduktionsmittel-Einspritzung Luftpumpe Steuerkreis - hoch |
| 0x2062 | P2062 | P2062 Reduktionsmittel-/Regenerationsversorgung Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2063 | P2063 | P2063 Reduktionsmittel-/Regenerationsversorgung Steuerkreis - niedrig |
| 0x2064 | P2064 | P2064 Reduktionsmittel-/Regenerationsversorgung Steuerkreis - hoch |
| 0x2065 | P2065 | P2065 Kraftstoff-Füllstandssensor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2066 | P2066 | P2066 Kraftstoff-Füllstandssensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2067 | P2067 | P2067 Kraftstoff-Füllstandssensor 2 Schaltkreis - niedrig |
| 0x2068 | P2068 | P2068 Kraftstoff-Füllstandssensor 2 Schaltkreis - hoch |
| 0x2069 | P2069 | P2069 Kraftstoff-Füllstandssensor 2 Schaltkreis - sporadisch |
| 0x206A | P206A | P206A Reduktionsmittel Qualitätssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x206B | P206B | P206B Reduktionsmittel Qualitätssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x206C | P206C | P206C Reduktionsmittel Qualitätssensor Schaltkreis - niedrig |
| 0x206D | P206D | P206D Reduktionsmittel Qualitätssensor Schaltkreis - hoch |
| 0x206E | P206E | P206E Ansaugkrümmer Steller/Steuerklappe (Bank 2) - klemmt offen |
| 0x206F | P206F | P206F Ansaugkrümmer Steller/Steuerklappe (Bank 2) - klemmt geschlossen |
| 0x2070 | P2070 | P2070 Ansaugkrümmer Steller/Steuerklappe (Bank 1) - klemmt offen |
| 0x2071 | P2071 | P2071 Ansaugkrümmer Steller/Steuerklappe (Bank 1) - klemmt geschlossen |
| 0x2072 | P2072 | P2072 Drosselklappensteller Stellsystem - Eisblockade |
| 0x2073 | P2073 | P2073 Absoluter Saugrohrdruck / Luftmassendurchsatz Drosselklappenstellung - Korrelationsfehler im Leerlauf |
| 0x2074 | P2074 | P2074 Absoluter Saugrohrdruck / Luftmassendurchsatz Drosselklappenstellung - Korrelationsfehler in Volllast |
| 0x2075 | P2075 | P2075 Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2076 | P2076 | P2076 Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2077 | P2077 | P2077 Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 1) - niedrig |
| 0x2078 | P2078 | P2078 Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 1) - hoch |
| 0x2079 | P2079 | P2079 Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 1) - sporadisch |
| 0x207A | P207A | P207A Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x207B | P207B | P207B Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x207C | P207C | P207C Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 2) - niedrig |
| 0x207D | P207D | P207D Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 2) - hoch |
| 0x207E | P207E | P207E Ansaugkrümmer Steller/Steuerklappe Positionssensor/-schalter Schaltkreis (Bank 2) - sporadisch |
| 0x207F | P207F | P207F Reduktionsmittel Qualität - Leistungsproblem |
| 0x2080 | P2080 | P2080 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 1) - Messbereichs- oder Leistungsproblem |
| 0x2081 | P2081 | P2081 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 1) - sporadisch |
| 0x2082 | P2082 | P2082 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 1) - Messbereichs- oder Leistungsproblem |
| 0x2083 | P2083 | P2083 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 1) - sporadisch |
| 0x2084 | P2084 | P2084 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 2) - Messbereichs- oder Leistungsproblem |
| 0x2085 | P2085 | P2085 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 2) - sporadisch |
| 0x2086 | P2086 | P2086 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 2) - Messbereichs- oder Leistungsproblem |
| 0x2087 | P2087 | P2087 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 2) - sporadisch |
| 0x2088 | P2088 | P2088 Nockenwellenversteller Einlass Steuerkreis (Bank 1) - niedrig |
| 0x2089 | P2089 | P2089 Nockenwellenversteller Einlass Steuerkreis (Bank 1) - hoch |
| 0x208A | P208A | P208A Reduktionsmittelpumpe Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x208B | P208B | P208B Reduktionsmittelpumpe Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x208C | P208C | P208C Reduktionsmittelpumpe Schaltkreis (Bank 1) - niedrig |
| 0x208D | P208D | P208D Reduktionsmittelpumpe Schaltkreis (Bank 1) - hoch |
| 0x208E | P208E | P208E Reduktionsmittel Einspritzventil (Bank 1, Gruppe 1) - klemmt geschlossen |
| 0x208F | P208F | P208F Reduktionsmittel Einspritzventil (Bank 2, Gruppe 1) - klemmt geschlossen |
| 0x2090 | P2090 | P2090 Nockenwellenversteller Auslass Steuerkreis (Bank 1) - niedrig |
| 0x2091 | P2091 | P2091 Nockenwellenversteller Auslass Steuerkreis (Bank 1) - hoch |
| 0x2092 | P2092 | P2092 Nockenwellenversteller Einlass Steuerkreis (Bank 2) - niedrig |
| 0x2093 | P2093 | P2093 Nockenwellenversteller Einlass Steuerkreis (Bank 2) - hoch |
| 0x2094 | P2094 | P2094 Nockenwellenversteller Auslass Steuerkreis (Bank 2) - niedrig |
| 0x2095 | P2095 | P2095 Nockenwellenversteller Auslass Steuerkreis (Bank 2) - hoch |
| 0x2096 | P2096 | P2096 Gemischfeinregelung (Bank 1, nach Katalysator) - System zu mager |
| 0x2097 | P2097 | P2097 Gemischfeinregelung (Bank 1, nach Katalysator) - System zu fett |
| 0x2098 | P2098 | P2098 Gemischfeinregelung (Bank 2, nach Katalysator) - System zu mager |
| 0x2099 | P2099 | P2099 Gemischfeinregelung (Bank 2, nach Katalysator) - System zu fett |
| 0x209A | P209A | P209A Reduktionsmittel-Einspritzung Luftdrucksensor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x209B | P209B | P209B Reduktionsmittel-Einspritzung Luftdrucksensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x209C | P209C | P209C Reduktionsmittel-Einspritzung Luftdrucksensor 2 Schaltkreis - niedrig |
| 0x209D | P209D | P209D Reduktionsmittel-Einspritzung Luftdrucksensor 2 Schaltkreis - hoch |
| 0x209E | P209E | P209E Reduktionsmittel-Einspritzung Luftdrucksensor 1/2 - Korrelationsfehler |
| 0x209F | P209F | P209F Reduktionsmitteltank Heizungssteuerkreis - Leistungsproblem |
| 0x20A0 | P20A0 | P20A0 Reduktionsmittel Spülventil Schaltkreis - Fehlfunktions oder Leitungsunterbrechung |
| 0x20A1 | P20A1 | P20A1 Reduktionsmittel Spülventil Schaltkreis - Leistungsproblem |
| 0x20A2 | P20A2 | P20A2 Reduktionsmittel Spülventil Schaltkreis - niedrig |
| 0x20A3 | P20A3 | P20A3 Reduktionsmittel Spülventil Schaltkreis - hoch |
| 0x20A4 | P20A4 | P20A4 Reduktionsmittel Spülventil - klemmt offen |
| 0x20A5 | P20A5 | P20A5 Reduktionsmittel Spülventil - klemmt geschlossen |
| 0x20A6 | P20A6 | P20A6 Reduktionsmittel-Einspritzung Luftdruckregelventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x20A7 | P20A7 | P20A7 Reduktionsmittel-Einspritzung Luftdruckregelventil Schaltkreis - Leistungsproblem |
| 0x20A8 | P20A8 | P20A8 Reduktionsmittel-Einspritzung Luftdruckregelventil Schaltkreis - niedrig |
| 0x20A9 | P20A9 | P20A9 Reduktionsmittel-Einspritzung Luftdruckregelventil Schaltkreis - hoch |
| 0x20AA | P20AA | P20AA Reduktionsmittel-Einspritzung Luftdruckregelventil - klemmt offen |
| 0x20AB | P20AB | P20AB Reduktionsmittel-Einspritzung Luftdruckregelventil - klemmt geschlossen |
| 0x20AC | P20AC | P20AC Reduktionsmittel Dosiereinheit Temperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x20AD | P20AD | P20AD Reduktionsmittel Dosiereinheit Temperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x20AE | P20AE | P20AE Reduktionsmittel Dosiereinheit Temperaturfühler Schaltkreis - niedrig |
| 0x20AF | P20AF | P20AF Reduktionsmittel Dosiereinheit Temperaturfühler Schaltkreis - hoch |
| 0x20B0 | P20B0 | P20B0 Reduktionsmittel Dosiereinheit Temperaturfühler Schaltkreis - sporadisch/unregelmäßig |
| 0x20B1 | P20B1 | P20B1 Reduktionsmittel Heizungs-/Kühlwasser-Steuerventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x20B2 | P20B2 | P20B2 Reduktionsmittel Heizungs-/Kühlwasser-Steuerventil - Leistungsproblem |
| 0x20B3 | P20B3 | P20B3 Reduktionsmittel Heizungs-/Kühlwasser-Steuerventil Schaltkreis - niedrig |
| 0x20B4 | P20B4 | P20B4 Reduktionsmittel Heizungs-/Kühlwasser-Steuerventil Schaltkreis - hoch |
| 0x20B5 | P20B5 | P20B5 Reduktionsmittel Dosiereinheit Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x20B6 | P20B6 | P20B6 Reduktionsmittel Dosiereinheit Heizungssteuerkreis - Leistungsproblem |
| 0x20B7 | P20B7 | P20B7 Reduktionsmittel Dosiereinheit Heizungssteuerkreis - niedrig |
| 0x20B8 | P20B8 | P20B8 Reduktionsmittel Dosiereinheit Heizungssteuerkreis - hoch |
| 0x20B9 | P20B9 | P20B9 Reduktionsmittel Heizungssteuerkreis 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x20BA | P20BA | P20BA Reduktionsmittel Heizungssteuerkreis 1 - Leistungsproblem |
| 0x20BB | P20BB | P20BB Reduktionsmittel Heizungssteuerkreis 1 - niedrig |
| 0x20BC | P20BC | P20BC Reduktionsmittel Heizungssteuerkreis 1 - hoch |
| 0x20BD | P20BD | P20BD Reduktionsmittel Heizungssteuerkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x20BE | P20BE | P20BE Reduktionsmittel Heizungssteuerkreis 2 - Leistungsproblem |
| 0x20BF | P20BF | P20BF Reduktionsmittel Heizungssteuerkreis 2 - niedrig |
| 0x20C0 | P20C0 | P20C0 Reduktionsmittel Heizungssteuerkreis 2 - hoch |
| 0x20C1 | P20C1 | P20C1 Reduktionsmittel Heizungssteuerkreis 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x20C2 | P20C2 | P20C2 Reduktionsmittel Heizungssteuerkreis 3 - Leistungsproblem |
| 0x20C3 | P20C3 | P20C3 Reduktionsmittel Heizungssteuerkreis 3 - niedrig |
| 0x20C4 | P20C4 | P20C4 Reduktionsmittel Heizungssteuerkreis 3 - hoch |
| 0x20C5 | P20C5 | P20C5 Reduktionsmittel Heizungssteuerkreis 4 - Fehlfunktion oder Leitungsunterbrechung |
| 0x20C6 | P20C6 | P20C6 Reduktionsmittel Heizungssteuerkreis 4 - Leistungsproblem |
| 0x20C7 | P20C7 | P20C7 Reduktionsmittel Heizungssteuerkreis 4 - niedrig |
| 0x20C8 | P20C8 | P20C8 Reduktionsmittel Heizungssteuerkreis 4 - hoch |
| 0x20C9 | P20C9 | P20C9 Reduktionsmittel-Steuergerät Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion |
| 0x20CA | P20CA | P20CA Reduktionsmittel-Einspritzung Luftdruck - Leck  |
| 0x20CB | P20CB | P20CB Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x20CC | P20CC | P20CC Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 1) - Leistungsproblem |
| 0x20CD | P20CD | P20CD Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 1) - niedrig |
| 0x20CE | P20CE | P20CE Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 1) - hoch |
| 0x20CF | P20CF | P20CF Abgasnachbehandlung Einspritzventil (Bank 1) - klemmt offen |
| 0x20D0 | P20D0 | P20D0 Abgasnachbehandlung Einspritzventil (Bank 1) - klemmt geschlossen |
| 0x20D1 | P20D1 | P20D1 Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x20D2 | P20D2 | P20D2 Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 2) - Leistungsproblem |
| 0x20D3 | P20D3 | P20D3 Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 2) - niedrig |
| 0x20D4 | P20D4 | P20D4 Abgasnachbehandlung Einspritzventil Steuerkreis (Bank 2) - hoch |
| 0x20D5 | P20D5 | P20D5 Abgasnachbehandlung Einspritzventil (Bank 2) - klemmt offen |
| 0x20D6 | P20D6 | P20D6 Abgasnachbehandlung Einspritzventil (Bank 2) - klemmt geschlossen |
| 0x20D7 | P20D7 | P20D7 Abgasnachbehandlung Kraftstoffversorgungsteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x20D8 | P20D8 | P20D8 Abgasnachbehandlung Kraftstoffversorgungsteuerkreis - Leistungsproblem |
| 0x20D9 | P20D9 | P20D9 Abgasnachbehandlung Kraftstoffversorgungsteuerkreis - niedrig |
| 0x20DA | P20DA | P20DA Abgasnachbehandlung Kraftstoffversorgungsteuerkreis - hoch |
| 0x20DB | P20DB | P20DB Abgasnachbehandlung Kraftstoffversorgungsteuerung - klemmt offen |
| 0x20DC | P20DC | P20DC Abgasnachbehandlung Kraftstoffversorgungsteuerung - klemmt geschlossen |
| 0x20DD | P20DD | P20DD Abgasnachbehandlung Kraftstoffdrucksensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x20DE | P20DE | P20DE Abgasnachbehandlung Kraftstoffdrucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x20DF | P20DF | P20DF Abgasnachbehandlung Kraftstoffdrucksensor Schaltkreis - niedrig |
| 0x20E0 | P20E0 | P20E0 Abgasnachbehandlung Kraftstoffdrucksensor Schaltkreis - hoch |
| 0x20E1 | P20E1 | P20E1 Abgasnachbehandlung Kraftstoffdrucksensor Schaltkreis - sporadisch/unregelmäßig |
| 0x20E2 | P20E2 | P20E2 Abgastemperaturfühler 1/2 (Bank 1) - Korrelationsfehler |
| 0x20E3 | P20E3 | P20E3 Abgastemperaturfühler 1/3 (Bank 1) - Korrelationsfehler |
| 0x20E4 | P20E4 | P20E4 Abgastemperaturfühler 2/3 (Bank 1) - Korrelationsfehler |
| 0x20E5 | P20E5 | P20E5 Abgastemperaturfühler 1/2 (Bank 2) - Korrelationsfehler |
| 0x20E6 | P20E6 | P20E6 Reduktionsmittel-Einspritzung - Luftdruck zu niedrig |
| 0x20E7 | P20E7 | P20E7 Reduktionsmittel-Einspritzung - Luftdruck zu hoch |
| 0x20E8 | P20E8 | P20E8 Reduktionsmittel - Druck zu niedrig |
| 0x20E9 | P20E9 | P20E9 Reduktionsmittel - Druck zu hoch |
| 0x20EA | P20EA | P20EA Reduktionsmittel-Steuergerät Hauptrelais unbestromt Leistungsproblem - zu früh |
| 0x20EB | P20EB | P20EB Reduktionsmittel-Steuergerät Hauptrelais unbestromt Leistungsproblem - zu spät |
| 0x20EC | P20EC | P20EC SCR NOx Katalysator (Bank 1) - Übertemperatur |
| 0x20ED | P20ED | P20ED SCR NOx Vorkatalysator (Bank 1) - Übertemperatur |
| 0x20EE | P20EE | P20EE SCR NOx Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x20EF | P20EF | P20EF SCR NOx Vorkatalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x20F0 | P20F0 | P20F0 SCR NOx Katalysator (Bank 2) - Übertemperatur |
| 0x20F1 | P20F1 | P20F1 SCR NOx Vorkatalysator (Bank 2) - Übertemperatur |
| 0x20F2 | P20F2 | P20F2 SCR NOx Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x20F3 | P20F3 | P20F3 SCR NOx Vorkatalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x20F4 | P20F4 | P20F4 Reduktionsmittelverbrauch - zu niedrig |
| 0x20F5 | P20F5 | P20F5 Reduktionsmittelverbrauch - zu hoch |
| 0x20F6 | P20F6 | P20F6 Reduktionsmittel Einspritzventil (Bank 1, Gruppe 1) - klemmt offen |
| 0x20F7 | P20F7 | P20F7 Reduktionsmittel Einspritzventil (Bank 2, Gruppe 1) - klemmt offen |
| 0x20F8 | P20F8 | P20F8 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 1) - Leistungsproblem |
| 0x20F9 | P20F9 | P20F9 Ansaugkrümmer Drallklappensteuerung Schaltkreis (Bank 2) - Leistungsproblem |
| 0x20FA | P20FA | P20FA Reduktionsmittelpumpe Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x20FB | P20FB | P20FB Reduktionsmittelpumpe Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x20FC | P20FC | P20FC Reduktionsmittelpumpe Schaltkreis (Bank 2) - niedrig |
| 0x20FD | P20FD | P20FD Reduktionsmittelpumpe Schaltkreis (Bank 2) - hoch |
| 0x2100 | P2100 | P2100 Drosselklappensteller Stellmotor 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2101 | P2101 | P2101 Drosselklappensteller Stellmotor 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2102 | P2102 | P2102 Drosselklappensteller Stellmotor 1 Schaltkreis - niedrig |
| 0x2103 | P2103 | P2103 Drosselklappensteller Stellmotor 1 Schaltkreis - hoch |
| 0x2104 | P2104 | P2104 Drosselklappensteller Stellsystem - Zwangs-Leerlauf |
| 0x2105 | P2105 | P2105 Drosselklappensteller Stellsystem - Zwangs-Motorabschaltung |
| 0x2106 | P2106 | P2106 Drosselklappensteller Stellsystem - Zwangs-Leistungsbegrenzung |
| 0x2107 | P2107 | P2107 Drosselklappensteller-Steuergerät Prozessor (Bank 1) - Fehlfunktion |
| 0x2108 | P2108 | P2108 Drosselklappensteller-Steuergerät (Bank 1) - Leistungsproblem |
| 0x2109 | P2109 | P2109 Drosselklappenpotentiometer 1 Minimalanschlag (Bank 1) - Leistungsproblem |
| 0x210A | P210A | P210A Drosselklappensteller Stellmotor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x210B | P210B | P210B Drosselklappensteller Stellmotor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x210C | P210C | P210C Drosselklappensteller Stellmotor 2 Schaltkreis - niedrig |
| 0x210D | P210D | P210D Drosselklappensteller Stellmotor 2 Schaltkreis - hoch |
| 0x210F | P210F | P210F Drosselklappensteller Stellsystem (Bank 2) - Zwangs-Drehzahlbegrenzung |
| 0x2110 | P2110 | P2110 Drosselklappensteller Stellsystem (Bank 1) - Zwangs-Drehzahlbegrenzung |
| 0x2111 | P2111 | P2111 Drosselklappensteller Stellsystem (Bank 1) - klemmt offen |
| 0x2112 | P2112 | P2112 Drosselklappensteller Stellsystem (Bank 1) - klemmt geschlossen |
| 0x2113 | P2113 | P2113 Drosselklappenpotentiometer 2 Minimalanschlag (Bank 1) - Leistungsproblem |
| 0x2114 | P2114 | P2114 Drosselklappenpotentiometer 1 (Bank 2) Minimalanschlag - Leistungsproblem |
| 0x2115 | P2115 | P2115 Pedalwertgeber 1 Minimalanschlag - Leistungsproblem |
| 0x2116 | P2116 | P2116 Pedalwertgeber 2 Minimalanschlag - Leistungsproblem |
| 0x2117 | P2117 | P2117 Pedalwertgeber 3 Minimalanschlag - Leistungsproblem |
| 0x2118 | P2118 | P2118 Drosselklappensteller Stellmotorstrom (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2119 | P2119 | P2119 Drosselklappensteller Klappenstutzen (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x211A | P211A | P211A Drosselklappensteller Stellsystem (Bank 2) - klemmt offen |
| 0x211B | P211B | P211B Drosselklappensteller Stellsystem (Bank 2) - klemmt geschlossen |
| 0x211C | P211C | P211C Drosselklappensteller Stellmotorstrom (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x211D | P211D | P211D Drosselklappensteller Klappenstutzen (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x211E | P211E | P211E Drosselklappensteller-Steuergerät Prozessor (Bank 2) - Fehlfunktion |
| 0x211F | P211F | P211F Drosselklappensteller-Steuergerät (Bank 2) - Leistungsproblem |
| 0x2120 | P2120 | P2120 Pedalwertgeber 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2121 | P2121 | P2121 Pedalwertgeber 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2122 | P2122 | P2122 Pedalwertgeber 1 Schaltkreis - niedrig |
| 0x2123 | P2123 | P2123 Pedalwertgeber 1 Schaltkreis - hoch |
| 0x2124 | P2124 | P2124 Pedalwertgeber 1 Schaltkreis - sporadisch |
| 0x2125 | P2125 | P2125 Pedalwertgeber 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2126 | P2126 | P2126 Pedalwertgeber 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2127 | P2127 | P2127 Pedalwertgeber 2 Schaltkreis - niedrig |
| 0x2128 | P2128 | P2128 Pedalwertgeber 2 Schaltkreis - hoch |
| 0x2129 | P2129 | P2129 Pedalwertgeber 2 Schaltkreis - sporadisch |
| 0x212A | P212A | P212A Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x212B | P212B | P212B Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x212C | P212C | P212C Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - niedrig |
| 0x212D | P212D | P212D Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - hoch |
| 0x212E | P212E | P212E Drosselklappenpotentiometer 2 Schaltkreis (Bank 2) - sporadisch |
| 0x2130 | P2130 | P2130 Pedalwertgeber 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2131 | P2131 | P2131 Pedalwertgeber 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2132 | P2132 | P2132 Pedalwertgeber 3 Schaltkreis - niedrig |
| 0x2133 | P2133 | P2133 Pedalwertgeber 3 Schaltkreis - hoch |
| 0x2134 | P2134 | P2134 Pedalwertgeber 3 Schaltkreis - sporadisch |
| 0x2135 | P2135 | P2135 Drosselklappenpotentiometer 1/2 Spannung - Korrelationsfehler |
| 0x2138 | P2138 | P2138 Pedalwertgeber 1/2 Spannung - Korrelationsfehler |
| 0x2139 | P2139 | P2139 Pedalwertgeber 1/3 Spannung - Korrelationsfehler |
| 0x213A | P213A | P213A Abgasrückführungsdrossel Steuerkreis 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x213B | P213B | P213B Abgasrückführungsdrossel Steuerkreis 2 - Messbereichs- oder Leistungsproblem |
| 0x213C | P213C | P213C Abgasrückführungsdrossel Steuerkreis 2 - niedrig |
| 0x213D | P213D | P213D Abgasrückführungsdrossel Steuerkreis 2 - hoch |
| 0x213E | P213E | P213E Kraftstoffeinspritzanlage Fehler - Zwangs-Motorabschaltung |
| 0x213F | P213F | P213F Kraftstoffpumpensystem Fehler - Zwangs-Motorabschaltung |
| 0x2140 | P2140 | P2140 Pedalwertgeber 2/3 Spannung - Korrelationsfehler |
| 0x2141 | P2141 | P2141 Abgasrückführungsdrossel Steuerkreis 1 - niedrig |
| 0x2142 | P2142 | P2142 Abgasrückführungsdrossel Steuerkreis 1 - hoch |
| 0x2143 | P2143 | P2143 Abgasrückführung Entlüftungsventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2144 | P2144 | P2144 Abgasrückführung Entlüftungsventil Steuerkreis - niedrig |
| 0x2145 | P2145 | P2145 Abgasrückführung Entlüftungsventil Steuerkreis - hoch |
| 0x2146 | P2146 | P2146 Einspritzventil Gruppe 1 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2147 | P2147 | P2147 Einspritzventil Gruppe 1 Versorgungsspannungskreis - niedrig |
| 0x2148 | P2148 | P2148 Einspritzventil Gruppe 1 Versorgungsspannungskreis - hoch |
| 0x2149 | P2149 | P2149 Einspritzventil Gruppe 2 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2150 | P2150 | P2150 Einspritzventil Gruppe 2 Versorgungsspannungskreis - niedrig |
| 0x2151 | P2151 | P2151 Einspritzventil Gruppe 2 Versorgungsspannungskreis - hoch |
| 0x2152 | P2152 | P2152 Einspritzventil Gruppe 3 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2153 | P2153 | P2153 Einspritzventil Gruppe 3 Versorgungsspannungskreis - niedrig |
| 0x2154 | P2154 | P2154 Einspritzventil Gruppe 3 Versorgungsspannungskreis - hoch |
| 0x2155 | P2155 | P2155 Einspritzventil Gruppe 4 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2156 | P2156 | P2156 Einspritzventil Gruppe 4 Versorgungsspannungskreis - niedrig |
| 0x2157 | P2157 | P2157 Einspritzventil Gruppe 4 Versorgungsspannungskreis - hoch |
| 0x2158 | P2158 | P2158 Fahrzeuggeschwindigkeitssensor 2 - Fehlfunktion |
| 0x2159 | P2159 | P2159 Fahrzeuggeschwindigkeitssensor 2 - Messbereichs- oder Leistungsproblem |
| 0x215A | P215A | P215A Fahrzeuggeschwindigkeit / Raddrehzahl - Korrelationsfehler |
| 0x215B | P215B | P215B Fahrzeuggeschwindigkeit / Abtriebsdrehzahl - Korrelationsfehler |
| 0x215C | P215C | P215C Abtriebsdrehzahl / Raddrehzahl - Korrelationsfehler |
| 0x2160 | P2160 | P2160 Fahrzeuggeschwindigkeitssensor 2 Schaltkreis - niedrig |
| 0x2161 | P2161 | P2161 Fahrzeuggeschwindigkeitssensor 2 - sporadisch/unregelmäßig/hoch |
| 0x2162 | P2162 | P2162 Fahrzeuggeschwindigkeitssensor 1/2 - Korrelationsfehler |
| 0x2163 | P2163 | P2163 Drosselklappenpotentiometer 1 Maximalanschlag - Leistungsproblem |
| 0x2164 | P2164 | P2164 Drosselklappenpotentiometer 2 Maximalanschlag - Leistungsproblem |
| 0x2165 | P2165 | P2165 Drosselklappenpotentiometer 1 (Bank 2) Maximalanschlag - Leistungsproblem |
| 0x2166 | P2166 | P2166 Pedalwertgeber 1 Maximalanschlag - Leistungsproblem |
| 0x2167 | P2167 | P2167 Pedalwertgeber 2 Maximalanschlag - Leistungsproblem |
| 0x2168 | P2168 | P2168 Pedalwertgeber 3 Maximalanschlag - Leistungsproblem |
| 0x2169 | P2169 | P2169 Abgasdruckregler Entlüftungsventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x216A | P216A | P216A Einspritzventil Gruppe 5 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x216B | P216B | P216B Einspritzventil Gruppe 5 Versorgungsspannungskreis - niedrig |
| 0x216C | P216C | P216C Einspritzventil Gruppe 5 Versorgungsspannungskreis - hoch |
| 0x216D | P216D | P216D Einspritzventil Gruppe 6 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x216E | P216E | P216E Einspritzventil Gruppe 6 Versorgungsspannungskreis - niedrig |
| 0x216F | P216F | P216F Einspritzventil Gruppe 6 Versorgungsspannungskreis - hoch |
| 0x2170 | P2170 | P2170 Abgasdruckregler Entlüftungsventil Steuerkreis - niedrig |
| 0x2171 | P2171 | P2171 Abgasdruckregler Entlüftungsventil Steuerkreis - hoch |
| 0x2172 | P2172 | P2172 Drosselklappensteller Stellsystem - plötzlicher hoher Luftdurchsatz erkannt |
| 0x2173 | P2173 | P2173 Drosselklappensteller Stellsystem - hoher Luftdurchsatz erkannt |
| 0x2174 | P2174 | P2174 Drosselklappensteller Stellsystem - plötzlicher niedriger Luftdurchsatz erkannt |
| 0x2175 | P2175 | P2175 Drosselklappensteller Stellsystem - niedriger Luftdurchsatz erkannt |
| 0x2176 | P2176 | P2176 Drosselklappensteller Stellsystem (Bank 1) - Leerlaufposition nicht gelernt |
| 0x2177 | P2177 | P2177 Gemischregelung in Teillast (Bank 1) - Gemisch zu mager |
| 0x2178 | P2178 | P2178 Gemischregelung in Teillast (Bank 1) - Gemisch zu fett |
| 0x2179 | P2179 | P2179 Gemischregelung in Teillast (Bank 2) - Gemisch zu mager |
| 0x217A | P217A | P217A Einspritzventil Gruppe 7 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x217B | P217B | P217B Einspritzventil Gruppe 7 Versorgungsspannungskreis - niedrig |
| 0x217C | P217C | P217C Einspritzventil Gruppe 7 Versorgungsspannungskreis - hoch |
| 0x217D | P217D | P217D Einspritzventil Gruppe 8 Versorgungsspannungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x217E | P217E | P217E Einspritzventil Gruppe 8 Versorgungsspannungskreis - niedrig |
| 0x217F | P217F | P217F Einspritzventil Gruppe 8 Versorgungsspannungskreis - hoch |
| 0x2180 | P2180 | P2180 Gemischregelung in Teillast (Bank 2) - Gemisch zu fett |
| 0x2181 | P2181 | P2181 Kühlsystem - Leistungsproblem |
| 0x2182 | P2182 | P2182 Motorkühlmitteltemperaturfühler 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2183 | P2183 | P2183 Motorkühlmitteltemperaturfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2184 | P2184 | P2184 Motorkühlmitteltemperaturfühler 2 Schaltkreis - niedrig |
| 0x2185 | P2185 | P2185 Motorkühlmitteltemperaturfühler 2 Schaltkreis - hoch |
| 0x2186 | P2186 | P2186 Motorkühlmitteltemperaturfühler 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x2187 | P2187 | P2187 Gemischregelung im Leerlauf (Bank 1) - Gemisch zu mager |
| 0x2188 | P2188 | P2188 Gemischregelung im Leerlauf (Bank 1) - Gemisch zu fett |
| 0x2189 | P2189 | P2189 Gemischregelung im Leerlauf (Bank 2) - Gemisch zu mager |
| 0x218A | P218A | P218A Drosselklappensteller Stellsystem (Bank 2) - Leerlaufposition nicht gelernt |
| 0x218B | P218B | P218B Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 2) - Fehlfunktion |
| 0x218C | P218C | P218C Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x218D | P218D | P218D Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 2) - niedrig |
| 0x218E | P218E | P218E Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 2) - hoch |
| 0x2190 | P2190 | P2190 Gemischregelung im Leerlauf (Bank 2) - Gemisch zu fett |
| 0x2191 | P2191 | P2191 Gemischregelung in Volllast (Bank 1) - Gemisch zu mager |
| 0x2192 | P2192 | P2192 Gemischregelung in Volllast (Bank 1) - Gemisch zu fett |
| 0x2193 | P2193 | P2193 Gemischregelung in Volllast (Bank 2) - Gemisch zu mager |
| 0x2194 | P2194 | P2194 Gemischregelung in Volllast (Bank 2) - Gemisch zu fett |
| 0x2195 | P2195 | P2195 Lambdasonde (Bank 1, vor Katalysator) - Signal festliegend auf Mager |
| 0x2196 | P2196 | P2196 Lambdasonde (Bank 1, vor Katalysator) - Signal festliegend auf Fett |
| 0x2197 | P2197 | P2197 Lambdasonde (Bank 2, vor Katalysator) - Signal festliegend auf Mager |
| 0x2198 | P2198 | P2198 Lambdasonde (Bank 2, vor Katalysator) - Signal festliegend auf Fett |
| 0x2199 | P2199 | P2199 Ansauglufttemperaturfühler 1/2 - Korrelationsfehler |
| 0x219A | P219A | P219A Bank 1 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x219B | P219B | P219B Bank 2 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x219C | P219C | P219C Zylinder 1 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x219D | P219D | P219D Zylinder 2 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x219E | P219E | P219E Zylinder 3 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x219F | P219F | P219F Zylinder 4 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A0 | P21A0 | P21A0 Zylinder 5 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A1 | P21A1 | P21A1 Zylinder 6 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A2 | P21A2 | P21A2 Zylinder 7 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A3 | P21A3 | P21A3 Zylinder 8 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A4 | P21A4 | P21A4 Zylinder 9 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A5 | P21A5 | P21A5 Zylinder 10 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A6 | P21A6 | P21A6 Zylinder 11 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x21A7 | P21A7 | P21A7 Zylinder 12 Luft/Kraftstoffverhältnis - Ungleichgewicht |
| 0x2200 | P2200 | P2200 NOx-Sensor Schaltkreis (Bank 1, Sensor 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2201 | P2201 | P2201 NOx-Sensor Schaltkreis (Bank 1, Sensor 1) - Messbereichs- oder Leistungsproblem |
| 0x2202 | P2202 | P2202 NOx-Sensor Schaltkreis (Bank 1, Sensor 1) - niedrig |
| 0x2203 | P2203 | P2203 NOx-Sensor Schaltkreis (Bank 1, Sensor 1) - hoch |
| 0x2204 | P2204 | P2204 NOx-Sensor Schaltkreis (Bank 1, Sensor 1) - sporadisch |
| 0x2205 | P2205 | P2205 NOx-Sensor Heizungssteuerkreis (Bank 1, Sensor 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2206 | P2206 | P2206 NOx-Sensor Heizungssteuerkreis (Bank 1, Sensor 1) - niedrig |
| 0x2207 | P2207 | P2207 NOx-Sensor Heizungssteuerkreis (Bank 1, Sensor 1) - hoch |
| 0x2208 | P2208 | P2208 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 1) - Fehlfunktion |
| 0x2209 | P2209 | P2209 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 1) - Messbereichs- oder Leistungsproblem |
| 0x220A | P220A | P220A NOx-Sensor Versorgungsspannungskreis (Bank 1, Sensor 1) - Fehlfunktion |
| 0x220B | P220B | P220B NOx-Sensor Versorgungsspannungskreis (Bank 1, Sensor 2) - Fehlfunktion |
| 0x220C | P220C | P220C NOx-Sensor Versorgungsspannungskreis (Bank 2, Sensor 1) - Fehlfunktion |
| 0x220D | P220D | P220D NOx-Sensor Versorgungsspannungskreis (Bank 2, Sensor 2) - Fehlfunktion |
| 0x2210 | P2210 | P2210 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 1) - niedrig |
| 0x2211 | P2211 | P2211 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 1) - hoch |
| 0x2212 | P2212 | P2212 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 1) - sporadisch |
| 0x2213 | P2213 | P2213 NOx-Sensor Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2214 | P2214 | P2214 NOx-Sensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2215 | P2215 | P2215 NOx-Sensor Schaltkreis (Bank 2) - niedrig |
| 0x2216 | P2216 | P2216 NOx-Sensor Schaltkreis (Bank 2) - hoch |
| 0x2217 | P2217 | P2217 NOx-Sensor Schaltkreis (Bank 2) - sporadisch |
| 0x2218 | P2218 | P2218 NOx-Sensor Heizungssteuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2219 | P2219 | P2219 NOx-Sensor Heizungssteuerkreis (Bank 2) - niedrig |
| 0x2220 | P2220 | P2220 NOx-Sensor Heizungssteuerkreis (Bank 2) - hoch |
| 0x2221 | P2221 | P2221 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 2) - Fehlfunktion |
| 0x2222 | P2222 | P2222 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2223 | P2223 | P2223 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 2) - niedrig |
| 0x2224 | P2224 | P2224 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 2) - hoch |
| 0x2225 | P2225 | P2225 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 2) - sporadisch |
| 0x2226 | P2226 | P2226 Umgebungsdrucksensor Schaltkreis (Bank 1) - Fehlfunktion |
| 0x2227 | P2227 | P2227 Umgebungsdrucksensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2228 | P2228 | P2228 Umgebungsdrucksensor Schaltkreis (Bank 1) - niedrig |
| 0x2229 | P2229 | P2229 Umgebungsdrucksensor Schaltkreis (Bank 1) - hoch |
| 0x222A | P222A | P222A Umgebungsdrucksensor Schaltkreis (Bank 2) - Fehlfunktion |
| 0x222B | P222B | P222B Umgebungsdrucksensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x222C | P222C | P222C Umgebungsdrucksensor Schaltkreis (Bank 2) - niedrig |
| 0x222D | P222D | P222D Umgebungsdrucksensor Schaltkreis (Bank 2) - hoch |
| 0x222E | P222E | P222E Umgebungsdrucksensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x222F | P222F | P222F Umgebungsdrucksensor (Bank 1 / Bank 2) - Korrelationsfehler |
| 0x2230 | P2230 | P2230 Umgebungsdrucksensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x2231 | P2231 | P2231 Lambdasonde (Bank 1, vor Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2232 | P2232 | P2232 Lambdasonde (Bank 1, nach Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2233 | P2233 | P2233 Lambdasonde (Bank 1, Sonde 3) - Heizereinkopplung auf Signalpfad  |
| 0x2234 | P2234 | P2234 Lambdasonde (Bank 2, vor Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2235 | P2235 | P2235 Lambdasonde (Bank 2, nach Katalysator) Heizereinkopplung auf Signalpfad  |
| 0x2236 | P2236 | P2236 Lambdasonde (Bank 1, Sensor 3) - Heizereinkopplung auf Signalpfad  |
| 0x2237 | P2237 | P2237 Lambdasonde Pumpstromleitung Steuerkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2238 | P2238 | P2238 Lambdasonde Pumpstromleitung Steuerkreis (Bank 1, vor Katalysator) - niedrig |
| 0x2239 | P2239 | P2239 Lambdasonde Pumpstromleitung Steuerkreis (Bank 1, vor Katalysator) - hoch |
| 0x2240 | P2240 | P2240 Lambdasonde Pumpstromleitung Steuerkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2241 | P2241 | P2241 Lambdasonde Pumpstromleitung Steuerkreis (Bank 2, vor Katalysator) - niedrig |
| 0x2242 | P2242 | P2242 Lambdasonde Pumpstromleitung Steuerkreis (Bank 2, vor Katalysator) - hoch |
| 0x2243 | P2243 | P2243 Lambdasonde Nernstleitung Schaltkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2244 | P2244 | P2244 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Leistungsproblem |
| 0x2245 | P2245 | P2245 Lambdasonde Nernstleitung Schaltkreis (Bank 1, vor Katalysator) - niedrig |
| 0x2246 | P2246 | P2246 Lambdasonde Nernstleitung Schaltkreis (Bank 1, vor Katalysator) - hoch |
| 0x2247 | P2247 | P2247 Lambdasonde Nernstleitung Schaltkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2248 | P2248 | P2248 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Leistungsproblem |
| 0x2249 | P2249 | P2249 Lambdasonde Nernstleitung Schaltkreis (Bank 2, vor Katalysator) - niedrig |
| 0x2250 | P2250 | P2250 Lambdasonde Nernstleitung Schaltkreis (Bank 2, vor Katalysator) - hoch |
| 0x2251 | P2251 | P2251 Lambdasonde virtuelle Masse Steuerkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2252 | P2252 | P2252 Lambdasonde virtuelle Masse Steuerkreis (Bank 1, vor Katalysator) - niedrig |
| 0x2253 | P2253 | P2253 Lambdasonde virtuelle Masse Steuerkreis (Bank 1, vor Katalysator) - hoch |
| 0x2254 | P2254 | P2254 Lambdasonde virtuelle Masse Steuerkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2255 | P2255 | P2255 Lambdasonde virtuelle Masse Steuerkreis (Bank 2, vor Katalysator) - niedrig |
| 0x2256 | P2256 | P2256 Lambdasonde virtuelle Masse Steuerkreis (Bank 2, vor Katalysator) - hoch |
| 0x2257 | P2257 | P2257 Sekundärluftsystemregelungskreis (Bank 1) - niedrig |
| 0x2258 | P2258 | P2258 Sekundärluftsystemregelungskreis (Bank 1) - hoch |
| 0x2259 | P2259 | P2259 Sekundärluftsystemregelungskreis (Bank 2) - niedrig |
| 0x2260 | P2260 | P2260 Sekundärluftsystemregelungskreis (Bank 2) - hoch |
| 0x2261 | P2261 | P2261 Turbolader/Verdichter Bypassventil (Bank 1) - mechanischer Fehler |
| 0x2262 | P2262 | P2262 Turbolader/Verdichter Ladedruck nicht erkannt - mechanischer Fehler |
| 0x2263 | P2263 | P2263 Turbolader/Verdichter Ladedrucksystem - Leistungsproblem |
| 0x2264 | P2264 | P2264 Wasser-/Kraftstoff-Sonde Schaltkreis - Fehlfunktion |
| 0x2265 | P2265 | P2265 Wasser-/Kraftstoff-Sonde Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2266 | P2266 | P2266 Wasser-/Kraftstoff-Sonde Schaltkreis - niedrig |
| 0x2267 | P2267 | P2267 Wasser-/Kraftstoff-Sonde Schaltkreis - hoch |
| 0x2268 | P2268 | P2268 Wasser-/Kraftstoff-Sonde Schaltkreis - sporadisch |
| 0x2269 | P2269 | P2269 Wasser-/Kraftstoff-Zustand - Fehlfunktion |
| 0x226A | P226A | P226A Wasser-/Kraftstoff-Kontrollleuchte Schaltkreis - Fehlfunktion |
| 0x226B | P226B | P226B Turbolader/Verdichter Ladedruck zu hoch - mechanischer Fehler |
| 0x2270 | P2270 | P2270 Lambdasonde (Bank 1, nach Katalysator) - Signal festliegend auf Mager |
| 0x2271 | P2271 | P2271 Lambdasonde (Bank 1, nach Katalysator) - Signal festliegend auf Fett |
| 0x2272 | P2272 | P2272 Lambdasonde (Bank 2, nach Katalysator) - Signal festliegend auf Mager |
| 0x2273 | P2273 | P2273 Lambdasonde (Bank 2, nach Katalysator) - Signal festliegend auf Fett |
| 0x2274 | P2274 | P2274 Lambdasonde (Bank 1, Sensor 3) - Signal festliegend auf Mager |
| 0x2275 | P2275 | P2275 Lambdasonde (Bank 1, Sensor 3) - Signal festliegend auf Fett |
| 0x2276 | P2276 | P2276 Lambdasonde (Bank 2, Sensor 3) - Signal festliegend auf Mager |
| 0x2277 | P2277 | P2277 Lambdasonde (Bank 2, Sensor 3) - Signal festliegend auf Fett |
| 0x2278 | P2278 | P2278 Lambdasonden Signal Bank 1 Sensor 3 / Bank 2 Sensor 3 - vertauscht  |
| 0x2279 | P2279 | P2279 Ansaugluftsystem - Leck entdeckt |
| 0x2280 | P2280 | P2280 Luftdurchsatzeinschränkung / Leckluft zwischen Luftfilter und Luftmassen- oder Luftmengensensor  |
| 0x2281 | P2281 | P2281 Leckluft zwischen Luftmassen- oder Luftmengensensor und Drosselklappenstutzen |
| 0x2282 | P2282 | P2282 Leckluft zwischen Drosselklappenstutzen und Einlassventilen |
| 0x2283 | P2283 | P2283 Einspritzregelung Drucksensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2284 | P2284 | P2284 Einspritzregelung Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2285 | P2285 | P2285 Einspritzregelung Drucksensor Schaltkreis - niedrig |
| 0x2286 | P2286 | P2286 Einspritzregelung Drucksensor Schaltkreis - hoch |
| 0x2287 | P2287 | P2287 Einspritzregelung Drucksensor Schaltkreis - sporadisch |
| 0x2288 | P2288 | P2288 Einspritzregelung - Druck zu hoch |
| 0x2289 | P2289 | P2289 Einspritzregelung - Druck zu hoch bei Motor 'AUS' |
| 0x228A | P228A | P228A Kraftstoffdruckregler 1 - Zwangs-Motorabschaltung |
| 0x228B | P228B | P228B Kraftstoffdruckregler 2 - Zwangs-Motorabschaltung |
| 0x228C | P228C | P228C Kraftstoffdruckregler 1 Regelgrenze überschritten - Druck zu niedrig |
| 0x228D | P228D | P228D Kraftstoffdruckregler 1 Regelgrenze überschritten - Druck zu hoch |
| 0x228E | P228E | P228E Kraftstoffdruckregler 1 - gelernter Adaptionswert zu niedrig |
| 0x228F | P228F | P228F Kraftstoffdruckregler 1 - gelernter Adaptionswert zu hoch |
| 0x2290 | P2290 | P2290 Einspritzregelung - Druck zu niedrig |
| 0x2291 | P2291 | P2291 Einspritzregelung - Druck zu niedrig bei Motor 'START' |
| 0x2292 | P2292 | P2292 Einspritzregelung - Druck unregelmäßig |
| 0x2293 | P2293 | P2293 Kraftstoffdruckregler 2 - Leistungsproblem |
| 0x2294 | P2294 | P2294 Kraftstoffdruckregler 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2295 | P2295 | P2295 Kraftstoffdruckregler 2 Steuerkreis - niedrig |
| 0x2296 | P2296 | P2296 Kraftstoffdruckregler 2 Steuerkreis - hoch |
| 0x2297 | P2297 | P2297 Lambdasonde (Bank 1, vor Katalysator) - Spannungswert außerhalb Gültigkeitsbereich im Schub |
| 0x2298 | P2298 | P2298 Lambdasonde (Bank 2, vor Katalysator) - Spannungswert außerhalb Gültigkeitsbereich im Schub |
| 0x2299 | P2299 | P2299 Gaspedal- und Bremspedalstellung - Kompatibilitätsfehler |
| 0x229A | P229A | P229A Kraftstoffdruckregler 2 Regelgrenze überschritten - Druck zu niedrig |
| 0x229B | P229B | P229B Kraftstoffdruckregler 2 Regelgrenze überschritten - Druck zu hoch |
| 0x229C | P229C | P229C Kraftstoffdruckregler 2 - gelernter Adaptionswert zu niedrig |
| 0x229D | P229D | P229D Kraftstoffdruckregler 2 - gelernter Adaptionswert zu hoch |
| 0x229E | P229E | P229E NOx-Sensor Schaltkreis (Bank 1, Sensor 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x229F | P229F | P229F NOx-Sensor Schaltkreis (Bank 1, Sensor 2) - Messbereichs- oder Leistungsproblem |
| 0x22A0 | P22A0 | P22A0 NOx-Sensor Schaltkreis (Bank 1, Sensor 2) - niedrig |
| 0x22A1 | P22A1 | P22A1 NOx-Sensor Schaltkreis (Bank 1, Sensor 2) - hoch |
| 0x22A2 | P22A2 | P22A2 NOx-Sensor Schaltkreis (Bank 1, Sensor 2) - sporadisch |
| 0x22A3 | P22A3 | P22A3 NOx-Sensor Heizungssteuerkreis (Bank 1, Sensor 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22A4 | P22A4 | P22A4 NOx-Sensor Heizungssteuerkreis (Bank 1, Sensor 2) - niedrig |
| 0x22A5 | P22A5 | P22A5 NOx-Sensor Heizungssteuerkreis (Bank 1, Sensor 2) - hoch |
| 0x22A6 | P22A6 | P22A6 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 2) - Fehlfunktion |
| 0x22A7 | P22A7 | P22A7 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 2) - Messbereichs- oder Leistungsproblem |
| 0x22A8 | P22A8 | P22A8 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 2) - niedrig |
| 0x22A9 | P22A9 | P22A9 NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 2) - hoch |
| 0x22AA | P22AA | P22AA NOx-Sensor Heizungsüberwachungsschaltkreis (Bank 1, Sensor 2) - sporadisch |
| 0x22AB | P22AB | P22AB Lambdasonde Pumpstromleitung Steuerkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22AC | P22AC | P22AC Lambdasonde Pumpstromleitung Steuerkreis (Bank 1, nach Katalysator) - niedrig |
| 0x22AD | P22AD | P22AD Lambdasonde Pumpstromleitung Steuerkreis (Bank 1, nach Katalysator) - hoch |
| 0x22AE | P22AE | P22AE Lambdasonde Nernstleitung Schaltkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22AF | P22AF | P22AF Lambdasonde Nernstleitung Schaltkreis (Bank 1, nach Katalysator) - Leistungsproblem |
| 0x22B0 | P22B0 | P22B0 Lambdasonde Nernstleitung Schaltkreis (Bank 1, nach Katalysator) - niedrig |
| 0x22B1 | P22B1 | P22B1 Lambdasonde Nernstleitung Schaltkreis (Bank 1, nach Katalysator) - hoch |
| 0x22B2 | P22B2 | P22B2 Lambdasonde virtuelle Masse Steuerkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22B3 | P22B3 | P22B3 Lambdasonde virtuelle Masse Steuerkreis (Bank 1, nach Katalysator) - niedrig |
| 0x22B4 | P22B4 | P22B4 Lambdasonde virtuelle Masse Steuerkreis (Bank 1, nach Katalysator) - hoch |
| 0x22B5 | P22B5 | P22B5 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22B6 | P22B6 | P22B6 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, nach Katalysator) - niedrig |
| 0x22B7 | P22B7 | P22B7 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, nach Katalysator) - hoch |
| 0x22B8 | P22B8 | P22B8 Lambdasonde Pumpstromleitung Steuerkreis (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22B9 | P22B9 | P22B9 Lambdasonde Pumpstromleitung Steuerkreis (Bank 2, nach Katalysator) - niedrig |
| 0x22BA | P22BA | P22BA Lambdasonde Pumpstromleitung Steuerkreis (Bank 2, nach Katalysator) - hoch |
| 0x22BB | P22BB | P22BB Lambdasonde Nernstleitung Schaltkreis (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22BC | P22BC | P22BC Lambdasonde Nernstleitung Schaltkreis (Bank 2, nach Katalysator) - Leistungsproblem |
| 0x22BD | P22BD | P22BD Lambdasonde Nernstleitung Schaltkreis (Bank 2, nach Katalysator) - niedrig |
| 0x22BE | P22BE | P22BE Lambdasonde Nernstleitung Schaltkreis (Bank 2, nach Katalysator) - hoch |
| 0x22BF | P22BF | P22BF Lambdasonde virtuelle Masse Steuerkreis (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22C0 | P22C0 | P22C0 Lambdasonde virtuelle Masse Steuerkreis (Bank 2, nach Katalysator) - niedrig |
| 0x22C1 | P22C1 | P22C1 Lambdasonde virtuelle Masse Steuerkreis (Bank 2, nach Katalysator) - hoch |
| 0x22C2 | P22C2 | P22C2 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x22C3 | P22C3 | P22C3 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, nach Katalysator) - niedrig |
| 0x22C4 | P22C4 | P22C4 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, nach Katalysator) - hoch |
| 0x22C5 | P22C5 | P22C5 Turbocharger Kompressor Auslassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x22C6 | P22C6 | P22C6 Turbocharger Kompressor Auslassventil Steuerkreis - niedrig |
| 0x22C7 | P22C7 | P22C7 Turbocharger Kompressor Auslassventil Steuerkreis - hoch |
| 0x22C8 | P22C8 | P22C8 Turbocharger Kompressor Auslassventil - klemmt offen |
| 0x22C9 | P22C9 | P22C9 Turbocharger Kompressor Auslassventil - klemmt geschlossen |
| 0x22CA | P22CA | P22CA Turbocharger Kompressor Auslass-Umschaltventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x22CB | P22CB | P22CB Turbocharger Kompressor Auslass-Umschaltventil Steuerkreis - niedrig |
| 0x22CC | P22CC | P22CC Turbocharger Kompressor Auslass-Umschaltventil Steuerkreis - hoch |
| 0x22CD | P22CD | P22CD Turbocharger Kompressor Auslass-Umschaltventil - klemmt offen |
| 0x22CE | P22CE | P22CE Turbocharger Kompressor Auslass-Umschaltventil - klemmt geschlossen |
| 0x22CF | P22CF | P22CF Turbocharger Turbine Einlassventil Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x22D0 | P22D0 | P22D0 Turbocharger Turbine Einlassventil Schaltkreis - niedrig |
| 0x22D1 | P22D1 | P22D1 Turbocharger Turbine Einlassventil Schaltkreis - hoch |
| 0x22D2 | P22D2 | P22D2 Turbocharger Turbine Einlassventil - klemmt offen |
| 0x22D3 | P22D3 | P22D3 Turbocharger Turbine Einlassventil - klemmt geschlossen |
| 0x2300 | P2300 | P2300 Zündspule 1, Primärschaltkreis - niedrig |
| 0x2301 | P2301 | P2301 Zündspule 1, Primärschaltkreis - hoch |
| 0x2302 | P2302 | P2302 Zündspule 1, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2303 | P2303 | P2303 Zündspule 2, Primärschaltkreis - niedrig |
| 0x2304 | P2304 | P2304 Zündspule 2, Primärschaltkreis - hoch |
| 0x2305 | P2305 | P2305 Zündspule 2, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2306 | P2306 | P2306 Zündspule 3, Primärschaltkreis - niedrig |
| 0x2307 | P2307 | P2307 Zündspule 3, Primärschaltkreis - hoch |
| 0x2308 | P2308 | P2308 Zündspule 3, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2309 | P2309 | P2309 Zündspule 4, Primärschaltkreis - niedrig |
| 0x2310 | P2310 | P2310 Zündspule 4, Primärschaltkreis - hoch |
| 0x2311 | P2311 | P2311 Zündspule 4, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2312 | P2312 | P2312 Zündspule 5, Primärschaltkreis - niedrig |
| 0x2313 | P2313 | P2313 Zündspule 5, Primärschaltkreis - hoch |
| 0x2314 | P2314 | P2314 Zündspule 5, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2315 | P2315 | P2315 Zündspule 6, Primärschaltkreis - niedrig |
| 0x2316 | P2316 | P2316 Zündspule 6, Primärschaltkreis - hoch |
| 0x2317 | P2317 | P2317 Zündspule 6, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2318 | P2318 | P2318 Zündspule 7, Primärschaltkreis - niedrig |
| 0x2319 | P2319 | P2319 Zündspule 7, Primärschaltkreis - hoch |
| 0x2320 | P2320 | P2320 Zündspule 7, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2321 | P2321 | P2321 Zündspule 8, Primärschaltkreis - niedrig |
| 0x2322 | P2322 | P2322 Zündspule 8, Primärschaltkreis - hoch |
| 0x2323 | P2323 | P2323 Zündspule 8, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2324 | P2324 | P2324 Zündspule 9, Primärschaltkreis - niedrig |
| 0x2325 | P2325 | P2325 Zündspule 9, Primärschaltkreis - hoch |
| 0x2326 | P2326 | P2326 Zündspule 9, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2327 | P2327 | P2327 Zündspule 10, Primärschaltkreis - niedrig |
| 0x2328 | P2328 | P2328 Zündspule 10, Primärschaltkreis - hoch |
| 0x2329 | P2329 | P2329 Zündspule 10, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2330 | P2330 | P2330 Zündspule 11, Primärschaltkreis - niedrig |
| 0x2331 | P2331 | P2331 Zündspule 11, Primärschaltkreis - hoch |
| 0x2332 | P2332 | P2332 Zündspule 11, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2333 | P2333 | P2333 Zündspule 12, Primärschaltkreis - niedrig |
| 0x2334 | P2334 | P2334 Zündspule 12, Primärschaltkreis - hoch |
| 0x2335 | P2335 | P2335 Zündspule 12, Sekundärschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2336 | P2336 | P2336 Zylinder 1 - Klopfwert über Schwellwert |
| 0x2337 | P2337 | P2337 Zylinder 2 - Klopfwert über Schwellwert |
| 0x2338 | P2338 | P2338 Zylinder 3 - Klopfwert über Schwellwert |
| 0x2339 | P2339 | P2339 Zylinder 4 - Klopfwert über Schwellwert |
| 0x2340 | P2340 | P2340 Zylinder 5 - Klopfwert über Schwellwert |
| 0x2341 | P2341 | P2341 Zylinder 6 - Klopfwert über Schwellwert |
| 0x2342 | P2342 | P2342 Zylinder 7 - Klopfwert über Schwellwert |
| 0x2343 | P2343 | P2343 Zylinder 8 - Klopfwert über Schwellwert |
| 0x2344 | P2344 | P2344 Zylinder 9 - Klopfwert über Schwellwert |
| 0x2345 | P2345 | P2345 Zylinder 10 - Klopfwert über Schwellwert |
| 0x2346 | P2346 | P2346 Zylinder 11 - Klopfwert über Schwellwert |
| 0x2347 | P2347 | P2347 Zylinder 12 - Klopfwert über Schwellwert |
| 0x2348 | P2348 | P2348 Drucksensor Zylinder 9 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2349 | P2349 | P2349 Drucksensor Zylinder 9 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x234A | P234A | P234A Drucksensor Zylinder 9 Schaltkreis - niedrig |
| 0x234B | P234B | P234B Drucksensor Zylinder 9 Schaltkreis - hoch |
| 0x234C | P234C | P234C Drucksensor Zylinder 9 Schaltkreis - sporadisch/unregelmäßig  |
| 0x234D | P234D | P234D Zylinder 9 - Druck zu niedrig |
| 0x234E | P234E | P234E Zylinder 9 - Druck zu hoch |
| 0x234F | P234F | P234F Zylinder 9 Druckschwankung - niedrig |
| 0x2350 | P2350 | P2350 Zylinder 9 Druckschwankung - hoch |
| 0x2351 | P2351 | P2351 Zylinder 9 Verbrennung - Leistungsproblem |
| 0x2352 | P2352 | P2352 Drucksensor Zylinder 10 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2353 | P2353 | P2353 Drucksensor Zylinder 10 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2354 | P2354 | P2354 Drucksensor Zylinder 10 Schaltkreis - niedrig |
| 0x2355 | P2355 | P2355 Drucksensor Zylinder 10 Schaltkreis - hoch |
| 0x2356 | P2356 | P2356 Drucksensor Zylinder 10 Schaltkreis - sporadisch/unregelmäßig  |
| 0x2357 | P2357 | P2357 Zylinder 10 - Druck zu niedrig |
| 0x2358 | P2358 | P2358 Zylinder 10 - Druck zu hoch |
| 0x2359 | P2359 | P2359 Zylinder 10 Druckschwankung - niedrig |
| 0x235A | P235A | P235A Zylinder 10 Druckschwankung - hoch |
| 0x235B | P235B | P235B Zylinder 10 Verbrennung - Leistungsproblem |
| 0x235C | P235C | P235C Drucksensor Zylinder 11 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x235D | P235D | P235D Drucksensor Zylinder 11 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x235E | P235E | P235E Drucksensor Zylinder 11 Schaltkreis - niedrig |
| 0x235F | P235F | P235F Drucksensor Zylinder 11 Schaltkreis - hoch |
| 0x2360 | P2360 | P2360 Drucksensor Zylinder 11 Schaltkreis - sporadisch/unregelmäßig  |
| 0x2361 | P2361 | P2361 Zylinder 11 - Druck zu niedrig |
| 0x2362 | P2362 | P2362 Zylinder 11 - Druck zu hoch |
| 0x2363 | P2363 | P2363 Zylinder 11 Druckschwankung - niedrig |
| 0x2364 | P2364 | P2364 Zylinder 11 Druckschwankung - hoch |
| 0x2365 | P2365 | P2365 Zylinder 11 Verbrennung - Leistungsproblem |
| 0x2366 | P2366 | P2366 Drucksensor Zylinder 12 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2367 | P2367 | P2367 Drucksensor Zylinder 12 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2368 | P2368 | P2368 Drucksensor Zylinder 12 Schaltkreis - niedrig |
| 0x2369 | P2369 | P2369 Drucksensor Zylinder 12 Schaltkreis - hoch |
| 0x236A | P236A | P236A Drucksensor Zylinder 12 Schaltkreis - sporadisch/unregelmäßig  |
| 0x236B | P236B | P236B Zylinder 12 - Druck zu niedrig |
| 0x236C | P236C | P236C Zylinder 12 - Druck zu hoch |
| 0x236D | P236D | P236D Zylinder 12 Druckschwankung - niedrig |
| 0x236E | P236E | P236E Zylinder 12 Druckschwankung - hoch |
| 0x236F | P236F | P236F Zylinder 12 Verbrennung - Leistungsproblem |
| 0x2400 | P2400 | P2400 Tankentlüftungssystem Leckdiagnosepumpe Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2401 | P2401 | P2401 Tankentlüftungssystem Leckdiagnosepumpe Steuerkreis - niedrig |
| 0x2402 | P2402 | P2402 Tankentlüftungssystem Leckdiagnosepumpe Steuerkreis - hoch |
| 0x2403 | P2403 | P2403 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2404 | P2404 | P2404 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2405 | P2405 | P2405 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungsschaltkreis - niedrig |
| 0x2406 | P2406 | P2406 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungsschaltkreis - hoch |
| 0x2407 | P2407 | P2407 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungsschaltkreis - sporadisch/unregelmäßig |
| 0x2408 | P2408 | P2408 Tankdeckel Sensor/Schalter Schaltkreis - Fehlfunktion |
| 0x2409 | P2409 | P2409 Tankdeckel Sensor/Schalter Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x240A | P240A | P240A Tankentlüftungssystem Leckdiagnosepumpe Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x240B | P240B | P240B Tankentlüftungssystem Leckdiagnosepumpe Heizungssteuerkreis - niedrig |
| 0x240C | P240C | P240C Tankentlüftungssystem Leckdiagnosepumpe Heizungssteuerkreis - hoch |
| 0x240F | P240F | P240F Abgasrückführung - langsame Reaktion |
| 0x2410 | P2410 | P2410 Tankdeckel Sensor/Schalter Schaltkreis - niedrig |
| 0x2411 | P2411 | P2411 Tankdeckel Sensor/Schalter Schaltkreis - hoch |
| 0x2412 | P2412 | P2412 Tankdeckel Sensor/Schalter Schaltkreis - sporadisch/unregelmäßig |
| 0x2413 | P2413 | P2413 Abgasrückführungssystem - Leistungsproblem |
| 0x2414 | P2414 | P2414 Lambdasonde (Bank 1, vor Katalysator) - nicht angesteckt |
| 0x2415 | P2415 | P2415 Lambdasonde (Bank 2, vor Katalysator) - nicht angesteckt |
| 0x2416 | P2416 | P2416 Lambdasonden Signal Bank 1 nach Katalysator / Bank 1 Sensor 3 - vertauscht  |
| 0x2417 | P2417 | P2417 Lambdasonden Signal Bank 2 nach Katalysator / Bank 2 Sensor 3 - vertauscht  |
| 0x2418 | P2418 | P2418 Tankentlüftungssystem Umschaltventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2419 | P2419 | P2419 Tankentlüftungssystem Umschaltventil Steuerkreis - niedrig |
| 0x2420 | P2420 | P2420 Tankentlüftungssystem Umschaltventil Steuerkreis - hoch |
| 0x2421 | P2421 | P2421 Tankentlüftungssystem Entlüftungsventil - klemmt offen |
| 0x2422 | P2422 | P2422 Tankentlüftungssystem Entlüftungsventil - klemmt geschlossen |
| 0x2423 | P2423 | P2423 HC-Speicherung Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2424 | P2424 | P2424 HC-Speicherung Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2425 | P2425 | P2425 Abgasrückführung Kühlventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2426 | P2426 | P2426 Abgasrückführung Kühlventil Steuerkreis - niedrig |
| 0x2427 | P2427 | P2427 Abgasrückführung Kühlventil Steuerkreis - hoch |
| 0x2428 | P2428 | P2428 Abgastemperatur (Bank 1) - zu hoch |
| 0x2429 | P2429 | P2429 Abgastemperatur (Bank 2) - zu hoch |
| 0x242A | P242A | P242A Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x242B | P242B | P242B Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 3) - Messbereichs- oder Leistungsproblem |
| 0x242C | P242C | P242C Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 3) - niedrig |
| 0x242D | P242D | P242D Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 3) - hoch |
| 0x242E | P242E | P242E Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 3) - sporadisch/unregelmäßig |
| 0x242F | P242F | P242F Dieselpartikelfilter Einschränkung - Asche-Einlagerung |
| 0x2430 | P2430 | P2430 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2431 | P2431 | P2431 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2432 | P2432 | P2432 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 1) - niedrig |
| 0x2433 | P2433 | P2433 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 1) - hoch |
| 0x2434 | P2434 | P2434 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x2435 | P2435 | P2435 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2436 | P2436 | P2436 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2437 | P2437 | P2437 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 2) - niedrig |
| 0x2438 | P2438 | P2438 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 2) - hoch |
| 0x2439 | P2439 | P2439 Sekundärluftmassenmesser/Drucksensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x2440 | P2440 | P2440 Sekundärluftventil (Bank 1) - klemmt offen |
| 0x2441 | P2441 | P2441 Sekundärluftventil (Bank 1) - klemmt geschlossen |
| 0x2442 | P2442 | P2442 Sekundärluftventil (Bank 2) - klemmt offen |
| 0x2443 | P2443 | P2443 Sekundärluftventil (Bank 2) - klemmt geschlossen |
| 0x2444 | P2444 | P2444 Sekundärluftpumpe (Bank 1) - klemmt geschlossen |
| 0x2445 | P2445 | P2445 Sekundärluftpumpe (Bank 1) - klemmt offen |
| 0x2446 | P2446 | P2446 Sekundärluftpumpe (Bank 2) - klemmt geschlossen |
| 0x2447 | P2447 | P2447 Sekundärluftpumpe (Bank 2) - klemmt offen |
| 0x2448 | P2448 | P2448 Sekundärluftsystem (Bank 1) - hoher Durchsatz |
| 0x2449 | P2449 | P2449 Sekundärluftsystem (Bank 2) - hoher Durchsatz |
| 0x244A | P244A | P244A Dieselpartikelfilter Differenzdruck (Bank 1) - zu niedrig |
| 0x244B | P244B | P244B Dieselpartikelfilter Differenzdruck (Bank 1) - zu hoch |
| 0x244C | P244C | P244C Abgastemperatur für Partikelfilter-Regeneration (Bank 1) - zu niedrig |
| 0x244D | P244D | P244D Abgastemperatur für Partikelfilter-Regeneration (Bank 1) - zu hoch |
| 0x244E | P244E | P244E Abgastemperatur für Partikelfilter-Regeneration (Bank 2) - zu niedrig |
| 0x244F | P244F | P244F Abgastemperatur für Partikelfilter-Regeneration (Bank 2) - zu hoch |
| 0x2450 | P2450 | P2450 Tankentlüftungssystem Umschaltventil - Leistungsproblem oder klemmt offen |
| 0x2451 | P2451 | P2451 Tankentlüftungssystem Umschaltventil - klemmt geschlossen |
| 0x2452 | P2452 | P2452 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2453 | P2453 | P2453 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2454 | P2454 | P2454 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 1) - niedrig |
| 0x2455 | P2455 | P2455 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 1) - hoch |
| 0x2456 | P2456 | P2456 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x2457 | P2457 | P2457 Abgasrückführung Kühler - Wirkungsgrad unter Schwellwert |
| 0x2458 | P2458 | P2458 Dieselpartikelfilter Regenerationsdauer - Fehlfunktion |
| 0x2459 | P2459 | P2459 Dieselpartikelfilter Regenerationshäufigkeit - Fehlfunktion |
| 0x245A | P245A | P245A Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x245B | P245B | P245B Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x245C | P245C | P245C Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 1) - niedrig |
| 0x245D | P245D | P245D Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 1) - hoch |
| 0x245E | P245E | P245E Dieselpartikelfilter Drucksensor Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x245F | P245F | P245F Dieselpartikelfilter Drucksensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2460 | P2460 | P2460 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 2) - niedrig |
| 0x2461 | P2461 | P2461 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 2) - hoch |
| 0x2462 | P2462 | P2462 Dieselpartikelfilter Drucksensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x2463 | P2463 | P2463 Dieselpartikelfilter Einschränkung - Ruß-Einlagerung |
| 0x2464 | P2464 | P2464 Dieselpartikelfilter Differenzdruck (Bank 2) - zu niedrig |
| 0x2465 | P2465 | P2465 Dieselpartikelfilter Differenzdruck (Bank 2) - zu hoch |
| 0x2466 | P2466 | P2466 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2467 | P2467 | P2467 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 3) - Messbereichs- oder Leistungsproblem |
| 0x2468 | P2468 | P2468 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 3) - niedrig |
| 0x2469 | P2469 | P2469 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 3) - hoch |
| 0x246A | P246A | P246A Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 3) - sporadisch/unregelmäßig |
| 0x246B | P246B | P246B Fahrzeugkonditionen - falsch für Dieselpartikelfilter-Regeneration |
| 0x246C | P246C | P246C Dieselpartikelfilter Einschränkung - Zwangs-Leistungsbegrenzung |
| 0x246D | P246D | P246D Dieselpartikelfilter Drucksensor (Bank 1 / Bank 2) - Korrelationsfehler |
| 0x246E | P246E | P246E Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 4) - Fehlfunktion oder Leitungsunterbrechung |
| 0x246F | P246F | P246F Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 4) - Messbereichs- oder Leistungsproblem |
| 0x2470 | P2470 | P2470 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 4) - niedrig |
| 0x2471 | P2471 | P2471 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 4) - hoch |
| 0x2472 | P2472 | P2472 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 4) - sporadisch/unregelmäßig |
| 0x2473 | P2473 | P2473 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 4) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2474 | P2474 | P2474 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 4) - Messbereichs- oder Leistungsproblem |
| 0x2475 | P2475 | P2475 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 4) - niedrig |
| 0x2476 | P2476 | P2476 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 4) - hoch |
| 0x2477 | P2477 | P2477 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 4) - sporadisch/unregelmäßig |
| 0x2478 | P2478 | P2478 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 1) - außerhalb Gültigkeitsbereich |
| 0x2479 | P2479 | P2479 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 2) - außerhalb Gültigkeitsbereich |
| 0x247A | P247A | P247A Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 3) - außerhalb Gültigkeitsbereich |
| 0x247B | P247B | P247B Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 4) - außerhalb Gültigkeitsbereich |
| 0x247C | P247C | P247C Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 1) - außerhalb Gültigkeitsbereich |
| 0x247D | P247D | P247D Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 2) - außerhalb Gültigkeitsbereich |
| 0x247E | P247E | P247E Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 3) - außerhalb Gültigkeitsbereich |
| 0x247F | P247F | P247F Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 4) - außerhalb Gültigkeitsbereich |
| 0x2480 | P2480 | P2480 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 5) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2481 | P2481 | P2481 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 5) - niedrig |
| 0x2482 | P2482 | P2482 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 5) - hoch |
| 0x2483 | P2483 | P2483 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 5) - Messbereichs- oder Leistungsproblem |
| 0x2484 | P2484 | P2484 Abgastemperaturfühler Schaltkreis (Bank 1, Sensor 5) - sporadisch/unregelmäßig |
| 0x2485 | P2485 | P2485 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 5) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2486 | P2486 | P2486 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 5) - niedrig |
| 0x2487 | P2487 | P2487 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 5) - hoch |
| 0x2488 | P2488 | P2488 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 5) - Messbereichs- oder Leistungsproblem |
| 0x2489 | P2489 | P2489 Abgastemperaturfühler Schaltkreis (Bank 2, Sensor 5) - sporadisch/unregelmäßig |
| 0x248A | P248A | P248A Reduktionsmittel Heizungsüberwachungsschaltkreis 1 - niedrig |
| 0x248B | P248B | P248B Reduktionsmittel Heizungsüberwachungsschaltkreis 1 - hoch |
| 0x248C | P248C | P248C Reduktionsmittel Heizungsüberwachungsschaltkreis 2 - niedrig |
| 0x248D | P248D | P248D Reduktionsmittel Heizungsüberwachungsschaltkreis 2 - hoch |
| 0x248E | P248E | P248E Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x248F | P248F | P248F Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2490 | P2490 | P2490 Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 2) - niedrig |
| 0x2491 | P2491 | P2491 Abgasrückführung Kühler Bypassregelung Schaltkreis (Bank 2) - hoch |
| 0x2492 | P2492 | P2492 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 1) - Fehlfunktion |
| 0x2493 | P2493 | P2493 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2494 | P2494 | P2494 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 1) - niedrig |
| 0x2495 | P2495 | P2495 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 1) - hoch |
| 0x2496 | P2496 | P2496 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x2497 | P2497 | P2497 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 2) - Fehlfunktion |
| 0x2498 | P2498 | P2498 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2499 | P2499 | P2499 Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 2) - niedrig |
| 0x249A | P249A | P249A Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 2) - hoch |
| 0x249B | P249B | P249B Abgasrückführung Kühler Bypass Positionssensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x2500 | P2500 | P2500 Generator-Kontrollleuchte / Klemme 'L' Schaltkreis - niedrig |
| 0x2501 | P2501 | P2501 Generator-Kontrollleuchte / Klemme 'L' Schaltkreis - hoch |
| 0x2502 | P2502 | P2502 Ladespannung - Fehlfunktion |
| 0x2503 | P2503 | P2503 Ladespannung - Unterspannung |
| 0x2504 | P2504 | P2504 Ladespannung - Überspannung |
| 0x2505 | P2505 | P2505 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - Fehlfunktion |
| 0x2506 | P2506 | P2506 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - Messbereichs- oder Leistungsproblem |
| 0x2507 | P2507 | P2507 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - niedrig |
| 0x2508 | P2508 | P2508 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - hoch |
| 0x2509 | P2509 | P2509 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - sporadisch |
| 0x250A | P250A | P250A Motorölfüllstandssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x250B | P250B | P250B Motorölfüllstandssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x250C | P250C | P250C Motorölfüllstandssensor Schaltkreis - niedrig |
| 0x250D | P250D | P250D Motorölfüllstandssensor Schaltkreis - hoch |
| 0x250E | P250E | P250E Motorölfüllstandssensor Schaltkreis - sporadisch/unregelmäßig |
| 0x250F | P250F | P250F Motorölfüllstand - zu niedrig |
| 0x2510 | P2510 | P2510 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2511 | P2511 | P2511 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungsschaltkreis - sporadisch |
| 0x2512 | P2512 | P2512 Unfalldatenschreiber Anforderung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2513 | P2513 | P2513 Unfalldatenschreiber Anforderung Schaltkreis - niedrig |
| 0x2514 | P2514 | P2514 Unfalldatenschreiber Anforderung Schaltkreis - hoch |
| 0x2515 | P2515 | P2515 Klimaanlage Kältemitteldrucksensor 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2516 | P2516 | P2516 Klimaanlage Kältemitteldrucksensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2517 | P2517 | P2517 Klimaanlage Kältemitteldrucksensor 2 Schaltkreis - niedrig |
| 0x2518 | P2518 | P2518 Klimaanlage Kältemitteldrucksensor 2 Schaltkreis - hoch |
| 0x2519 | P2519 | P2519 Klimaanlage Anforderung 1 Schaltkreis - Fehlfunktion |
| 0x251A | P251A | P251A Nebenabtrieb Freigabeschalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x251B | P251B | P251B Nebenabtrieb Freigabeschalter Schaltkreis - niedrig |
| 0x251C | P251C | P251C Nebenabtrieb Freigabeschalter Schaltkreis - hoch |
| 0x251D | P251D | P251D Nebenabtrieb Motorabschaltung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x251E | P251E | P251E Nebenabtrieb Motorabschaltung Schaltkreis - niedrig |
| 0x251F | P251F | P251F Nebenabtrieb Motorabschaltung Schaltkreis - hoch |
| 0x2520 | P2520 | P2520 Klimaanlage Anforderung 1 Schaltkreis - niedrig |
| 0x2521 | P2521 | P2521 Klimaanlage Anforderung 1 Schaltkreis - hoch |
| 0x2522 | P2522 | P2522 Klimaanlage Anforderung 2 Schaltkreis - Fehlfunktion |
| 0x2523 | P2523 | P2523 Klimaanlage Anforderung 2 Schaltkreis - niedrig |
| 0x2524 | P2524 | P2524 Klimaanlage Anforderung 2 Schaltkreis - hoch |
| 0x2525 | P2525 | P2525 Unterdruckbehälter Drucksensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2526 | P2526 | P2526 Unterdruckbehälter Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2527 | P2527 | P2527 Unterdruckbehälter Drucksensor Schaltkreis - niedrig |
| 0x2528 | P2528 | P2528 Unterdruckbehälter Drucksensor Schaltkreis - hoch |
| 0x2529 | P2529 | P2529 Unterdruckbehälter Drucksensor Schaltkreis - sporadisch |
| 0x252A | P252A | P252A Motorölqualitätssensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x252B | P252B | P252B Motorölqualitätssensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x252C | P252C | P252C Motorölqualitätssensor Schaltkreis - niedrig |
| 0x252D | P252D | P252D Motorölqualitätssensor Schaltkreis - hoch |
| 0x252E | P252E | P252E Motorölqualitätssensor Schaltkreis - sporadisch/unregelmäßig |
| 0x252F | P252F | P252F Motorölfüllstand - zu hoch |
| 0x2530 | P2530 | P2530 Zündschalter Fahrbetriebsstellung Schaltkreis - Fehlfunktion |
| 0x2531 | P2531 | P2531 Zündschalter Fahrbetriebsstellung Schaltkreis - niedrig |
| 0x2532 | P2532 | P2532 Zündschalter Fahrbetriebsstellung Schaltkreis - hoch |
| 0x2533 | P2533 | P2533 Zündschalter Fahrbetriebs-/Startstellung Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2534 | P2534 | P2534 Zündschalter Fahrbetriebs-/Startstellung Schaltkreis - niedrig |
| 0x2535 | P2535 | P2535 Zündschalter Fahrbetriebs-/Startstellung Schaltkreis - hoch |
| 0x2536 | P2536 | P2536 Zündschalter Zusatzstellung Schaltkreis - Fehlfunktion |
| 0x2537 | P2537 | P2537 Zündschalter Zusatzstellung Schaltkreis - niedrig |
| 0x2538 | P2538 | P2538 Zündschalter Zusatzstellung Schaltkreis - hoch |
| 0x2539 | P2539 | P2539 Niederdruck-Kraftstoffsystem Sensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x253A | P253A | P253A Nebenabtrieb Überwachungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x253B | P253B | P253B Nebenabtrieb Überwachungsschaltkreis - Messbereichs- oder Leistungsproblem |
| 0x253C | P253C | P253C Nebenabtrieb Überwachungsschaltkreis - niedrig |
| 0x253D | P253D | P253D Nebenabtrieb Überwachungsschaltkreis - hoch |
| 0x253E | P253E | P253E Nebenabtrieb Überwachungsschaltkreis - sporadisch/unregelmäßig |
| 0x253F | P253F | P253F Motoröl - verschlissen |
| 0x2540 | P2540 | P2540 Niederdruck-Kraftstoffsystem Sensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2541 | P2541 | P2541 Niederdruck-Kraftstoffsystem Sensor Schaltkreis - niedrig |
| 0x2542 | P2542 | P2542 Niederdruck-Kraftstoffsystem Sensor Schaltkreis - hoch |
| 0x2543 | P2543 | P2543 Niederdruck-Kraftstoffsystem Sensor  Schaltkreis - sporadisch |
| 0x2544 | P2544 | P2544 Drehmomentanforderung Eingangssignal 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2545 | P2545 | P2545 Drehmomentanforderung Eingangssignal 1 - Messbereichs- oder Leistungsproblem |
| 0x2546 | P2546 | P2546 Drehmomentanforderung Eingangssignal 1 - niedrig |
| 0x2547 | P2547 | P2547 Drehmomentanforderung Eingangssignal 1 - hoch |
| 0x2548 | P2548 | P2548 Drehmomentanforderung Eingangssignal 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2549 | P2549 | P2549 Drehmomentanforderung Eingangssignal 2 - Messbereichs- oder Leistungsproblem |
| 0x254A | P254A | P254A Nebenabtriebsdrehzahl Wählsensor/Wählschalter 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x254B | P254B | P254B Nebenabtriebsdrehzahl Wählsensor/Wählschalter 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x254C | P254C | P254C Nebenabtriebsdrehzahl Wählsensor/Wählschalter 1 Schaltkreis - niedrig |
| 0x254D | P254D | P254D Nebenabtriebsdrehzahl Wählsensor/Wählschalter 1 Schaltkreis - hoch |
| 0x254E | P254E | P254E Nebenabtriebsdrehzahl Wählsensor/Wählschalter 1 Schaltkreis - sporadisch/unregelmäßig |
| 0x254F | P254F | P254F Motorhaubenkontakt Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2550 | P2550 | P2550 Drehmomentanforderung Eingangssignal 2 - niedrig |
| 0x2551 | P2551 | P2551 Drehmomentanforderung Eingangssignal 2 - hoch |
| 0x2552 | P2552 | P2552 Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 1) - Fehlfunktion |
| 0x2553 | P2553 | P2553 Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2554 | P2554 | P2554 Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 1) - niedrig |
| 0x2555 | P2555 | P2555 Drosselklappen-/Kraftstoffsperre Schaltkreis (Bank 1) - hoch |
| 0x2556 | P2556 | P2556 Motorkühlmittel-Füllstandssensor/-schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2557 | P2557 | P2557 Motorkühlmittel-Füllstandssensor/-schalter Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2558 | P2558 | P2558 Motorkühlmittel-Füllstandssensor/-schalter Schaltkreis - niedrig |
| 0x2559 | P2559 | P2559 Motorkühlmittel-Füllstandssensor/-schalter Schaltkreis - hoch |
| 0x255A | P255A | P255A Nebenabtriebsdrehzahl Wählsensor/Wählschalter 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x255B | P255B | P255B Nebenabtriebsdrehzahl Wählsensor/Wählschalter 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x255C | P255C | P255C Nebenabtriebsdrehzahl Wählsensor/Wählschalter 2 Schaltkreis - niedrig |
| 0x255D | P255D | P255D Nebenabtriebsdrehzahl Wählsensor/Wählschalter 2 Schaltkreis - hoch |
| 0x255E | P255E | P255E Nebenabtriebsdrehzahl Wählsensor/Wählschalter 2 Schaltkreis - sporadisch/unregelmäßig |
| 0x255F | P255F | P255F Klimaanlage Anforderung 1 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2560 | P2560 | P2560 Motorkühlmittel-Füllstand - zu niedrig |
| 0x2561 | P2561 | P2561 Klimaanlagen-Steuergerät Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion |
| 0x2562 | P2562 | P2562 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2563 | P2563 | P2563 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2564 | P2564 | P2564 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 1) - niedrig |
| 0x2565 | P2565 | P2565 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 1) - hoch |
| 0x2566 | P2566 | P2566 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 1) - sporadisch |
| 0x2567 | P2567 | P2567 Direkte Ozon-Reduzierung Katalysatortemperaturfühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2568 | P2568 | P2568 Direkte Ozon-Reduzierung Katalysatortemperaturfühler Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2569 | P2569 | P2569 Direkte Ozon-Reduzierung Katalysatortemperaturfühler Schaltkreis - niedrig |
| 0x256A | P256A | P256A Motorleerlaufdrehzahl Wählsensor/Wählschalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x256B | P256B | P256B Motorleerlaufdrehzahl Wählsensor/Wählschalter Schaltkreis - Messbereichs- oder Leitungsproblem |
| 0x256C | P256C | P256C Motorleerlaufdrehzahl Wählsensor/Wählschalter Schaltkreis - niedrig |
| 0x256D | P256D | P256D Motorleerlaufdrehzahl Wählsensor/Wählschalter Schaltkreis - hoch |
| 0x256E | P256E | P256E Motorleerlaufdrehzahl Wählsensor/Wählschalter Schaltkreis - sporadisch/unregelmäßig |
| 0x256F | P256F | P256F Klimaanlage Anforderung 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2570 | P2570 | P2570 Direkte Ozon-Reduzierung Katalysatortemperaturfühler Schaltkreis - hoch |
| 0x2571 | P2571 | P2571 Direkte Ozon-Reduzierung Katalysatortemperaturfühler Schaltkreis - sporadisch/unregelmäßig |
| 0x2572 | P2572 | P2572 Direkte Ozon-Reduzierung Katalysatorverschleiß-Sensor Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2573 | P2573 | P2573 Direkte Ozon-Reduzierung Katalysatorverschleiß-Sensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2574 | P2574 | P2574 Direkte Ozon-Reduzierung Katalysatorverschleiß-Sensor Schaltkreis - niedrig |
| 0x2575 | P2575 | P2575 Direkte Ozon-Reduzierung Katalysatorverschleiß-Sensor Schaltkreis - hoch |
| 0x2576 | P2576 | P2576 Direkte Ozon-Reduzierung Katalysatorverschleiß-Sensor Schaltkreis - sporadisch/unregelmäßig |
| 0x2577 | P2577 | P2577 Direkte Ozon-Reduzierung Katalysator - Wirkungsgrad unter Schwellwert |
| 0x2578 | P2578 | P2578 Turbolader Drehzahlfühler Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2579 | P2579 | P2579 Turbolader Drehzahlfühler Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x257A | P257A | P257A Unterdruckbehälter Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x257B | P257B | P257B Unterdruckbehälter Steuerkreis - niedrig |
| 0x257C | P257C | P257C Unterdruckbehälter Steuerkreis - hoch |
| 0x257D | P257D | P257D Motorhaubenkontakt Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x257E | P257E | P257E Motorhaubenkontakt Schaltkreis - niedrig |
| 0x257F | P257F | P257F Motorhaubenkontakt Schaltkreis - hoch |
| 0x2580 | P2580 | P2580 Turbolader Drehzahlfühler Schaltkreis (Bank 1) - niedrig |
| 0x2581 | P2581 | P2581 Turbolader Drehzahlfühler Schaltkreis (Bank 1) - hoch |
| 0x2582 | P2582 | P2582 Turbolader Drehzahlfühler Schaltkreis (Bank 1) - sporadisch |
| 0x2583 | P2583 | P2583 Fahrgeschwindigkeitsregelung Abstandsmesser vorn (Einzeln oder Mitte) - Fehlfunktion |
| 0x2584 | P2584 | P2584 Kraftstoffadditiv-Steuergerät Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion |
| 0x2585 | P2585 | P2585 Kraftstoffadditiv-Steuergerät - Kontrollleuchtenanforderung |
| 0x2586 | P2586 | P2586 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2587 | P2587 | P2587 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2588 | P2588 | P2588 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 2) - niedrig |
| 0x2589 | P2589 | P2589 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 2) - hoch |
| 0x258A | P258A | P258A Unterdruckpumpe Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x258B | P258B | P258B Unterdruckpumpe Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x258C | P258C | P258C Unterdruckpumpe Steuerkreis - niedrig |
| 0x258D | P258D | P258D Unterdruckpumpe Steuerkreis - hoch |
| 0x258E | P258E | P258E Nebenabtrieb Freigabeschalter - Leistungsproblem |
| 0x258F | P258F | P258F Drehmomentanforderung Ausgangssignal - Fehlfunktion |
| 0x2590 | P2590 | P2590 Turbolader Ladedruckregelung Positionssensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x2591 | P2591 | P2591 Fahrgeschwindigkeitsregelung Abstandsmesser vorn (links) |
| 0x2592 | P2592 | P2592 Fahrgeschwindigkeitsregelung Abstandsmesser vorn (rechts) |
| 0x2593 | P2593 | P2593 Turbolader Drehzahlfühler Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2594 | P2594 | P2594 Turbolader Drehzahlfühler Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2595 | P2595 | P2595 Turbolader Drehzahlfühler Schaltkreis (Bank 2) - niedrig |
| 0x2596 | P2596 | P2596 Turbolader Drehzahlfühler Schaltkreis (Bank 2) - hoch |
| 0x2597 | P2597 | P2597 Turbolader Drehzahlfühler Schaltkreis (Bank 2) - sporadisch |
| 0x2598 | P2598 | P2598 Turbocharger Ladedruckregelung Positionssensor (Bank 1) - Leistungsproblem, klemmt niedrig |
| 0x2599 | P2599 | P2599 Turbocharger Ladedruckregelung Positionssensor (Bank 1) - Leistungsproblem, klemmt hoch |
| 0x259A | P259A | P259A Turbocharger Ladedruckregelung Positionssensor (Bank 2) - Leistungsproblem, klemmt niedrig |
| 0x259B | P259B | P259B Turbocharger Ladedruckregelung Positionssensor (Bank 2) - Leistungsproblem, klemmt hoch |
| 0x2600 | P2600 | P2600 Kühlmittelpumpe 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2601 | P2601 | P2601 Kühlmittelpumpe 1 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2602 | P2602 | P2602 Kühlmittelpumpe 1 Steuerkreis - niedrig |
| 0x2603 | P2603 | P2603 Kühlmittelpumpe 1 Steuerkreis - hoch |
| 0x2604 | P2604 | P2604 Ansaugluftvorwärmer Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x2605 | P2605 | P2605 Ansaugluftvorwärmer Schaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2606 | P2606 | P2606 Ansaugluftvorwärmer Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x2607 | P2607 | P2607 Ansaugluftvorwärmer Schaltkreis (Bank 2) - niedrig |
| 0x2608 | P2608 | P2608 Ansaugluftvorwärmer Schaltkreis (Bank 2) - hoch |
| 0x2609 | P2609 | P2609 Ansaugluftvorwärmesystem - Leistungsproblem |
| 0x260A | P260A | P260A Nebenabtrieb Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x260B | P260B | P260B Nebenabtrieb Steuerkreis - niedrig |
| 0x260C | P260C | P260C Nebenabtrieb Steuerkreis - hoch |
| 0x260D | P260D | P260D Nebenantriebs-Einsatz Kontrollleuchte Schaltkreis - Fehlfunktion |
| 0x260E | P260E | P260E Dieselpartikelfilter-Regeneration Kontrollleuchte Schaltkreis - Fehlfunktion |
| 0x260F | P260F | P260F Tankentlüftungssystem Überwachungsprozessor - Leistungsproblem |
| 0x2610 | P2610 | P2610 Motorsteuergerät/Powerstrain Steuergerät Zeitgeber - Leistungsproblem |
| 0x2611 | P2611 | P2611 Klimaanlage Kältemittelverteilerventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2612 | P2612 | P2612 Klimaanlage Kältemittelverteilerventil Steuerkreis - niedrig |
| 0x2613 | P2613 | P2613 Klimaanlage Kältemittelverteilerventil Steuerkreis - hoch |
| 0x2614 | P2614 | P2614 Nockenwellengebersignal Ausgangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2615 | P2615 | P2615 Nockenwellengebersignal Ausgangsschaltkreis - niedrig |
| 0x2616 | P2616 | P2616 Nockenwellengebersignal Ausgangsschaltkreis - hoch |
| 0x2617 | P2617 | P2617 Kurbelwellengebersignal Ausgangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2618 | P2618 | P2618 Kurbelwellengebersignal Ausgangsschaltkreis - niedrig |
| 0x2619 | P2619 | P2619 Kurbelwellengebersignal Ausgangsschaltkreis - hoch |
| 0x261A | P261A | P261A Kühlmittelpumpe 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x261B | P261B | P261B Kühlmittelpumpe 2 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x261C | P261C | P261C Kühlmittelpumpe 2 Steuerkreis - niedrig |
| 0x261D | P261D | P261D Kühlmittelpumpe 2 Steuerkreis - hoch |
| 0x2620 | P2620 | P2620 Drosselklappenstellung Ausgangsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2621 | P2621 | P2621 Drosselklappenstellung Ausgangsschaltkreis - niedrig |
| 0x2622 | P2622 | P2622 Drosselklappenstellung Ausgangsschaltkreis - hoch |
| 0x2623 | P2623 | P2623 Einspritzregelung Druckregler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2624 | P2624 | P2624 Einspritzregelung Druckregler Schaltkreis - niedrig |
| 0x2625 | P2625 | P2625 Einspritzregelung Druckregler Schaltkreis - hoch |
| 0x2626 | P2626 | P2626 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2627 | P2627 | P2627 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, vor Katalysator) - niedrig |
| 0x2628 | P2628 | P2628 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 1, vor Katalysator) - hoch |
| 0x2629 | P2629 | P2629 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2630 | P2630 | P2630 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 2, vor Katalysator) - niedrig |
| 0x2631 | P2631 | P2631 Lambdasonde Pumpstrom-Abgleichleitung Schaltkreis (Bank 2, vor Katalysator) - hoch |
| 0x2632 | P2632 | P2632 Kraftstoffpumpe 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2633 | P2633 | P2633 Kraftstoffpumpe 2 Steuerkreis - niedrig |
| 0x2634 | P2634 | P2634 Kraftstoffpumpe 2 Steuerkreis - hoch |
| 0x2635 | P2635 | P2635 Kraftstoffpumpe 1 - Durchsatz niedrig oder Leistungsproblem |
| 0x2636 | P2636 | P2636 Kraftstoffpumpe 2 - Durchsatz niedrig oder Leistungsproblem |
| 0x2637 | P2637 | P2637 Drehmomentüberwachung Rückkopplungssignal 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2638 | P2638 | P2638 Drehmomentüberwachung Rückkopplungssignal 1 - Messbereichs- oder Leistungsproblem |
| 0x2639 | P2639 | P2639 Drehmomentüberwachung Rückkopplungssignal 1 - niedrig |
| 0x2640 | P2640 | P2640 Drehmomentüberwachung Rückkopplungssignal 1 - hoch |
| 0x2641 | P2641 | P2641 Drehmomentüberwachung Rückkopplungssignal 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2642 | P2642 | P2642 Drehmomentüberwachung Rückkopplungssignal 2 - Messbereichs- oder Leistungsproblem |
| 0x2643 | P2643 | P2643 Drehmomentüberwachung Rückkopplungssignal 2 - niedrig |
| 0x2644 | P2644 | P2644 Drehmomentüberwachung Rückkopplungssignal 2 - niedrig |
| 0x2645 | P2645 | P2645 Ventilkipphebel Einlass Versteller/Aktuator Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2646 | P2646 | P2646 Ventilkipphebel Einlass Versteller/Aktuator (Bank 1) - Leistungsproblem oder klemmt offen |
| 0x2647 | P2647 | P2647 Ventilkipphebel Einlass Versteller/Aktuator (Bank 1) - klemmt geschlossen |
| 0x2648 | P2648 | P2648 Ventilkipphebel Einlass Versteller/Aktuator Steuerkreis (Bank 1) - niedrig |
| 0x2649 | P2649 | P2649 Ventilkipphebel Einlass Versteller/Aktuator Steuerkreis (Bank 1) - hoch |
| 0x264A | P264A | P264A Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - Fehlfunktion |
| 0x264B | P264B | P264B Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x264C | P264C | P264C Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - niedrig |
| 0x264D | P264D | P264D Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - hoch |
| 0x264E | P264E | P264E Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x2650 | P2650 | P2650 Ventilkipphebel Auslass Versteller/Aktuator Steuerkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2651 | P2651 | P2651 Ventilkipphebel Auslass Versteller/Aktuator (Bank 1) - Leistungsproblem oder klemmt offen |
| 0x2652 | P2652 | P2652 Ventilkipphebel Auslass Versteller/Aktuator (Bank 1) - klemmt geschlossen |
| 0x2653 | P2653 | P2653 Ventilkipphebel Auslass Versteller/Aktuator Steuerkreis (Bank 1) - niedrig |
| 0x2654 | P2654 | P2654 Ventilkipphebel Auslass Versteller/Aktuator Steuerkreis (Bank 1) - hoch |
| 0x2655 | P2655 | P2655 Ventilkipphebel Einlass Versteller/Aktuator Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2656 | P2656 | P2656 Ventilkipphebel Einlass Versteller/Aktuator (Bank 2) - Leistungsproblem oder klemmt offen |
| 0x2657 | P2657 | P2657 Ventilkipphebel Einlass Versteller/Aktuator (Bank 2) - klemmt geschlossen |
| 0x2658 | P2658 | P2658 Ventilkipphebel Einlass Versteller/Aktuator Steuerkreis (Bank 2) - niedrig |
| 0x2659 | P2659 | P2659 Ventilkipphebel Einlass Versteller/Aktuator Steuerkreis (Bank 2) - hoch |
| 0x265A | P265A | P265A Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - Fehlfunktion |
| 0x265B | P265B | P265B Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - Messbereichs- oder Leistungsproblem |
| 0x265C | P265C | P265C Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - niedrig |
| 0x265D | P265D | P265D Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - hoch |
| 0x265E | P265E | P265E Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 1) - sporadisch/unregelmäßig |
| 0x2660 | P2660 | P2660 Ventilkipphebel Auslass Versteller/Aktuator Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2661 | P2661 | P2661 Ventilkipphebel Auslass Versteller/Aktuator (Bank 2) - Leistungsproblem oder klemmt offen |
| 0x2662 | P2662 | P2662 Ventilkipphebel Auslass Versteller/Aktuator (Bank 2) - klemmt geschlossen |
| 0x2663 | P2663 | P2663 Ventilkipphebel Auslass Versteller/Aktuator Steuerkreis (Bank 2) - niedrig |
| 0x2664 | P2664 | P2664 Ventilkipphebel Auslass Versteller/Aktuator Steuerkreis (Bank 2) - hoch |
| 0x2665 | P2665 | P2665 Kraftstoffabsperrventil Steuerkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2666 | P2666 | P2666 Kraftstoffabsperrventil Steuerkreis (Bank 2) - niedrig |
| 0x2667 | P2667 | P2667 Kraftstoffabsperrventil Steuerkreis (Bank 2) - hoch |
| 0x2668 | P2668 | P2668 Kraftstoffbetriebsart Kontrolllampe Schaltkreis - Fehlfunktion |
| 0x2669 | P2669 | P2669 Aktuator Versorgungsspannung 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x266A | P266A | P266A Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - Fehlfunktion |
| 0x266B | P266B | P266B Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x266C | P266C | P266C Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - niedrig |
| 0x266D | P266D | P266D Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - hoch |
| 0x266E | P266E | P266E Ventilkipphebel Einlass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x2670 | P2670 | P2670 Aktuator Versorgungsspannung 2 Schaltkreis - niedrig |
| 0x2671 | P2671 | P2671 Aktuator Versorgungsspannung 2 Schaltkreis - hoch |
| 0x2672 | P2672 | P2672 Einspritzpumpe - Einspritzzeitpunkt Offset |
| 0x2673 | P2673 | P2673 Einspritzpumpe - Kalibrierung Einspritzzeit nicht gelernt |
| 0x2674 | P2674 | P2674 Einspritzpumpe - Kalibrierung Kraftstoff nicht gelernt |
| 0x2675 | P2675 | P2675 Luftfilter Einlass Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2676 | P2676 | P2676 Luftfilter Einlass Steuerkreis - niedrig |
| 0x2677 | P2677 | P2677 Luftfilter Einlass Steuerkreis - hoch |
| 0x2678 | P2678 | P2678 Kühlmittel Entgasungsventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2679 | P2679 | P2679 Kühlmittel Entgasungsventil Steuerkreis - niedrig |
| 0x267A | P267A | P267A Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - Fehlfunktion |
| 0x267B | P267B | P267B Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - Messbereichs- oder Leistungsproblem |
| 0x267C | P267C | P267C Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - niedrig |
| 0x267D | P267D | P267D Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - hoch |
| 0x267E | P267E | P267E Ventilkipphebel Auslass Versteller/Aktuator Positionssensor Schaltkreis (Bank 2) - sporadisch/unregelmäßig |
| 0x2680 | P2680 | P2680 Kühlmittel Entgasungsventil Steuerkreis - hoch |
| 0x2681 | P2681 | P2681 Motorkühlmittel Bypassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2682 | P2682 | P2682 Motorkühlmittel Bypassventil Steuerkreis - niedrig |
| 0x2683 | P2683 | P2683 Motorkühlmittel Bypassventil Steuerkreis - hoch |
| 0x2684 | P2684 | P2684 Aktuator Versorgungsspannung 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2685 | P2685 | P2685 Aktuator Versorgungsspannung 3 Schaltkreis - niedrig |
| 0x2686 | P2686 | P2686 Aktuator Versorgungsspannung 3 Schaltkreis - hoch |
| 0x2687 | P2687 | P2687 Kraftstoffversorgung Heizungssteuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2688 | P2688 | P2688 Kraftstoffversorgung Heizungssteuerkreis - niedrig |
| 0x2689 | P2689 | P2689 Kraftstoffversorgung Heizungssteuerkreis - hoch |
| 0x268A | P268A | P268A Einspritzventil - Kalibrierung nicht gelernt/programmiert |
| 0x268B | P268B | P268B Hochdruck-Kraftstoffpumpe - Kalibrierung nicht gelernt/programmiert |
| 0x268C | P268C | P268C Einspritzventil Zylinder 1 - Daten inkompatibel |
| 0x268D | P268D | P268D Einspritzventil Zylinder 2 - Daten inkompatibel |
| 0x268E | P268E | P268E Einspritzventil Zylinder 3 - Daten inkompatibel |
| 0x268F | P268F | P268F Einspritzventil Zylinder 4 - Daten inkompatibel |
| 0x2690 | P2690 | P2690 Einspritzventil Zylinder 5 - Daten inkompatibel |
| 0x2691 | P2691 | P2691 Einspritzventil Zylinder 6 - Daten inkompatibel |
| 0x2692 | P2692 | P2692 Einspritzventil Zylinder 7 - Daten inkompatibel |
| 0x2693 | P2693 | P2693 Einspritzventil Zylinder 8 - Daten inkompatibel |
| 0x2694 | P2694 | P2694 Einspritzventil Zylinder 9 - Daten inkompatibel |
| 0x2695 | P2695 | P2695 Einspritzventil Zylinder 10 - Daten inkompatibel |
| 0x2696 | P2696 | P2696 Einspritzventil - Daten inkompatibel |
| 0x2697 | P2697 | P2697 Abgasnachbehandlung Einspritzventil Schaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2698 | P2698 | P2698 Abgasnachbehandlung Einspritzventil Schaltkreis (Bank 1) - Leistungsproblem |
| 0x2699 | P2699 | P2699 Abgasnachbehandlung Einspritzventil Schaltkreis (Bank 1) - niedrig |
| 0x269A | P269A | P269A Abgasnachbehandlung Einspritzventil Schaltkreis (Bank 1) - hoch |
| 0x269B | P269B | P269B Abgasnachbehandlung Glühkerze Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x269C | P269C | P269C Abgasnachbehandlung Glühkerze Steuerkreis - Leistungsproblem |
| 0x269D | P269D | P269D Abgasnachbehandlung Glühkerze Steuerkreis - niedrig |
| 0x269E | P269E | P269E Abgasnachbehandlung Glühkerze Steuerkreis - hoch |
| 0x269F | P269F | P269F Abgasnachbehandlung Glühkerze Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x26A0 | P26A0 | P26A0 Abgasnachbehandlung Glühkerze Schaltkreis - Leistungsproblem |
| 0x26A1 | P26A1 | P26A1 Abgasnachbehandlung Glühkerze Schaltkreis - niedrig |
| 0x26A2 | P26A2 | P26A2 Abgasnachbehandlung Glühkerze Schaltkreis - hoch |
| 0x2700 | P2700 | P2700 Getriebe-Reibelement 1 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x2701 | P2701 | P2701 Getriebe-Reibelement 2 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x2702 | P2702 | P2702 Getriebe-Reibelement 3 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x2703 | P2703 | P2703 Getriebe-Reibelement 4 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x2704 | P2704 | P2704 Getriebe-Reibelement 5 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x2705 | P2705 | P2705 Getriebe-Reibelement 6 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x2706 | P2706 | P2706 Magnetventil 6 - Fehlfunktion |
| 0x2707 | P2707 | P2707 Magnetventil 6 - Leistungsproblem oder klemmt offen |
| 0x2708 | P2708 | P2708 Magnetventil 6 - klemmt geschlossen |
| 0x2709 | P2709 | P2709 Magnetventil 6 - elektrischer Fehler |
| 0x2710 | P2710 | P2710 Magnetventil 6 - sporadisch |
| 0x2711 | P2711 | P2711 Unerwartetes mechanisches Auskuppeln |
| 0x2712 | P2712 | P2712 Hydraulikaggregat - Leck |
| 0x2713 | P2713 | P2713 Elektrischer Drucksteller 4 - Fehlfunktion |
| 0x2714 | P2714 | P2714 Elektrischer Drucksteller 4 - Leistungsproblem oder klemmt offen |
| 0x2715 | P2715 | P2715 Elektrischer Drucksteller 4 - klemmt geschlossen |
| 0x2716 | P2716 | P2716 Elektrischer Drucksteller 4 - elektrischer Fehler |
| 0x2717 | P2717 | P2717 Elektrischer Drucksteller 4 - sporadisch |
| 0x2718 | P2718 | P2718 Elektrischer Drucksteller 4 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2719 | P2719 | P2719 Elektrischer Drucksteller 4 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2720 | P2720 | P2720 Elektrischer Drucksteller 4 Steuerkreis - niedrig |
| 0x2721 | P2721 | P2721 Elektrischer Drucksteller 4 Steuerkreis - hoch |
| 0x2722 | P2722 | P2722 Elektrischer Drucksteller 5 - Fehlfunktion |
| 0x2723 | P2723 | P2723 Elektrischer Drucksteller 5 - Leistungsproblem oder klemmt offen |
| 0x2724 | P2724 | P2724 Elektrischer Drucksteller 5 - klemmt geschlossen |
| 0x2725 | P2725 | P2725 Elektrischer Drucksteller 5 - elektrischer Fehler  |
| 0x2726 | P2726 | P2726 Elektrischer Drucksteller 5 - sporadisch |
| 0x2727 | P2727 | P2727 Elektrischer Drucksteller 5 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2728 | P2728 | P2728 Elektrischer Drucksteller 5 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2729 | P2729 | P2729 Elektrischer Drucksteller 5 Steuerkreis - niedrig |
| 0x2730 | P2730 | P2730 Elektrischer Drucksteller 5 Steuerkreis - hoch |
| 0x2731 | P2731 | P2731 Elektrischer Drucksteller 6 - Fehlfunktion |
| 0x2732 | P2732 | P2732 Elektrischer Drucksteller 6 - Leistungsproblem oder klemmt offen |
| 0x2733 | P2733 | P2733 Elektrischer Drucksteller 6 - klemmt geschlossen |
| 0x2734 | P2734 | P2734 Elektrischer Drucksteller 6 - elektrischer Fehler |
| 0x2735 | P2735 | P2735 Elektrischer Drucksteller 6 - sporadisch |
| 0x2736 | P2736 | P2736 Elektrischer Drucksteller 6 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2737 | P2737 | P2737 Elektrischer Drucksteller 6 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2738 | P2738 | P2738 Elektrischer Drucksteller 6 Steuerkreis - niedrig |
| 0x2739 | P2739 | P2739 Elektrischer Drucksteller 6 Steuerkreis - hoch |
| 0x273A | P273A | P273A Getriebe-Reibelement 7 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x273B | P273B | P273B Getriebe-Reibelement 8 Ansprechzeit - Messbereichs- oder Leistungsproblem |
| 0x2740 | P2740 | P2740 Getriebeöltemperaturfühler 2 Schaltkreis - Fehlfunktion |
| 0x2741 | P2741 | P2741 Getriebeöltemperaturfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2742 | P2742 | P2742 Getriebeöltemperaturfühler 2 Schaltkreis - niedrig |
| 0x2743 | P2743 | P2743 Getriebeöltemperaturfühler 2 Schaltkreis - hoch |
| 0x2744 | P2744 | P2744 Getriebeöltemperaturfühler 2 Schaltkreis - sporadisch |
| 0x2745 | P2745 | P2745 Zwischenwelle Drehzahlfühler 2 Schaltkreis - Fehlfunktion |
| 0x2746 | P2746 | P2746 Zwischenwelle Drehzahlfühler 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2747 | P2747 | P2747 Zwischenwelle Drehzahlfühler 2 Schaltkreis - kein Signal |
| 0x2748 | P2748 | P2748 Zwischenwelle Drehzahlfühler 2 Schaltkreis - sporadisch |
| 0x2749 | P2749 | P2749 Zwischenwelle Drehzahlfühler 3 Schaltkreis - Fehlfunktion |
| 0x2750 | P2750 | P2750 Zwischenwelle Drehzahlfühler 3 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2751 | P2751 | P2751 Zwischenwelle Drehzahlfühler 3 Schaltkreis - kein Signal |
| 0x2752 | P2752 | P2752 Zwischenwelle Drehzahlfühler 3 Schaltkreis - sporadisch |
| 0x2753 | P2753 | P2753 Getriebeölkühler Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2754 | P2754 | P2754 Getriebeölkühler Schaltkreis - niedrig |
| 0x2755 | P2755 | P2755 Getriebeölkühler Schaltkreis - hoch |
| 0x2756 | P2756 | P2756 Wandlerüberbrückungskupplung elektrischer Drucksteller - Fehlfunktion |
| 0x2757 | P2757 | P2757 Wandlerüberbrückungskupplung elektrischer Drucksteller - Leistungsproblem oder klemmt offen |
| 0x2758 | P2758 | P2758 Wandlerüberbrückungskupplung elektrischer Drucksteller - klemmt geschlossen |
| 0x2759 | P2759 | P2759 Wandlerüberbrückungskupplung elektrischer Drucksteller Steuerkreis - elektrischer Fehler |
| 0x2760 | P2760 | P2760 Wandlerüberbrückungskupplung elektrischer Drucksteller Steuerkreis - sporadisch |
| 0x2761 | P2761 | P2761 Wandlerüberbrückungskupplung elektrischer Drucksteller Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2762 | P2762 | P2762 Wandlerüberbrückungskupplung elektrischer Drucksteller Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2763 | P2763 | P2763 Wandlerüberbrückungskupplung elektrischer Drucksteller Steuerkreis - hoch |
| 0x2764 | P2764 | P2764 Wandlerüberbrückungskupplung elektrischer Drucksteller Steuerkreis - niedrig |
| 0x2765 | P2765 | P2765 Eingangsdrehzahlfühler 2 Turbine Schaltkreis - Fehlfunktion |
| 0x2766 | P2766 | P2766 Eingangsdrehzahlfühler 2 Turbine Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2767 | P2767 | P2767 Eingangsdrehzahlfühler 2 Turbine Schaltkreis - kein Signal |
| 0x2768 | P2768 | P2768 Eingangsdrehzahlfühler 2 Turbine Schaltkreis - sporadisch |
| 0x2769 | P2769 | P2769 Wandlerüberbrückungskupplung Schaltkreis - niedrig |
| 0x2770 | P2770 | P2770 Wandlerüberbrückungskupplung Schaltkreis - hoch |
| 0x2771 | P2771 | P2771 Allradschalter 'Low'-Bereich Schaltkreis - Fehlfunktion |
| 0x2772 | P2772 | P2772 Allradschalter 'Low'-Bereich Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2773 | P2773 | P2773 Allradschalter 'Low'-Bereich Schaltkreis - niedrig |
| 0x2774 | P2774 | P2774 Allradschalter 'Low'-Bereich Schaltkreis - hoch |
| 0x2775 | P2775 | P2775 Hochschaltungs-Schalter Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2776 | P2776 | P2776 Hochschaltungs-Schalter Schaltkreis - niedrig |
| 0x2777 | P2777 | P2777 Hochschaltungs-Schalter Schaltkreis - hoch |
| 0x2778 | P2778 | P2778 Hochschaltungs-Schalter Schaltkreis - sporadisch/unregelmäßig |
| 0x2779 | P2779 | P2779 Zurückschaltungs-Schalter Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2780 | P2780 | P2780 Zurückschaltungs-Schalter Schaltkreis - niedrig |
| 0x2781 | P2781 | P2781 Zurückschaltungs-Schalter Schaltkreis - hoch |
| 0x2782 | P2782 | P2782 Zurückschaltungs-Schalter Schaltkreis - sporadisch/unregelmäßig |
| 0x2783 | P2783 | P2783 Wandler - Temperatur zu hoch |
| 0x2784 | P2784 | P2784 Eingangsdrehzahlfühler 1/2 Turbine - Korrelationsfehler |
| 0x2785 | P2785 | P2785 Kupplungssteller - Temperatur zu hoch |
| 0x2786 | P2786 | P2786 Schaltaktuator - Temperatur zu hoch |
| 0x2787 | P2787 | P2787 Kupplung - Temperatur zu hoch |
| 0x2788 | P2788 | P2788 Automatikgetriebe Manuelle Gasse - adaptives Lernen am Limit |
| 0x2789 | P2789 | P2789 Kupplung 1 - adaptives Lernen am Limit |
| 0x278A | P278A | P278A Kickdown-Schalter Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x278B | P278B | P278B Kickdown-Schalter Schaltkreis - Messbereichs- oder Leitungsunterbrechung |
| 0x278C | P278C | P278C Kickdown-Schalter Schaltkreis - niedrig |
| 0x278D | P278D | P278D Kickdown-Schalter Schaltkreis - hoch |
| 0x278E | P278E | P278E Kickdown-Schalter Schaltkreis - sporadisch/unregelmäßig |
| 0x278F | P278F | P278F Kupplung 2 - adaptives Lernen am Limit |
| 0x2790 | P2790 | P2790 Schaltgasse Richtungssensor Schaltkreis - Fehlfunktion |
| 0x2791 | P2791 | P2791 Schaltgasse Richtungssensor Schaltkreis - niedrig |
| 0x2792 | P2792 | P2792 Schaltgasse Richtungssensor Schaltkreis - hoch |
| 0x2793 | P2793 | P2793 Schaltweg Richtungssensor Schaltkreis - Fehlfunktion |
| 0x2794 | P2794 | P2794 Schaltweg Richtungssensor Schaltkreis - niedrig |
| 0x2795 | P2795 | P2795 Schaltweg Richtungssensor Schaltkreis - hoch |
| 0x2796 | P2796 | P2796 Getriebeöl-Zusatzpumpe Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2797 | P2797 | P2797 Getriebeöl-Zusatzpumpe Schaltkreis - Leistungsproblem |
| 0x2798 | P2798 | P2798 Getriebeöl-Zusatzpumpe Schaltkreis - niedrig |
| 0x2799 | P2799 | P2799 Getriebeöl-Zusatzpumpe Schaltkreis - hoch |
| 0x279A | P279A | P279A Verteilergetriebe Gang 'hoch' - falsches Übersetzungsverhältnis |
| 0x279B | P279B | P279B Verteilergetriebe Gang 'niedrig' - falsches Übersetzungsverhältnis |
| 0x279C | P279C | P279C Verteilergetriebe Gang 'Nullstellung' - falsches Übersetzungsverhältnis |
| 0x279D | P279D | P279D Allradantrieb Positionssignal Schaltkreis - Fehlfunktion |
| 0x279E | P279E | P279E Allradantrieb Positionssignal Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x279F | P279F | P279F Allradantrieb Positionssignal Schaltkreis - niedrig |
| 0x27A0 | P27A0 | P27A0 Allradantrieb Positionssignal Schaltkreis - hoch |
| 0x2800 | P2800 | P2800 Getriebepositionssensor 2 (PRNDL) Schaltkreis - Fehlfunktion |
| 0x2801 | P2801 | P2801 Getriebepositionssensor 2 Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2802 | P2802 | P2802 Getriebepositionssensor 2 Schaltkreis - niedrig |
| 0x2803 | P2803 | P2803 Getriebepositionssensor 2 Schaltkreis - hoch |
| 0x2804 | P2804 | P2804 Getriebepositionssensor 2 Schaltkreis - sporadisch |
| 0x2805 | P2805 | P2805 Getriebepositionssensor 1/2 - Korrelationsfehler |
| 0x2806 | P2806 | P2806 Getriebepositionssensor - mechanisch nicht ausgerichtet |
| 0x2807 | P2807 | P2807 Elektrischer Drucksteller 7 - Fehlfunktion |
| 0x2808 | P2808 | P2808 Elektrischer Drucksteller 7 - Leistungsproblem oder klemmt offen |
| 0x2809 | P2809 | P2809 Elektrischer Drucksteller 7 - klemmt geschlossen |
| 0x280A | P280A | P280A Getriebepositionssensor 1 Schaltkreis - nicht gelernt |
| 0x280B | P280B | P280B Getriebepositionssensor 2 Schaltkreis - nicht gelernt |
| 0x2810 | P2810 | P2810 Elektrischer Drucksteller 7 - elektrischer Fehler |
| 0x2811 | P2811 | P2811 Elektrischer Drucksteller 7 - sporadisch |
| 0x2812 | P2812 | P2812 Elektrischer Drucksteller 7 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2813 | P2813 | P2813 Elektrischer Drucksteller 7 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2814 | P2814 | P2814 Elektrischer Drucksteller 7 Steuerkreis - niedrig |
| 0x2815 | P2815 | P2815 Elektrischer Drucksteller 7 Steuerkreis - hoch |
| 0x2816 | P2816 | P2816 Elektrischer Drucksteller 8 - Fehlfunktion |
| 0x2817 | P2817 | P2817 Elektrischer Drucksteller 8 - Leistungsproblem oder klemmt offen |
| 0x2818 | P2818 | P2818 Elektrischer Drucksteller 8 - klemmt geschlossen |
| 0x2819 | P2819 | P2819 Elektrischer Drucksteller 8 - elektrischer Fehler |
| 0x281A | P281A | P281A Elektrischer Drucksteller 8 - sporadisch |
| 0x281B | P281B | P281B Elektrischer Drucksteller 8 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x281C | P281C | P281C Elektrischer Drucksteller 8 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x281D | P281D | P281D Elektrischer Drucksteller 8 Steuerkreis - niedrig |
| 0x281E | P281E | P281E Elektrischer Drucksteller 8 Steuerkreis - hoch |
| 0x281F | P281F | P281F Elektrischer Drucksteller 9 - Fehlfunktion |
| 0x2820 | P2820 | P2820 Elektrischer Drucksteller 9 - Leistungsproblem oder klemmt offen |
| 0x2821 | P2821 | P2821 Elektrischer Drucksteller 9 - klemmt geschlossen |
| 0x2822 | P2822 | P2822 Elektrischer Drucksteller 9 - elektrischer Fehler |
| 0x2823 | P2823 | P2823 Elektrischer Drucksteller 9 - sporadisch |
| 0x2824 | P2824 | P2824 Elektrischer Drucksteller 9 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2825 | P2825 | P2825 Elektrischer Drucksteller 9 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x2826 | P2826 | P2826 Elektrischer Drucksteller 9 Steuerkreis - niedrig |
| 0x2827 | P2827 | P2827 Elektrischer Drucksteller 9 Steuerkreis - hoch |
| 0x2828 | P2828 | P2828 Elektrischer Drucksteller 10 - Fehlfunktion |
| 0x2829 | P2829 | P2829 Elektrischer Drucksteller 10 - Leistungsproblem oder klemmt offen |
| 0x282A | P282A | P282A Elektrischer Drucksteller 10 - klemmt geschlossen |
| 0x282B | P282B | P282B Elektrischer Drucksteller 10 - elektrischer Fehler |
| 0x282C | P282C | P282C Elektrischer Drucksteller 10 - sporadisch |
| 0x282D | P282D | P282D Elektrischer Drucksteller 10 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x282E | P282E | P282E Elektrischer Drucksteller 10 Steuerkreis - Messbereichs- oder Leistungsproblem |
| 0x282F | P282F | P282F Elektrischer Drucksteller 10 Steuerkreis - niedrig |
| 0x2830 | P2830 | P2830 Elektrischer Drucksteller 10 Steuerkreis - hoch |
| 0x2831 | P2831 | P2831 Schaltgabel 1 Position Schaltkreis - Fehlfunktion |
| 0x2832 | P2832 | P2832 Schaltgabel 1 Position Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2833 | P2833 | P2833 Schaltgabel 1 Position Schaltkreis - niedrig |
| 0x2834 | P2834 | P2834 Schaltgabel 1 Position Schaltkreis - hoch |
| 0x2835 | P2835 | P2835 Schaltgabel 1 Position Schaltkreis - sporadisch |
| 0x2836 | P2836 | P2836 Schaltgabel 2 Position Schaltkreis - Fehlfunktion |
| 0x2837 | P2837 | P2837 Schaltgabel 2 Position Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2838 | P2838 | P2838 Schaltgabel 2 Position Schaltkreis - niedrig |
| 0x2839 | P2839 | P2839 Schaltgabel 2 Position Schaltkreis - hoch |
| 0x283A | P283A | P283A Schaltgabel 2 Position Schaltkreis - sporadisch |
| 0x283B | P283B | P283B Schaltgabel 3 Position Schaltkreis - Fehlfunktion |
| 0x283C | P283C | P283C Schaltgabel 3 Position Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x283D | P283D | P283D Schaltgabel 3 Position Schaltkreis - niedrig |
| 0x283E | P283E | P283E Schaltgabel 3 Position Schaltkreis - hoch |
| 0x283F | P283F | P283F Schaltgabel 3 Position Schaltkreis - sporadisch |
| 0x2840 | P2840 | P2840 Schaltgabel 4 Position Schaltkreis - Fehlfunktion |
| 0x2841 | P2841 | P2841 Schaltgabel 4 Position Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x2842 | P2842 | P2842 Schaltgabel 4 Position Schaltkreis - niedrig |
| 0x2843 | P2843 | P2843 Schaltgabel 4 Position Schaltkreis - hoch |
| 0x2844 | P2844 | P2844 Schaltgabel 4 Position Schaltkreis - sporadisch |
| 0x2845 | P2845 | P2845 Schaltgabel 1 Positionssensor - falsche Nullstellung angezeigt |
| 0x2846 | P2846 | P2846 Schaltgabel 2 Positionssensor - falsche Nullstellung angezeigt |
| 0x2847 | P2847 | P2847 Schaltgabel 3 Positionssensor - falsche Nullstellung angezeigt |
| 0x2848 | P2848 | P2848 Schaltgabel 4 Positionssensor - falsche Nullstellung angezeigt |
| 0x2849 | P2849 | P2849 Schaltgabel 1 - klemmt |
| 0x284A | P284A | P284A Schaltgabel 2 - klemmt |
| 0x284B | P284B | P284B Schaltgabel 3 - klemmt |
| 0x284C | P284C | P284C Schaltgabel 4 - klemmt |
| 0x284D | P284D | P284D Schaltgabel 1 - unaufgeforderte Bewegung |
| 0x284E | P284E | P284E Schaltgabel 2 - unaufgeforderte Bewegung |
| 0x284F | P284F | P284F Schaltgabel 3 - unaufgeforderte Bewegung |
| 0x2850 | P2850 | P2850 Schaltgabel 4 - unaufgeforderte Bewegung |
| 0x2851 | P2851 | P2851 Schaltgabel Positionssensor 1 / 2 - Korrelationsfehler |
| 0x2852 | P2852 | P2852 Schaltgabel Positionssensor 3 / 4 - Korrelationsfehler |
| 0x2853 | P2853 | P2853 Kupplung 1 Druckentleerung - Leistungsproblem |
| 0x2854 | P2854 | P2854 Kupplung 2 Druckentleerung - Leistungsproblem |
| 0x2855 | P2855 | P2855 Kupplung 1 Druckaufbau - Leistungsproblem |
| 0x2856 | P2856 | P2856 Kupplung 2 Druckaufbau - Leistungsproblem |
| 0x2857 | P2857 | P2857 Kupplung 1 kraftschlüssig schließend - Leistungsproblem |
| 0x2858 | P2858 | P2858 Kupplung 2 kraftschlüssig schließend - Leistungsproblem |
| 0x2859 | P2859 | P2859 Kupplung 1 kraftschlüssig öffnend - Leistungsproblem |
| 0x285A | P285A | P285A Kupplung 2 kraftschlüssig öffnend - Leistungsproblem |
| 0x2A00 | P2A00 | P2A00 Lambdasonde Schaltkreis (Bank 1, vor Katalysator) - Messbereichs- oder Leistungsproblem |
| 0x2A01 | P2A01 | P2A01 Lambdasonde Schaltkreis (Bank 1, nach Katalysator) - Messbereichs- oder Leistungsproblem |
| 0x2A02 | P2A02 | P2A02 Lambdasonde Schaltkreis (Bank 1, Sensor 3) - Messbereichs- oder Leistungsproblem |
| 0x2A03 | P2A03 | P2A03 Lambdasonde Schaltkreis (Bank 2, vor Katalysator) - Messbereichs- oder Leistungsproblem |
| 0x2A04 | P2A04 | P2A04 Lambdasonde Schaltkreis (Bank 2, nach Katalysator) - Messbereichs- oder Leistungsproblem |
| 0x2A05 | P2A05 | P2A05 Lambdasonde Schaltkreis (Bank 2, Sensor 3) - Messbereichs- oder Leistungsproblem |
| 0x2A06 | P2A06 | P2A06 Lambdasonde (Bank 1, vor Katalysator) - negative Spannung |
| 0x2A07 | P2A07 | P2A07 Lambdasonde (Bank 1, nach Katalysator) - negative Spannung |
| 0x2A08 | P2A08 | P2A08 Lambdasonde (Bank 1, Sonde 3) - negative Spannung |
| 0x2A09 | P2A09 | P2A09 Lambdasonde (Bank 2 vor Katalysator) - negative Spannung |
| 0x2A10 | P2A10 | P2A10 Lambdasonde (Bank 2, nach Katalysator) - negative Spannung |
| 0x2A11 | P2A11 | P2A11 Lambdasonde (Bank 2, Sonde 3) - negative Spannung |
| 0x2BA7 | P2BA7 | P2BA7 NOx Überschreitung - Reduktionsmitteltank leer |
| 0x2BA8 | P2BA8 | P2BA8 NOx Überschreitung - Reduktionsmittel Dosierung inaktiv |
| 0x2BA9 | P2BA9 | P2BA9 NOx Überschreitung - Schlechte Reduktionsmittelqualität erkannt |
| 0x2BAA | P2BAA | P2BAA NOx Überschreitung - Reduktionsmittelverbrauch zu niedrig |
| 0x2BAB | P2BAB | P2BAB NOx Überschreitung - fehlerhafter Abgasrückführungsdurchsatz |
| 0x2BAC | P2BAC | P2BAC NOx Überschreitung - Abschaltung der Abgasrückführung |
| 0x2BAD | P2BAD | P2BAD NOx Überschreitung - Grundursache unbekannt |
| 0x2BAE | P2BAE | P2BAE NOx Überschreitung - NOx-Regelung Überwachungssystem |
| 0x3000 | P3000 | P3000 Kraftstoffeinspritzleiste Drucksensor - Offset Maximum überschritten |
| 0x3001 | P3001 | P3001 Kraftstoffeinspritzleiste Drucksensor - Offset Minimum unterschritten |
| 0x3002 | P3002 | P3002 Kraftstoffeinspritzdruck mengengeregelt - Druck zu niedrig |
| 0x3003 | P3003 | P3003 Kraftstoffeinspritzdruck mengengeregelt - Druck zu hoch |
| 0x3004 | P3004 | P3004 Kraftstoffeinspritzdruck mengengeregelt - Maximaldruck überschritten |
| 0x3005 | P3005 | P3005 Kraftstoffeinspritzdruck druckgeregelt - Druck zu niedrig |
| 0x3006 | P3006 | P3006 Kraftstoffeinspritzdruck druckgeregelt - Druck zu hoch |
| 0x3007 | P3007 | P3007 Kraftstoffeinspritzdruck druckgeregelt - Maximaldruck überschritten |
| 0x3008 | P3008 | P3008 Lambdasonde Schaltkreis (Bank 1, vor Katalysator) - niedrig nach Kaltstart |
| 0x3009 | P3009 | P3009 Lambdasonde Schaltkreis (Bank 2, vor Katalysator) - niedrig nach Kaltstart |
| 0x300A | P300A | P300A Gesteuerte Luftführung Schaltkreis - hoch |
| 0x300B | P300B | P300B Gesteuerte Luftführung Schaltkreis - niedrig |
| 0x300C | P300C | P300C Gesteuerte Luftführung Schaltkreis - Leitungsunterbrechung |
| 0x300D | P300D | P300D Gesteuerte Luftführung unten Schaltkreis - hoch |
| 0x300E | P300E | P300E Gesteuerte Luftführung unten Schaltkreis - niedrig |
| 0x300F | P300F | P300F Gesteuerte Luftführung unten Schaltkreis - Leitungsunterbrechung |
| 0x3010 | P3010 | P3010 Lambdasonde Schaltkreis (Bank 1, nach Katalysator) - niedrig nach Kaltstart |
| 0x3011 | P3011 | P3011 Lambdasonde Schaltkreis (Bank 2, nach Katalysator) - niedrig nach Kaltstart |
| 0x3012 | P3012 | P3012 Lambdasonde Signalschaltkreis (Bank 1, vor Katalysator) - Adaptionswert zu hoch |
| 0x3013 | P3013 | P3013 Lambdasonde Signalschaltkreis (Bank 2, vor Katalysator) - Adaptionswert zu hoch |
| 0x3014 | P3014 | P3014 Lambdasonde (Bank 1, vor Katalysator) - WRAF-IC-Versorgungsspannung zu niedrig |
| 0x3015 | P3015 | P3015 Lambdasonde (Bank 2, vor Katalysator) - WRAF-IC-Versorgungsspannung zu niedrig |
| 0x3016 | P3016 | P3016 Lambdasonde Kalibrierwiderstand am WRAF-IC (Bank 1, vor Katalysator) - Plausibilitätsfehler |
| 0x3017 | P3017 | P3017 Lambdasonde Kalibrierwiderstand am WRAF-IC (Bank 2, vor Katalysator) - Plausibilitätsfehler |
| 0x3018 | P3018 | P3018 Lambdasonde (Bank 1, vor Katalysator) - Lambdareglerwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x3019 | P3019 | P3019 Lambdasonde (Bank 2, vor Katalysator) - Lambdareglerwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x301A | P301A | P301A Einspritzventil 1 - klemmt offen |
| 0x301B | P301B | P301B Einspritzventil 2 - klemmt offen |
| 0x301C | P301C | P301C Einspritzventil 3 - klemmt offen |
| 0x301D | P301D | P301D Einspritzventil 4 - klemmt offen |
| 0x301E | P301E | P301E Einspritzventil 1 oder 3 - klemmt offen |
| 0x301F | P301F | P301F Einspritzventil 2 oder 4 - klemmt offen |
| 0x3020 | P3020 | P3020 Lambdasonde (Bank 1, vor Katalysator) - Signalspannung bei Schubabschaltung zu klein infolge offener Pumpstromleitung |
| 0x3021 | P3021 | P3021 Lambdasonde (Bank 2, vor Katalysator) - Signalspannung bei Schubabschaltung zu klein infolge offener Pumpstromleitung |
| 0x3022 | P3022 | P3022 Lambdasonde (Bank 1, vor Katalysator) - SPI-Kommunikation zum WRAF-IC gestört |
| 0x3023 | P3023 | P3023 Lambdasonde (Bank 2, vor Katalysator) - SPI-Kommunikation zum WRAF-IC gestört |
| 0x3024 | P3024 | P3024 Lambdasonde (Bank 1, vor Katalysator) - Initialisierungsfehler WRAF-IC |
| 0x3025 | P3025 | P3025 Lambdasonde (Bank 2, vor Katalysator) - Initialisierungsfehler WRAF-IC |
| 0x3026 | P3026 | P3026 Lambdasonde (Bank 1, vor Katalysator) - Betriebstemperatur nicht erreicht |
| 0x3027 | P3027 | P3027 Lambdasonde (Bank 2, vor Katalysator) - Betriebstemperatur nicht erreicht |
| 0x3028 | P3028 | P3028 Lambdasonde Heizungsansteuerung (Bank 1, vor Katalysator) - keine Aktivität festzustellen |
| 0x3029 | P3029 | P3029 Lambdasonde Heizungsansteuerung (Bank 2, vor Katalysator) - keine Aktivität festzustellen |
| 0x302A | P302A | P302A Kraftstoffeinspritzdruck (Bank 1) - Maximaldruck überschritten |
| 0x302B | P302B | P302B Kraftstoffeinspritzdruck (Bank 2) - Maximaldruck überschritten |
| 0x302C | P302C | P302C Kraftstoffeinspritzdruck (Bank 1) - Minimaldruck unterschritten |
| 0x302D | P302D | P302D Kraftstoffeinspritzdruck (Bank 2) - Minimaldruck unterschritten |
| 0x302E | P302E | P302E Kraftstoffeinspritzdruck Messbereichsproblem (Bank 1) - Druck zu hoch |
| 0x302F | P302F | P302F Kraftstoffeinspritzdruck Messbereichsproblem (Bank 2) - Druck zu hoch |
| 0x3030 | P3030 | P3030 Lambdasonde Innenwiderstandsmesspfad (Bank 1, vor Katalysator) - Adaptionswert zu hoch |
| 0x3031 | P3031 | P3031 Lambdasonde Innenwiderstandsmesspfad (Bank 2, vor Katalysator) - Adaptionswert zu hoch |
| 0x3032 | P3032 | P3032 Lambdasonde Innenwiderstandsmesspfad (Bank 1, vor Katalysator) - Verstärkungsfaktor Plausibilitätsfehler |
| 0x3033 | P3033 | P3033 Lambdasonde Innenwiderstandsmesspfad (Bank 2, vor Katalysator) - Verstärkungsfaktor Plausibilitätsfehler |
| 0x3034 | P3034 | P3034 Lambdasonde (Bank 1, vor Katalysator) - Kennliniensteigung zu flach |
| 0x3035 | P3035 | P3035 Lambdasonde (Bank 2, vor Katalysator) - Kennliniensteigung zu flach |
| 0x3036 | P3036 | P3036 Lambdasonde (Bank 1, vor Katalysator) - Unterschiedliche Länge von Fett- und Magerphase in der Regelschwingung |
| 0x3037 | P3037 | P3037 Lambdasonde (Bank 2, vor Katalysator) - Unterschiedliche Länge von Fett- und Magerphase in der Regelschwingung |
| 0x3038 | P3038 | P3038 Lambdasonde (Bank 1, vor Katalysator) - Asymmetrie von Fett- und Magerschaltzeit |
| 0x3039 | P3039 | P3039 Lambdasonde (Bank 2, vor Katalysator) - Asymmetrie von Fett- und Magerschaltzeit |
| 0x303A | P303A | P303A Kraftstoffeinspritzdruck Messbereichsproblem (Bank 1) - Maximaldruck überschritten |
| 0x303B | P303B | P303B Kraftstoffeinspritzdruck Messbereichsproblem (Bank 2) - Maximaldruck überschritten |
| 0x303C | P303C | P303C Kraftstoffeinspritzdruck Messbereichsproblem (Bank 1) - Minimaldruck unterschritten |
| 0x303D | P303D | P303D Kraftstoffeinspritzdruck Messbereichsproblem (Bank 2) - Minimaldruck unterschritten |
| 0x303E | P303E | P303E Gesteuerte Luftführung oben Versorgungsspannung - Fehlfunktion |
| 0x303F | P303F | P303F Gesteuerte Luftführung oben - Übertemperatur |
| 0x3040 | P3040 | P3040 Lambdasonde (Bank 1, nach Katalysator) - Mager- und Fettspannungsschwellen nicht erreicht |
| 0x3041 | P3041 | P3041 Lambdasonde (Bank 2, nach Katalysator) - Mager- und Fettspannungsschwellen nicht erreicht |
| 0x3042 | P3042 | P3042 Abgasrückführungsventil Schaltkreis - Fehlfunktion |
| 0x3043 | P3043 | P3043 Abgasrückführungsventil - Regelabweichung außerhalb Gültigkeitsbereich |
| 0x3044 | P3044 | P3044 Abgasrückführungsventil - Regler Ausgangsposition außerhalb Gültigkeitsbereich |
| 0x3045 | P3045 | P3045 Abgasrückführungsventil - Adaptionsbedingungen nicht erfüllt |
| 0x3046 | P3046 | P3046 Abgasrückführungsventil - unterer Adaptionswert außerhalb Gültigkeitsbereich |
| 0x3047 | P3047 | P3047 Abgasrückführungsventil - oberer Adaptionswert außerhalb Gültigkeitsbereich |
| 0x3048 | P3048 | P3048 Abgasrückführungsventil - obere Position nicht erreicht |
| 0x3049 | P3049 | P3049 Kraftstoffeinspritzdruck bei Freigabe Einspritzung - Druck zu niedrig |
| 0x304A | P304A | P304A Gesteuerte Luftführung oben - elektrischer Fehler |
| 0x304B | P304B | P304B Gesteuerte Luftführung oben, unterer Anschlag nicht erkannt |
| 0x304C | P304C | P304C Gesteuerte Luftführung oben, oberer Anschlag nicht erkannt |
| 0x304D | P304D | P304D Gesteuerte Luftführung oben, oberer Anschlag zu früh erkannt |
| 0x304E | P304E | P304E Gesteuerte Luftführung oben, Botschaftsüberwachung |
| 0x304F | P304F | P304F Gesteuerte Luftführung oben, Botschaftsüberwachung über LIN |
| 0x3050 | P3050 | P3050 Hochdruckeinspritzventil (HDEV) Zylinder 1 Schaltkreis - Leitungsunterbrechung |
| 0x3051 | P3051 | P3051 Hochdruckeinspritzventil (HDEV) Zylinder 1 Schaltkreis - niedrig |
| 0x3052 | P3052 | P3052 Hochdruckeinspritzventil (HDEV) Zylinder 1 Schaltkreis - hoch |
| 0x3053 | P3053 | P3053 Hochdruckeinspritzventil (HDEV) Zylinder 2 Schaltkreis - Leitungsunterbrechung |
| 0x3054 | P3054 | P3054 Hochdruckeinspritzventil (HDEV) Zylinder 2 Schaltkreis - niedrig |
| 0x3055 | P3055 | P3055 Hochdruckeinspritzventil (HDEV) Zylinder 2 Schaltkreis - hoch |
| 0x3056 | P3056 | P3056 Hochdruckeinspritzventil (HDEV) Zylinder 3 Schaltkreis - Leitungsunterbrechung |
| 0x3057 | P3057 | P3057 Hochdruckeinspritzventil (HDEV) Zylinder 3 Schaltkreis - niedrig |
| 0x3058 | P3058 | P3058 Hochdruckeinspritzventil (HDEV) Zylinder 3 Schaltkreis - hoch |
| 0x3059 | P3059 | P3059 Hochdruckeinspritzventil (HDEV) Zylinder 4 Schaltkreis - Leitungsunterbrechung |
| 0x305A | P305A | P305A Einspritzventil 5 - klemmt offen |
| 0x305B | P305B | P305B Einspritzventil 6 - klemmt offen |
| 0x305C | P305C | P305C Niederdruck-Kraftstoffsystem - Fehlfunktion |
| 0x3060 | P3060 | P3060 Hochdruckeinspritzventil (HDEV) Zylinder 4 Schaltkreis - niedrig |
| 0x3061 | P3061 | P3061 Hochdruckeinspritzventil (HDEV) Zylinder 4 Schaltkreis - hoch |
| 0x3062 | P3062 | P3062 Hochdruckeinspritzventil (HDEV) Zylinder 5 Schaltkreis - Leitungsunterbrechung |
| 0x3063 | P3063 | P3063 Hochdruckeinspritzventil (HDEV) Zylinder 5 Schaltkreis - niedrig |
| 0x3064 | P3064 | P3064 Hochdruckeinspritzventil (HDEV) Zylinder 5 Schaltkreis - hoch |
| 0x3065 | P3065 | P3065 Hochdruckeinspritzventil (HDEV) Zylinder 6 Schaltkreis - Leitungsunterbrechung |
| 0x3066 | P3066 | P3066 Hochdruckeinspritzventil (HDEV) Zylinder 6 Schaltkreis - niedrig |
| 0x3067 | P3067 | P3067 Hochdruckeinspritzventil (HDEV) Zylinder 6 Schaltkreis - hoch |
| 0x3068 | P3068 | P3068 Hochdruckeinspritzventil (HDEV) Zylinder 7 Schaltkreis - Leitungsunterbrechung |
| 0x3069 | P3069 | P3069 Hochdruckeinspritzventil (HDEV) Zylinder 7 Schaltkreis - niedrig |
| 0x306A | P306A | P306A Kraftstoffversorgung - Druck zu hoch, Notlauf |
| 0x306B | P306B | P306B Kraftstoffversorgung - Druck zu hoch, Notlauf mit Einspritzabschaltung |
| 0x306C | P306C | P306C Kraftstoffversorgung - Druck kurzzeitig zu hoch |
| 0x306D | P306D | P306D Kraftstoffversorgung Lambdaregelung - obere Grenze überschritten |
| 0x306E | P306E | P306E Kraftstoffversorgung Lambdaregelung - untere Grenze unterschritten |
| 0x306F | P306F | P306F Kraftstoffeinspritzdruck - Minimaldruck unterschritten, Einspritzabschaltung |
| 0x3070 | P3070 | P3070 Hochdruckeinspritzventil (HDEV) Zylinder 7 Schaltkreis - hoch |
| 0x3071 | P3071 | P3071 Hochdruckeinspritzventil (HDEV) Zylinder 8 Schaltkreis - Leitungsunterbrechung |
| 0x3072 | P3072 | P3072 Hochdruckeinspritzventil (HDEV) Zylinder 8 Schaltkreis - niedrig |
| 0x3073 | P3073 | P3073 Hochdruckeinspritzventil (HDEV) Zylinder 8 Schaltkreis - hoch |
| 0x3074 | P3074 | P3074 Hochdruckeinspritzventil (HDEV) Zylinder 9 Schaltkreis - Leitungsunterbrechung |
| 0x3075 | P3075 | P3075 Hochdruckeinspritzventil (HDEV) Zylinder 9 Schaltkreis - niedrig |
| 0x3076 | P3076 | P3076 Hochdruckeinspritzventil (HDEV) Zylinder 9 Schaltkreis - hoch |
| 0x3077 | P3077 | P3077 Hochdruckeinspritzventil (HDEV) Zylinder 10 Schaltkreis - Leitungsunterbrechung |
| 0x3078 | P3078 | P3078 Hochdruckeinspritzventil (HDEV) Zylinder 10 Schaltkreis - niedrig |
| 0x3079 | P3079 | P3079 Hochdruckeinspritzventil (HDEV) Zylinder 10 Schaltkreis - hoch |
| 0x3080 | P3080 | P3080 Hochdruckeinspritzventil (HDEV) Zylinder 11 Schaltkreis - Leitungsunterbrechung |
| 0x3081 | P3081 | P3081 Hochdruckeinspritzventil (HDEV) Zylinder 11 Schaltkreis - niedrig |
| 0x3082 | P3082 | P3082 Hochdruckeinspritzventil (HDEV) Zylinder 11 Schaltkreis - hoch |
| 0x3083 | P3083 | P3083 Hochdruckeinspritzventil (HDEV) Zylinder 12 Schaltkreis - Leitungsunterbrechung |
| 0x3084 | P3084 | P3084 Hochdruckeinspritzventil (HDEV) Zylinder 12 Schaltkreis - niedrig |
| 0x3085 | P3085 | P3085 Hochdruckeinspritzventil (HDEV) Zylinder 12 Schaltkreis - hoch |
| 0x3090 | P3090 | P3090 Kraftstoffeinspritzdruck mengengeregelt - Minimaldruck unterschritten |
| 0x3091 | P3091 | P3091 Kraftstoffeinspritzdruck druckgeregelt - Minimaldruck unterschritten |
| 0x3094 | P3094 | P3094 Niederdruck-Kraftstoffsystem - Druck zu hoch |
| 0x3095 | P3095 | P3095 Niederdruck-Kraftstoffsystem - Maximaldruck überschritten |
| 0x3096 | P3096 | P3096 Niederdruck-Kraftstoffsystem - Minimaldruck unterschritten |
| 0x3100 | P3100 | P3100 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 Schaltkreis - Leitungsunterbrechung |
| 0x3101 | P3101 | P3101 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 Schaltkreis - niedrig |
| 0x3102 | P3102 | P3102 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 Schaltkreis - hoch |
| 0x3103 | P3103 | P3103 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Boosterzeitfehler |
| 0x3104 | P3104 | P3104 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 Schaltkreis - Leitungsunterbrechung |
| 0x3105 | P3105 | P3105 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 Schaltkreis - niedrig |
| 0x3106 | P3106 | P3106 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 Schaltkreis - hoch |
| 0x3107 | P3107 | P3107 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Boosterzeitfehler |
| 0x3108 | P3108 | P3108 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 Schaltkreis - Leitungsunterbrechung |
| 0x3109 | P3109 | P3109 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 Schaltkreis - niedrig |
| 0x310A | P310A | P310A Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 Schaltkreis - Windungsschluss oder hoch |
| 0x310B | P310B | P310B Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 1 - elektrischer Fehler |
| 0x310C | P310C | P310C Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 1 Schaltkreis - Leitungsunterbrechung |
| 0x310D | P310D | P310D Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 Schaltkreis - Windungsschluss oder hoch |
| 0x310E | P310E | P310E Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 2 - elektrischer Fehler |
| 0x310F | P310F | P310F Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 2 Schaltkreis - Leitungsunterbrechung |
| 0x3110 | P3110 | P3110 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 Schaltkreis - hoch |
| 0x3111 | P3111 | P3111 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Boosterzeitfehler |
| 0x3112 | P3112 | P3112 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 Schaltkreis - Leitungsunterbrechung |
| 0x3113 | P3113 | P3113 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 Schaltkreis - niedrig |
| 0x3114 | P3114 | P3114 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 Schaltkreis - hoch |
| 0x3115 | P3115 | P3115 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Boosterzeitfehler |
| 0x3116 | P3116 | P3116 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 Schaltkreis - Leitungsunterbrechung |
| 0x3117 | P3117 | P3117 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 Schaltkreis - niedrig |
| 0x3118 | P3118 | P3118 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 Schaltkreis - hoch |
| 0x3119 | P3119 | P3119 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Boosterzeitfehler |
| 0x311A | P311A | P311A Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 Schaltkreis - Windungsschluss oder hoch |
| 0x311B | P311B | P311B Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 3 - elektrischer Fehler |
| 0x311C | P311C | P311C Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 3 Schaltkreis - Leitungsunterbrechung |
| 0x311D | P311D | P311D Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 Schaltkreis - Windungsschluss oder hoch |
| 0x311E | P311E | P311E Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 4 - elektrischer Fehler |
| 0x311F | P311F | P311F Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 4 Schaltkreis - Leitungsunterbrechung |
| 0x3120 | P3120 | P3120 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 Schaltkreis - Leitungsunterbrechung  |
| 0x3121 | P3121 | P3121 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 Schaltkreis - niedrig |
| 0x3122 | P3122 | P3122 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 Schaltkreis - hoch |
| 0x3123 | P3123 | P3123 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Boosterzeitfehler |
| 0x3124 | P3124 | P3124 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 Schaltkreis - Leitungsunterbrechung |
| 0x3125 | P3125 | P3125 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 Schaltkreis - niedrig |
| 0x3126 | P3126 | P3126 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 Schaltkreis - hoch |
| 0x3127 | P3127 | P3127 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Boosterzeitfehler |
| 0x3128 | P3128 | P3128 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 Schaltkreis - Leitungsunterbrechung |
| 0x3129 | P3129 | P3129 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 Schaltkreis - niedrig |
| 0x312A | P312A | P312A Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 Schaltkreis - Windungsschluss oder hoch |
| 0x312B | P312B | P312B Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 5 - elektrischer Fehler |
| 0x312C | P312C | P312C Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 5 Schaltkreis - Leitungsunterbrechung |
| 0x312D | P312D | P312D Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 Schaltkreis - Windungsschluss oder hoch |
| 0x312E | P312E | P312E Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 6 - elektrischer Fehler |
| 0x312F | P312F | P312F Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 6 Schaltkreis - Leitungsunterbrechung |
| 0x3130 | P3130 | P3130 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 Schaltkreis - hoch |
| 0x3131 | P3131 | P3131 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Boosterzeitfehler |
| 0x3132 | P3132 | P3132 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 Schaltkreis - Leitungsunterbrechung |
| 0x3133 | P3133 | P3133 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 Schaltkreis - niedrig |
| 0x3134 | P3134 | P3134 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 Schaltkreis - hoch |
| 0x3135 | P3135 | P3135 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Boosterzeitfehler |
| 0x3136 | P3136 | P3136 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 Schaltkreis - Leitungsunterbrechung |
| 0x3137 | P3137 | P3137 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 Schaltkreis - niedrig |
| 0x3138 | P3138 | P3138 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 Schaltkreis - hoch |
| 0x3139 | P3139 | P3139 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Boosterzeitfehler |
| 0x313A | P313A | P313A Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 Schaltkreis - Windungsschluss oder hoch |
| 0x313B | P313B | P313B Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 7 - elektrischer Fehler |
| 0x313C | P313C | P313C Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 7 Schaltkreis - Leitungsunterbrechung |
| 0x313D | P313D | P313D Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 Schaltkreis - Windungsschluss oder hoch |
| 0x313E | P313E | P313E Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 8 - elektrischer Fehler |
| 0x313F | P313F | P313F Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 8 Schaltkreis - Leitungsunterbrechung |
| 0x3140 | P3140 | P3140 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 Schaltkreis - Leitungsunterbrechung |
| 0x3141 | P3141 | P3141 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 Schaltkreis - niedrig |
| 0x3142 | P3142 | P3142 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 Schaltkreis - hoch |
| 0x3143 | P3143 | P3143 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Boosterzeitfehler |
| 0x3144 | P3144 | P3144 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 Schaltkreis - Leitungsunterbrechung |
| 0x3145 | P3145 | P3145 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 Schaltkreis - niedrig |
| 0x3146 | P3146 | P3146 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 Schaltkreis - hoch |
| 0x3147 | P3147 | P3147 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Boosterzeitfehler |
| 0x3148 | P3148 | P3148 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 Schaltkreis - Kurzschluss Spule |
| 0x3149 | P3149 | P3149 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 Schaltkreis - niedrig |
| 0x314A | P314A | P314A Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 Schaltkreis - Windungsschluss oder hoch |
| 0x314B | P314B | P314B Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 9 - elektrischer Fehler |
| 0x314C | P314C | P314C Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 9 Schaltkreis - Leitungsunterbrechung |
| 0x314D | P314D | P314D Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 Schaltkreis - Windungsschluss oder hoch |
| 0x314E | P314E | P314E Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 10 - elektrischer Fehler |
| 0x314F | P314F | P314F Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 10 Schaltkreis - Leitungsunterbrechung |
| 0x3150 | P3150 | P3150 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 Schaltkreis - hoch |
| 0x3151 | P3151 | P3151 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 Schaltkreis - Kurzschluss Spule |
| 0x3152 | P3152 | P3152 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 Schaltkreis - niedrig |
| 0x3153 | P3153 | P3153 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 Schaltkreis - hoch |
| 0x3154 | P3154 | P3154 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 Schaltkreis - Kurzschluss Spule |
| 0x3155 | P3155 | P3155 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 Schaltkreis - niedrig |
| 0x3156 | P3156 | P3156 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 Schaltkreis - hoch |
| 0x3157 | P3157 | P3157 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 Schaltkreis - Kurzschluss Spule |
| 0x3158 | P3158 | P3158 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 Schaltkreis - niedrig |
| 0x3159 | P3159 | P3159 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 Schaltkreis - hoch |
| 0x315A | P315A | P315A Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 Schaltkreis - Windungsschluss oder hoch |
| 0x315B | P315B | P315B Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 11 - elektrischer Fehler |
| 0x315C | P315C | P315C Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 11 Schaltkreis - Leitungsunterbrechung |
| 0x315D | P315D | P315D Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 Schaltkreis - Windungsschluss oder hoch |
| 0x315E | P315E | P315E Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 12 - elektrischer Fehler |
| 0x315F | P315F | P315F Hochdruckeinspritzventil (HDEV) Low Side/High Side Zylinder 12 Schaltkreis - Leitungsunterbrechung |
| 0x3160 | P3160 | P3160 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 Schaltkreis - Kurzschluss Spule |
| 0x3161 | P3161 | P3161 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 Schaltkreis - niedrig |
| 0x3162 | P3162 | P3162 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 Schaltkreis - hoch |
| 0x3163 | P3163 | P3163 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 Schaltkreis - Kurzschluss Spule |
| 0x3164 | P3164 | P3164 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 Schaltkreis - niedrig |
| 0x3165 | P3165 | P3165 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 Schaltkreis - hoch |
| 0x3166 | P3166 | P3166 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 Schaltkreis - Kurzschluss Spule |
| 0x3167 | P3167 | P3167 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 Schaltkreis - niedrig |
| 0x3168 | P3168 | P3168 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 Schaltkreis - hoch |
| 0x3169 | P3169 | P3169 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 Schaltkreis - Kurzschluss Spule |
| 0x316A | P316A | P316A Motorkühlmitteltemperatur - Signal festliegend hoch |
| 0x316B | P316B | P316B Motorkühlmitteltemperatur - Signal festliegend unterhalb Freigabetemperatur |
| 0x316C | P316C | P316C Kühlmitteltemperaturfühler Kühleraustritt - Maximaltemperatur unplausibel |
| 0x316D | P316D | P316D H2-Einblasventil Low Side Zylinder 1 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x316E | P316E | P316E H2-Einblasventil Low Side Zylinder 1 Schaltkreis - niedrig |
| 0x316F | P316F | P316F H2-Einblasventil Low Side Zylinder 1 Schaltkreis - hoch |
| 0x3170 | P3170 | P3170 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 Schaltkreis - niedrig |
| 0x3171 | P3171 | P3171 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 Schaltkreis - hoch |
| 0x3172 | P3172 | P3172 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 Schaltkreis - Kurzschluss Spule |
| 0x3173 | P3173 | P3173 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 Schaltkreis - niedrig |
| 0x3174 | P3174 | P3174 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 Schaltkreis - hoch |
| 0x3175 | P3175 | P3175 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 Schaltkreis - Kurzschluss Spule |
| 0x3176 | P3176 | P3176 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 Schaltkreis - niedrig |
| 0x3177 | P3177 | P3177 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 Schaltkreis - hoch |
| 0x3178 | P3178 | P3178 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 Schaltkreis - Kurzschluss Spule |
| 0x3179 | P3179 | P3179 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 Schaltkreis - niedrig |
| 0x317A | P317A | P317A H2-Einblasventil Low Side Zylinder 2 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x317B | P317B | P317B H2-Einblasventil Low Side Zylinder 2 Schaltkreis - niedrig |
| 0x317C | P317C | P317C H2-Einblasventil Low Side Zylinder 2 Schaltkreis - hoch |
| 0x317D | P317D | P317D H2-Einblasventil Low Side Zylinder 3 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x317E | P317E | P317E H2-Einblasventil Low Side Zylinder 3 Schaltkreis - niedrig |
| 0x317F | P317F | P317F H2-Einblasventil Low Side Zylinder 3 Schaltkreis - hoch |
| 0x3180 | P3180 | P3180 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 Schaltkreis - hoch |
| 0x3181 | P3181 | P3181 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 Schaltkreis - Kurzschluss Spule |
| 0x3182 | P3182 | P3182 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 Schaltkreis - niedrig |
| 0x3183 | P3183 | P3183 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 Schaltkreis - hoch |
| 0x3184 | P3184 | P3184 HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 1) - Kommunikationsfehler |
| 0x3185 | P3185 | P3185 HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 2) - Kommunikationsfehler |
| 0x3186 | P3186 | P3186 Ansauglufttemperaturfühler (Bank 2) Schaltkreis - niedrig |
| 0x3187 | P3187 | P3187 Ansauglufttemperaturfühler (Bank 2) Schaltkreis - hoch |
| 0x3188 | P3188 | P3188 CAN-Timeout Hochdruckeinspritzventil (HDEV) Botschaft |
| 0x3189 | P3189 | P3189 CAN-Timeout Hochdruckeinspritzventil (HDEV) Botschaft (Bank 2) |
| 0x318A | P318A | P318A H2-Einblasventil Low Side Zylinder 4 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x318B | P318B | P318B H2-Einblasventil Low Side Zylinder 4 Schaltkreis - niedrig |
| 0x318C | P318C | P318C H2-Einblasventil Low Side Zylinder 4 Schaltkreis - hoch |
| 0x318D | P318D | P318D H2-Einblasventil Low Side Zylinder 5 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x318E | P318E | P318E H2-Einblasventil Low Side Zylinder 5 Schaltkreis - niedrig |
| 0x318F | P318F | P318F H2-Einblasventil Low Side Zylinder 5 Schaltkreis - hoch |
| 0x3190 | P3190 | P3190 Ansauglufttemperaturfühler (Bank 2) Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x3191 | P3191 | P3191 Drosselklappensteller Stellmotor (Bank 2) Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3192 | P3192 | P3192 Drosselklappensteller Stellmotor (Bank 2) Schaltkreis - niedrig |
| 0x3193 | P3193 | P3193 Drosselklappensteller Stellmotor (Bank 2) Schaltkreis - hoch |
| 0x3194 | P3194 | P3194 Kraftstoffdruckregelung - Basiskennlinie Kraftstoffvolumen Adaption 1 außerhalb Gültigkeitsbereich |
| 0x3195 | P3195 | P3195 Kraftstoffdruckregelung - Basiskennlinie Kraftstoffvolumen Adaption 2 außerhalb Gültigkeitsbereich |
| 0x3196 | P3196 | P3196 Kaltstart Kühlmitteltemperaturfühler Kühleraustritt - Signal hoch |
| 0x3197 | P3197 | P3197 Kühlmitteltemperatur Kühleraustritt - Gradient zu hoch |
| 0x3198 | P3198 | P3198 Motorkühlmitteltemperatur 1 - Gradient zu hoch |
| 0x3199 | P3199 | P3199 Motorkühlmitteltemperatur - Signal festliegend |
| 0x319A | P319A | P319A Kraftstoffdruckregelung - Min-Kennlinie Kraftstoffvolumen Adaption 1 außerhalb Gültigkeitsbereich |
| 0x319B | P319B | P319B Kraftstoffdruckregelung - Min-Kennlinie Kraftstoffvolumen Adaption 2 außerhalb Gültigkeitsbereich |
| 0x319C | P319C | P319C H2-Einblasventil Low Side Zylinder 6 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x319D | P319D | P319D H2-Einblasventil Low Side Zylinder 6 Schaltkreis - niedrig |
| 0x319E | P319E | P319E H2-Einblasventil Low Side Zylinder 6 Schaltkreis - hoch |
| 0x319F | P319F | P319F H2-Einblasventil Low Side Zylinder 7 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x31A0 | P31A0 | P31A0 H2-Einblasventil Low Side Zylinder 7 Schaltkreis - niedrig |
| 0x31A1 | P31A1 | P31A1 H2-Einblasventil Low Side Zylinder 7 Schaltkreis - hoch |
| 0x31A2 | P31A2 | P31A2 H2-Einblasventil Low Side Zylinder 8 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x31A3 | P31A3 | P31A3 H2-Einblasventil Low Side Zylinder 8 Schaltkreis - niedrig |
| 0x31A4 | P31A4 | P31A4 H2-Einblasventil Low Side Zylinder 8 Schaltkreis - hoch |
| 0x31A5 | P31A5 | P31A5 H2-Einblasventil Low Side Zylinder 9 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x31A6 | P31A6 | P31A6 H2-Einblasventil Low Side Zylinder 9 Schaltkreis - niedrig |
| 0x31A7 | P31A7 | P31A7 H2-Einblasventil Low Side Zylinder 9 Schaltkreis - hoch |
| 0x31A8 | P31A8 | P31A8 H2-Einblasventil Low Side Zylinder 10 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x31A9 | P31A9 | P31A9 H2-Einblasventil Low Side Zylinder 10 Schaltkreis - niedrig |
| 0x31AA | P31AA | P31AA H2-Einblasventil Low Side Zylinder 10 Schaltkreis - hoch |
| 0x31AB | P31AB | P31AB H2-Einblasventil Low Side Zylinder 11 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x31AC | P31AC | P31AC H2-Einblasventil Low Side Zylinder 11 Schaltkreis - niedrig |
| 0x31AD | P31AD | P31AD H2-Einblasventil Low Side Zylinder 11 Schaltkreis - hoch |
| 0x31AE | P31AE | P31AE H2-Einblasventil Low Side Zylinder 12 Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x31AF | P31AF | P31AF H2-Einblasventil Low Side Zylinder 12 Schaltkreis - niedrig |
| 0x31B0 | P31B0 | P31B0 H2-Einblasventil Low Side Zylinder 12 Schaltkreis - hoch |
| 0x31B1 | P31B1 | P31B1 H2-Einblasventil High Side Zylinder 1 Schaltkreis - Kurzschluss Spule |
| 0x31B2 | P31B2 | P31B2 H2-Einblasventil High Side Zylinder 2 Schaltkreis - Kurzschluss Spule |
| 0x31B3 | P31B3 | P31B3 H2-Einblasventil High Side Zylinder 3 Schaltkreis - Kurzschluss Spule |
| 0x31B4 | P31B4 | P31B4 H2-Einblasventil High Side Zylinder 4 Schaltkreis - Kurzschluss Spule |
| 0x31B5 | P31B5 | P31B5 H2-Einblasventil High Side Zylinder 5 Schaltkreis - Kurzschluss Spule |
| 0x31B6 | P31B6 | P31B6 H2-Einblasventil High Side Zylinder 6 Schaltkreis - Kurzschluss Spule |
| 0x31B7 | P31B7 | P31B7 H2-Einblasventil High Side Zylinder 7 Schaltkreis - Kurzschluss Spule |
| 0x31B8 | P31B8 | P31B8 H2-Einblasventil High Side Zylinder 8 Schaltkreis - Kurzschluss Spule |
| 0x31B9 | P31B9 | P31B9 H2-Einblasventil High Side Zylinder 9 Schaltkreis - Kurzschluss Spule |
| 0x31BA | P31BA | P31BA H2-Einblasventil High Side Zylinder 10 Schaltkreis - Kurzschluss Spule |
| 0x31BB | P31BB | P31BB H2-Einblasventil High Side Zylinder 11 Schaltkreis - Kurzschluss Spule |
| 0x31BC | P31BC | P31BC H2-Einblasventil High Side Zylinder 12 Schaltkreis - Kurzschluss Spule |
| 0x31C0 | P31C0 | P31C0 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 Schaltkreis - niedrig |
| 0x31C1 | P31C1 | P31C1 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 Schaltkreis - hoch |
| 0x31C2 | P31C2 | P31C2 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 Schaltkreis - niedrig |
| 0x31C3 | P31C3 | P31C3 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 Schaltkreis - hoch |
| 0x31C4 | P31C4 | P31C4 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 Schaltkreis - niedrig |
| 0x31C5 | P31C5 | P31C5 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 Schaltkreis - hoch |
| 0x31C6 | P31C6 | P31C6 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 Schaltkreis - niedrig |
| 0x31C7 | P31C7 | P31C7 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 Schaltkreis - hoch |
| 0x31C8 | P31C8 | P31C8 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 Schaltkreis - niedrig |
| 0x31C9 | P31C9 | P31C9 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 Schaltkreis - hoch |
| 0x31CA | P31CA | P31CA H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 Schaltkreis - niedrig |
| 0x31CB | P31CB | P31CB H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 Schaltkreis - hoch |
| 0x31CC | P31CC | P31CC H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 Schaltkreis - niedrig |
| 0x31CD | P31CD | P31CD H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 Schaltkreis - hoch |
| 0x31CE | P31CE | P31CE H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 Schaltkreis - niedrig |
| 0x31CF | P31CF | P31CF H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 Schaltkreis - hoch |
| 0x31D0 | P31D0 | P31D0 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 Schaltkreis - niedrig |
| 0x31D1 | P31D1 | P31D1 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 Schaltkreis - hoch |
| 0x31D2 | P31D2 | P31D2 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 Schaltkreis - niedrig |
| 0x31D3 | P31D3 | P31D3 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 Schaltkreis - hoch |
| 0x31D4 | P31D4 | P31D4 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 Schaltkreis - niedrig |
| 0x31D5 | P31D5 | P31D5 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 Schaltkreis - hoch |
| 0x31D6 | P31D6 | P31D6 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 Schaltkreis - niedrig |
| 0x31D7 | P31D7 | P31D7 H2-Einblasventil oder Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 Schaltkreis - hoch |
| 0x31DA | P31DA | P31DA H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 1) - Boostspannung zu hoch |
| 0x31DB | P31DB | P31DB H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 2) - Boostspannung zu hoch |
| 0x31DC | P31DC | P31DC H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 1) - Boostspannung zu niedrig |
| 0x31DD | P31DD | P31DD H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 2) - Boostspannung zu niedrig |
| 0x31DE | P31DE | P31DE H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 1) - maximaler Strom nicht erreicht |
| 0x31DF | P31DF | P31DF H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 2) - maximaler Strom nicht erreicht |
| 0x31E0 | P31E0 | P31E0 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 1) - Versorgungsspannung zu hoch |
| 0x31E1 | P31E1 | P31E1 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 2) - Versorgungsspannung zu hoch |
| 0x31E2 | P31E2 | P31E2 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 1) - Versorgungsspannung zu niedrig |
| 0x31E3 | P31E3 | P31E3 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät  (Bank 2) - Versorgungsspannung zu niedrig |
| 0x31E4 | P31E4 | P31E4 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 1) - Segmentzeitfehler |
| 0x31E5 | P31E5 | P31E5 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 2) - Segmentzeitfehler |
| 0x31E6 | P31E6 | P31E6 H2- und HDEV (Hochdruckeinspritzventil) (Bank 1) Steuergerät - interner Fehler |
| 0x31E7 | P31E7 | P31E7 H2- und HDEV (Hochdruckeinspritzventil) (Bank 2) Steuergerät - interner Fehler |
| 0x31E8 | P31E8 | P31E8 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 1) - Kraftstoffbetriebsart Korrelationfehler |
| 0x31E9 | P31E9 | P31E9 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 2) - Kraftstoffbetriebsart Korrelationfehler |
| 0x31EA | P31EA | P31EA H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 1) - H2-Betrieb mit Ersatzwerten |
| 0x31EB | P31EB | P31EB H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 2) - H2-Betrieb mit Ersatzwerten |
| 0x31EC | P31EC | P31EC H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 1) - Benzin-Betrieb mit Ersatzwerten |
| 0x31ED | P31ED | P31ED H2- und HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 2) - Benzin-Betrieb mit Ersatzwerten |
| 0x31EE | P31EE | P31EE H2- und HDEV (Hochdruckeinspritzventil) Steuergerät Umschaltung Kraftstoffbetriebsart (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x31EF | P31EF | P31EF H2- und HDEV (Hochdruckeinspritzventil) Steuergerät Umschaltung Kraftstoffbetriebsart (Bank 1) Schaltkreis - niedrig |
| 0x31F0 | P31F0 | P31F0 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät Umschaltung Kraftstoffbetriebsart (Bank 1) Schaltkreis - hoch |
| 0x31F1 | P31F1 | P31F1 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät Umschaltung Kraftstoffbetriebsart (Bank 2) Schaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x31F2 | P31F2 | P31F2 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät Umschaltung Kraftstoffbetriebsart (Bank 2) Schaltkreis - niedrig |
| 0x31F3 | P31F3 | P31F3 H2- und HDEV (Hochdruckeinspritzventil) Steuergerät Umschaltung Kraftstoffbetriebsart (Bank 2) Schaltkreis - hoch |
| 0x3200 | P3200 | P3200 Powertrain CAN, CAN-Baustein - defekt |
| 0x3201 | P3201 | P3201 Powertrain CAN, DPRAM-CAN-Baustein - defekt |
| 0x3202 | P3202 | P3202 Powertrain CAN, CAN-Baustein - Abschaltung |
| 0x3203 | P3203 | P3203 Local CAN, LoCAN-Baustein - defekt |
| 0x3204 | P3204 | P3204 Local CAN, DPRAM-LoCAN-Baustein - defekt |
| 0x3205 | P3205 | P3205 Local CAN, CAN-Baustein - Abschaltung |
| 0x3206 | P3206 | P3206 CAN-Timeout ARS (Active Roll Stabilisation) |
| 0x3207 | P3207 | P3207 CAN-Botschaftsüberwachung ARS (Active Roll Stabilisation) - kein Signal |
| 0x3208 | P3208 | P3208 CAN-Botschaftsüberwachung ARS (Active Roll Stabilisation) - Plausibilitätsfehler |
| 0x3209 | P3209 | P3209 CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Aliveprüfung |
| 0x320A | P320A | P320A Botschaftsüberwachung Momentenberechnung AFS (Active Front Steering) - Aliveprüfung/Prüfsummenfehler |
| 0x320B | P320B | P320B Botschaftsüberwachung Momentenberechnung AFS (Active Front Steering) - Timeout |
| 0x320C | P320C | P320C Botschaftsüberwachung Momentenberechnung AFS (Active Front Steering) - Plausibilitätsfehler |
| 0x320D | P320D | P320D CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Timeout |
| 0x320E | P320E | P320E Generator 2 - Übertemperatur |
| 0x320F | P320F | P320F Generator 2 Steuerkreis - Fehlfunktion |
| 0x3210 | P3210 | P3210 CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Plausibilitätsfehler |
| 0x3211 | P3211 | P3211 CAN-Botschaftsüberwachung CAS (Car Access System) - kein Signal |
| 0x3212 | P3212 | P3212 CAN-Botschaftsüberwachung CAS (Car Access System) - Plausibilitätsfehler |
| 0x3213 | P3213 | P3213 CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Aliveprüfung |
| 0x3214 | P3214 | P3214 CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Plausibilitätsfehler |
| 0x3215 | P3215 | P3215 CAN-Botschaftsüberwachung IHKA (integrierte Heiz- und Klimaautomatik) - kein Signal |
| 0x3216 | P3216 | P3216 CAN-Timeout Instrumentenkombination |
| 0x3217 | P3217 | P3217 CAN-Botschaftsüberwachung Instrumentenkombination - Plausibilitätsfehler |
| 0x3218 | P3218 | P3218 CAN-Botschaftsüberwachung PWML (Powermodul) - kein Signal |
| 0x3219 | P3219 | P3219 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Aliveprüfung |
| 0x321A | P321A | P321A Generator 2 - mechanischer Fehler |
| 0x321B | P321B | P321B Generator 2 - Kommunikationsverlust |
| 0x321C | P321C | P321C Generator 2 - Kommunikationsfehler |
| 0x321D | P321D | P321D CAN-Botschaftsüberwachung Instrumentenkombination - Aliveprüfung |
| 0x321E | P321E | P321E Umgebungsdrucksensor - Maximaldruck unplausibel |
| 0x321F | P321F | P321F Umgebungsdrucksensor - Minimaldruck unplausibel |
| 0x3220 | P3220 | P3220 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - kein Signal |
| 0x3221 | P3221 | P3221 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Plausibilitätsfehler |
| 0x3222 | P3222 | P3222 Generator - Übertemperatur |
| 0x3223 | P3223 | P3223 Generator - mechanischer Fehler |
| 0x3224 | P3224 | P3224 Generator - Kommunikationsverlust |
| 0x3225 | P3225 | P3225 Generator - Kommunikationsfehler |
| 0x3226 | P3226 | P3226 E-Box Ansteuerung Lüfter Schaltkreis - hoch |
| 0x3227 | P3227 | P3227 E-Box Ansteuerung Lüfter Schaltkreis - niedrig |
| 0x3228 | P3228 | P3228 E-Box Ansteuerung Lüfter Schaltkreis - Leitungsunterbrechung |
| 0x3229 | P3229 | P3229 Lastsensorüberwachung VVT-Ventilhub - Plausibilitätsfehler |
| 0x322A | P322A | P322A Umgebungsdrucksensor - Kontinuitätsfehler |
| 0x322B | P322B | P322B Umgebungsdrucksensor - Druckdifferenz zwischen Master- und Slave-DME zu groß |
| 0x322C | P322C | P322C Umgebungsdrucksensor Schaltkreis (Bank 2) - hoch |
| 0x322D | P322D | P322D Umgebungsdrucksensor Schaltkreis (Bank 2) - niedrig |
| 0x322E | P322E | P322E Umgebungsdrucksensor (Bank 2) - Maximaldruck unplausibel |
| 0x322F | P322F | P322F Umgebungsdrucksensor (Bank 2) - Minimaldruck unplausibel |
| 0x3230 | P3230 | P3230 Lastsensorüberwachung Drucksensor Schaltkreis - Messbereichs- oder Leistungsproblem |
| 0x3231 | P3231 | P3231 Steuergeräteüberwachung Fehlerreaktion - Plausibilitätsfehler |
| 0x3232 | P3232 | P3232 Steuergeräteüberwachung Zündwinkel - Plausibilitätsfehler |
| 0x3233 | P3233 | P3233 Steuergeräteüberwachung relative Füllung - Plausibilitätsfehler |
| 0x3234 | P3234 | P3234 Steuergeräteüberwachung Drosselklappensteller Anschlagüberprüfung - Fehlfunktion |
| 0x3235 | P3235 | P3235 Steuergeräteüberwachung Variantencodierung - Plausibilitätsfehler |
| 0x3236 | P3236 | P3236 Steuergeräteüberwachung Einspritzzeit relative Kraftstoffmenge - Plausibilitätsfehler |
| 0x3237 | P3237 | P3237 Steuergeräteüberwachung Kraftstoffkorrektur - Fehler |
| 0x3238 | P3238 | P3238 Steuergeräteüberwachung TPU-Baustein - defekt |
| 0x3239 | P3239 | P3239 Steuergerät Kodierprozess - keine Kodierung |
| 0x323A | P323A | P323A Umgebungsdrucksensor (Bank 2) - Kontinuitätsfehler |
| 0x323B | P323B | P323B Umgebungsdrucksensor (Bank 2) - Druckdifferenz zwischen Master- und Slave-DME zu groß |
| 0x323C | P323C | P323C Umgebungsdrucksensor - Vergleich aktueller/letzter Fahrzyklus unplausibel |
| 0x323D | P323D | P323D Steuergeräteüberwachung Abgleich Luftmassendurchsatz - Regelbereichsüberwachung |
| 0x323E | P323E | P323E Steuergeräteüberwachung Kraftstoffdrucksensor |
| 0x323F | P323F | P323F Steuergeräteüberwachung Kraftstoffvolumen - Luftmasse/Lambda - eingespritztes Kraftstoffvolumen Korrelationsfehler |
| 0x3240 | P3240 | P3240 Kennfeldkühlung Thermostat Steuerkreis - Leitungsunterbrechung |
| 0x3241 | P3241 | P3241 Kennfeldkühlung Thermostat Steuerkreis - niedrig  |
| 0x3242 | P3242 | P3242 Kennfeldkühlung Thermostat Steuerkreis - hoch |
| 0x3243 | P3243 | P3243 CAN-Timeout elektrischer Zusatzheizer |
| 0x3244 | P3244 | P3244 Elektrischer Zusatzheizer - defekt |
| 0x3245 | P3245 | P3245 Elektrischer Zusatzheizer - Übertemperatur |
| 0x3246 | P3246 | P3246 Elektrischer Zusatzheizer - Fehlfunktion |
| 0x3247 | P3247 | P3247 Steuergerät - interner NVRAM Backup Fehler |
| 0x3248 | P3248 | P3248 Momentenvergleich - Bankabweichungen zu gross |
| 0x3249 | P3249 | P3249 Kraftstoffeinspritzleiste Drucksensor Schaltkreis (Bank 2) - Fehlfunktion |
| 0x324A | P324A | P324A Generator - Typ unplausibel |
| 0x324B | P324B | P324B Generator 2 - Typ unplausibel |
| 0x324C | P324C | P324C Generator - Übertemperatur berechnet |
| 0x324D | P324D | P324D Generator 2 - Übertemperatur berechnet |
| 0x324E | P324E | P324E Generatorregler - Typ unplausibel |
| 0x324F | P324F | P324F Generatorregler 2 - Typ unplausibel |
| 0x3250 | P3250 | P3250 Kraftstoffeinspritzleiste Drucksensor Schaltkreis (Bank 2) - niedrig |
| 0x3251 | P3251 | P3251 Kraftstoffeinspritzleiste Drucksensor Schaltkreis (Bank 2) - hoch |
| 0x3252 | P3252 | P3252 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 2) - hoch |
| 0x3253 | P3253 | P3253 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 2) - Leitungsunterbrechung |
| 0x3254 | P3254 | P3254 Tankentlüftungssystem Spülventil/Tankentlüftungsventil Schaltkreis (Bank 2) - niedrig |
| 0x3255 | P3255 | P3255 Generator - Spannung in Startphase über Schwellwert |
| 0x3256 | P3256 | P3256 CAN-Timeout Lenkwinkelsensor (LWS) Steuergerät |
| 0x3257 | P3257 | P3257 Generator - Emissionsverschlechterung durch Notlauf |
| 0x3258 | P3258 | P3258 Steuergerät - interner Korrelationfehler gemessener/berechneter Lambdawert |
| 0x3259 | P3259 | P3259 Steuergeräteüberwachung Kraftstoffvolumen - Lambda unplausibel zu Betriebsart (homogen/Schichtbetrieb) |
| 0x325A | P325A | P325A Generator - elektrischer Fehler berechnet |
| 0x325B | P325B | P325B Generator 2 - elektrischer Fehler berechnet |
| 0x3260 | P3260 | P3260 Luftmassen- oder Luftmengendurchsatz - Plausibilitätsfehler wegen Sensordrift |
| 0x3261 | P3261 | P3261 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu groß wegen Offsetdrift |
| 0x3262 | P3262 | P3262 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu gering wegen Offsetdrift |
| 0x3263 | P3263 | P3263 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu groß wegen Sensordrift |
| 0x3264 | P3264 | P3264 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu gering wegen Sensordrift |
| 0x3265 | P3265 | P3265 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß wegen Offsetdrift |
| 0x3266 | P3266 | P3266 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu gering wegen Offsetdrift |
| 0x3267 | P3267 | P3267 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß wegen Sensordrift |
| 0x3268 | P3268 | P3268 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu gering wegen Sensordrift |
| 0x3269 | P3269 | P3269 Luftmassenmesser Versorgungsspannung (Bank 1) - Überspannung |
| 0x3270 | P3270 | P3270 Luftmassenmesser Versorgungsspannung (Bank 1) - Unterspannung |
| 0x3271 | P3271 | P3271 Luftmassenmesser Versorgungsspannung (Bank 2) - Überspannung |
| 0x3272 | P3272 | P3272 Luftmassenmesser Versorgungsspannung (Bank 2) - Unterspannung |
| 0x3273 | P3273 | P3273 Luftmassen- oder Luftmengendurchsatz - zu gering wegen zu niederiger Signalfrequenz |
| 0x3274 | P3274 | P3274 Luftmassen- oder Luftmengendurchsatz - zu groß wegen zu hoher Signalfrequenz |
| 0x3275 | P3275 | P3275 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu gering wegen zu niedriger Signalfrequenz |
| 0x3276 | P3276 | P3276 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß wegen zu hoher Signalfrequenz |
| 0x3277 | P3277 | P3277 Ladedrucksteller Schaltkreis - Fehlfunktion |
| 0x3278 | P3278 | P3278 Abgasrückführsteller Schaltkreis - Fehlfunktion |
| 0x3279 | P3279 | P3279 Drallklappe Schaltkreis - Fehlfunktion |
| 0x3280 | P3280 | P3280 Laufruheregler - Korrekturmenge zu hoch oder zu niedrig |
| 0x3281 | P3281 | P3281 Ladelufttemperaturfühler (Bank 2) Schaltkreis - hoch |
| 0x3282 | P3282 | P3282 Ladelufttemperaturfühler (Bank 2) Schaltkreis - niedrig |
| 0x3283 | P3283 | P3283 Kraftstoffdruckregelung (Bank 1) -  Adaptives Kraftstoffvolumen außerhalb Gültigkeitsbereich |
| 0x3284 | P3284 | P3284 Kraftstoffdruckregelung (Bank 1 ) - Berechnung adaptives Kraftstoffvolumen unplausibel |
| 0x3285 | P3285 | P3285 Kraftstoffdruckregelung (Bank 2) - Adaptives Kraftstoffvolumen außerhalb Gültigkeitsbereich |
| 0x3286 | P3286 | P3286 Kraftstoffdruckregelung (Bank 2) - Berechnung adaptives Kraftstoffvolumen unplausibel |
| 0x3287 | P3287 | P3287 Steuergerät Kodierprozess - interner EEPROM Fehler |
| 0x3288 | P3288 | P3288 Steuergeräteüberwachung Motorvariante - CAN-Timeout |
| 0x3289 | P3289 | P3289 Steuergeräteüberwachung Motorvariante - Plausibilitätsfehler |
| 0x3300 | P3300 | P3300 Zündspule Zylinder 1 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3301 | P3301 | P3301 Zündspule Zylinder 1 - Übergangswiderstand oder Hochimpedanz |
| 0x3302 | P3302 | P3302 Zündspule Zylinder 1 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3303 | P3303 | P3303 Zündspule Zylinder 5 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3304 | P3304 | P3304 Zündspule Zylinder 5 - Übergangswiderstand oder Hochimpedanz |
| 0x3305 | P3305 | P3305 Zündspule Zylinder 5 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3306 | P3306 | P3306 Zündspule Zylinder 4 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3307 | P3307 | P3307 Zündspule Zylinder 4 - Übergangswiderstand oder Hochimpedanz |
| 0x3308 | P3308 | P3308 Zündspule Zylinder 4 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3309 | P3309 | P3309 Zündspule Zylinder 8 Schaltkreis - hoch oder Nichtimpedanz |
| 0x330A | P330A | P330A Motoröl-Kontrollleuchte Schaltkreis - hoch |
| 0x330B | P330B | P330B Motoröl-Kontrollleuchte Schaltkreis - niedrig |
| 0x330C | P330C | P330C Motoröl-Kontrollleuchte Schaltkreis - Fehlfunktion |
| 0x3310 | P3310 | P3310 Zündspule Zylinder 8 - Übergangswiderstand oder Hochimpedanz |
| 0x3311 | P3311 | P3311 Zündspule Zylinder 8 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3312 | P3312 | P3312 Zündspule Zylinder 6 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3313 | P3313 | P3313 Zündspule Zylinder 6 - Übergangswiderstand oder Hochimpedanz |
| 0x3314 | P3314 | P3314 Zündspule Zylinder 6 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3315 | P3315 | P3315 Zündspule Zylinder 3 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3316 | P3316 | P3316 Zündspule Zylinder 3 - Übergangswiderstand oder Hochimpedanz |
| 0x3317 | P3317 | P3317 Zündspule Zylinder 3 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3318 | P3318 | P3318 Zündspule Zylinder 7 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3319 | P3319 | P3319 Zündspule Zylinder 7 - Übergangswiderstand oder Hochimpedanz |
| 0x3320 | P3320 | P3320 Zündspule Zylinder 7 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3321 | P3321 | P3321 Zündspule Zylinder 2 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3322 | P3322 | P3322 Zündspule Zylinder 2 - Übergangswiderstand oder Hochimpedanz |
| 0x3323 | P3323 | P3323 Zündspule Zylinder 2 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3324 | P3324 | P3324 Zündspule Zylinder 9 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3325 | P3325 | P3325 Zündspule Zylinder 9 - Übergangswiderstand oder Hochimpedanz |
| 0x3326 | P3326 | P3326 Zündspule Zylinder 9 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3327 | P3327 | P3327 Zündspule Zylinder 10 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3328 | P3328 | P3328 Zündspule Zylinder 10 - Übergangswiderstand oder Hochimpedanz |
| 0x3329 | P3329 | P3329 Zündspule Zylinder 10 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3330 | P3330 | P3330 Zündspule Zylinder 11 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3331 | P3331 | P3331 Zündspule Zylinder 11 - Übergangswiderstand oder Hochimpedanz |
| 0x3332 | P3332 | P3332 Zündspule Zylinder 11 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3333 | P3333 | P3333 Zündspule Zylinder 12 Schaltkreis - hoch oder Nichtimpedanz |
| 0x3334 | P3334 | P3334 Zündspule Zylinder 12 - Übergangswiderstand oder Hochimpedanz |
| 0x3335 | P3335 | P3335 Zündspule Zylinder 12 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3336 | P3336 | P3336 Funktionsüberwachung - Steuergerätekommunikation Master/Slave |
| 0x3337 | P3337 | P3337 Funktionsüberwachung - Lambdaplausibilisierung |
| 0x3400 | P3400 | P3400 Zylinderabschaltungssystem (Bank 1) - Fehlfunktion |
| 0x3401 | P3401 | P3401 Abschaltung Zylinder 1/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3402 | P3402 | P3402 Abschaltung Zylinder 1/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3403 | P3403 | P3403 Abschaltung Zylinder 1/Einlassventil Steuerkreis - niedrig |
| 0x3404 | P3404 | P3404 Abschaltung Zylinder 1/Einlassventil Steuerkreis - hoch |
| 0x3405 | P3405 | P3405 Auslassventil Zylinder 1 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3406 | P3406 | P3406 Auslassventil Zylinder 1 Steuerkreis - Leistungsproblem |
| 0x3407 | P3407 | P3407 Auslassventil Zylinder 1 Steuerkreis - niedrig |
| 0x3408 | P3408 | P3408 Auslassventil Zylinder 1 Steuerkreis - hoch |
| 0x3409 | P3409 | P3409 Abschaltung Zylinder 2/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x340A | P340A | P340A Abschaltung Einlassventil Steuerkreis (Bank 1) - Fehlfunktion |
| 0x340B | P340B | P340B Abschaltung Einlassventil Steuerkreis (Bank 2) - Fehlfunktion |
| 0x340C | P340C | P340C Abschaltung Auslassventil Steuerkreis (Bank 1) - Fehlfunktion |
| 0x340D | P340D | P340D Abschaltung Auslassventil Steuerkreis (Bank 2) - Fehlfunktion |
| 0x3410 | P3410 | P3410 Abschaltung Zylinder 2/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3411 | P3411 | P3411 Abschaltung Zylinder 2/Einlassventil Steuerkreis - niedrig |
| 0x3412 | P3412 | P3412 Abschaltung Zylinder 2/Einlassventil Steuerkreis - hoch |
| 0x3413 | P3413 | P3413 Auslassventil Zylinder 2 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3414 | P3414 | P3414 Auslassventil Zylinder 2 Steuerkreis - Leistungsproblem |
| 0x3415 | P3415 | P3415 Auslassventil Zylinder 2 Steuerkreis - niedrig |
| 0x3416 | P3416 | P3416 Auslassventil Zylinder 2 Steuerkreis - hoch |
| 0x3417 | P3417 | P3417 Abschaltung Zylinder 3/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3418 | P3418 | P3418 Abschaltung Zylinder 3/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3419 | P3419 | P3419 Abschaltung Zylinder 3/Einlassventil Steuerkreis - niedrig |
| 0x341A | P341A | P341A Abschaltung Einlassventil Steuerkreis (Bank 1) - Leistungsproblem |
| 0x341B | P341B | P341B Abschaltung Einlassventil Steuerkreis (Bank 2) - Leistungsproblem |
| 0x341C | P341C | P341C Abschaltung Auslassventil Steuerkreis (Bank 1) - Leistungsproblem |
| 0x341D | P341D | P341D Abschaltung Auslassventil Steuerkreis (Bank 2) - Leistungsproblem |
| 0x3420 | P3420 | P3420 Abschaltung Zylinder 3/Einlassventil Steuerkreis - hoch |
| 0x3421 | P3421 | P3421 Auslassventil Zylinder 3 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3422 | P3422 | P3422 Auslassventil Zylinder 3 Steuerkreis - Leistungsproblem |
| 0x3423 | P3423 | P3423 Auslassventil Zylinder 3 Steuerkreis - niedrig |
| 0x3424 | P3424 | P3424 Auslassventil Zylinder 3 Steuerkreis - hoch |
| 0x3425 | P3425 | P3425 Abschaltung Zylinder 4/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3426 | P3426 | P3426 Abschaltung Zylinder 4/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3427 | P3427 | P3427 Abschaltung Zylinder 4/Einlassventil Steuerkreis - niedrig |
| 0x3428 | P3428 | P3428 Abschaltung Zylinder 4/Einlassventil Steuerkreis - hoch |
| 0x3429 | P3429 | P3429 Auslassventil Zylinder 4 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3430 | P3430 | P3430 Auslassventil Zylinder 4 Steuerkreis - Leistungsproblem |
| 0x3431 | P3431 | P3431 Auslassventil Zylinder 4 Steuerkreis - niedrig |
| 0x3432 | P3432 | P3432 Auslassventil Zylinder 4 Steuerkreis - hoch |
| 0x3433 | P3433 | P3433 Abschaltung Zylinder 5/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3434 | P3434 | P3434 Abschaltung Zylinder 5/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3435 | P3435 | P3435 Abschaltung Zylinder 5/Einlassventil Steuerkreis - niedrig |
| 0x3436 | P3436 | P3436 Abschaltung Zylinder 5/Einlassventil Steuerkreis - hoch |
| 0x3437 | P3437 | P3437 Auslassventil Zylinder 5 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3438 | P3438 | P3438 Auslassventil Zylinder 5 Steuerkreis - Leistungsproblem |
| 0x3439 | P3439 | P3439 Auslassventil Zylinder 5 Steuerkreis - niedrig |
| 0x3440 | P3440 | P3440 Auslassventil Zylinder 5 Steuerkreis - hoch |
| 0x3441 | P3441 | P3441 Abschaltung Zylinder 6/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3442 | P3442 | P3442 Abschaltung Zylinder 6/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3443 | P3443 | P3443 Abschaltung Zylinder 6/Einlassventil Steuerkreis - niedrig |
| 0x3444 | P3444 | P3444 Abschaltung Zylinder 6/Einlassventil Steuerkreis - hoch |
| 0x3445 | P3445 | P3445 Auslassventil Zylinder 6 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3446 | P3446 | P3446 Auslassventil Zylinder 6 Steuerkreis - Leistungsproblem |
| 0x3447 | P3447 | P3447 Auslassventil Zylinder 6 Steuerkreis - niedrig |
| 0x3448 | P3448 | P3448 Auslassventil Zylinder 6 Steuerkreis - hoch |
| 0x3449 | P3449 | P3449 Abschaltung Zylinder 7/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3450 | P3450 | P3450 Abschaltung Zylinder 7/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3451 | P3451 | P3451 Abschaltung Zylinder 7/Einlassventil Steuerkreis - niedrig |
| 0x3452 | P3452 | P3452 Abschaltung Zylinder 7/Einlassventil Steuerkreis - hoch |
| 0x3453 | P3453 | P3453 Auslassventil Zylinder 7 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3454 | P3454 | P3454 Auslassventil Zylinder 7 Steuerkreis - Leistungsproblem |
| 0x3455 | P3455 | P3455 Auslassventil Zylinder 7 Steuerkreis - niedrig |
| 0x3456 | P3456 | P3456 Auslassventil Zylinder 7 Steuerkreis - hoch |
| 0x3457 | P3457 | P3457 Abschaltung Zylinder 8/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3458 | P3458 | P3458 Abschaltung Zylinder 8/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3459 | P3459 | P3459 Abschaltung Zylinder 8/Einlassventil Steuerkreis - niedrig |
| 0x3460 | P3460 | P3460 Abschaltung Zylinder 8/Einlassventil Steuerkreis - hoch |
| 0x3461 | P3461 | P3461 Auslassventil Zylinder 8 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3462 | P3462 | P3462 Auslassventil Zylinder 8 Steuerkreis - Leistungsproblem |
| 0x3463 | P3463 | P3463 Auslassventil Zylinder 8 Steuerkreis - niedrig |
| 0x3464 | P3464 | P3464 Auslassventil Zylinder 8 Steuerkreis - hoch |
| 0x3465 | P3465 | P3465 Abschaltung Zylinder 9/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3466 | P3466 | P3466 Abschaltung Zylinder 9/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3467 | P3467 | P3467 Abschaltung Zylinder 9/Einlassventil Steuerkreis - niedrig |
| 0x3468 | P3468 | P3468 Abschaltung Zylinder 9/Einlassventil Steuerkreis - hoch |
| 0x3469 | P3469 | P3469 Auslassventil Zylinder 9 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3470 | P3470 | P3470 Auslassventil Zylinder 9 Steuerkreis - Leistungsproblem |
| 0x3471 | P3471 | P3471 Auslassventil Zylinder 9 Steuerkreis - niedrig |
| 0x3472 | P3472 | P3472 Auslassventil Zylinder 9 Steuerkreis - hoch |
| 0x3473 | P3473 | P3473 Abschaltung Zylinder 10/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3474 | P3474 | P3474 Abschaltung Zylinder 10/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3475 | P3475 | P3475 Abschaltung Zylinder 10/Einlassventil Steuerkreis - niedrig |
| 0x3476 | P3476 | P3476 Abschaltung Zylinder 10/Einlassventil Steuerkreis - hoch |
| 0x3477 | P3477 | P3477 Auslassventil Zylinder 10 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3478 | P3478 | P3478 Auslassventil Zylinder 10 Steuerkreis - Leistungsproblem |
| 0x3479 | P3479 | P3479 Auslassventil Zylinder 10 Steuerkreis - niedrig |
| 0x3480 | P3480 | P3480 Auslassventil Zylinder 10 Steuerkreis - hoch |
| 0x3481 | P3481 | P3481 Abschaltung Zylinder 11/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3482 | P3482 | P3482 Abschaltung Zylinder 11/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3483 | P3483 | P3483 Abschaltung Zylinder 11/Einlassventil Steuerkreis - niedrig |
| 0x3484 | P3484 | P3484 Abschaltung Zylinder 11/Einlassventil Steuerkreis - hoch |
| 0x3485 | P3485 | P3485 Auslassventil Zylinder 11 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3486 | P3486 | P3486 Auslassventil Zylinder 11 Steuerkreis - Leistungsproblem |
| 0x3487 | P3487 | P3487 Auslassventil Zylinder 11 Steuerkreis - niedrig |
| 0x3488 | P3488 | P3488 Auslassventil Zylinder 11 Steuerkreis - hoch |
| 0x3489 | P3489 | P3489 Abschaltung Zylinder 12/Einlassventil Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3490 | P3490 | P3490 Abschaltung Zylinder 12/Einlassventil Steuerkreis - Leistungsproblem |
| 0x3491 | P3491 | P3491 Abschaltung Zylinder 12/Einlassventil Steuerkreis - niedrig |
| 0x3492 | P3492 | P3492 Abschaltung Zylinder 12/Einlassventil Steuerkreis - hoch |
| 0x3493 | P3493 | P3493 Auslassventil Zylinder 12 Steuerkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x3494 | P3494 | P3494 Auslassventil Zylinder 12 Steuerkreis - Leistungsproblem |
| 0x3495 | P3495 | P3495 Auslassventil Zylinder 12 Steuerkreis - niedrig |
| 0x3496 | P3496 | P3496 Auslassventil Zylinder 12 Steuerkreis - hoch |
| 0x3497 | P3497 | P3497 Zylinderabschaltungssystem (Bank 2) - Fehlfunktion |
| 0xC001 | U0001 | U0001 High Speed CAN-Kommunikationsbus - Fehlfunktion |
| 0xC002 | U0002 | U0002 High Speed CAN-Kommunikationsbus - Leistungsproblem |
| 0xC003 | U0003 | U0003 High Speed CAN-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0xC004 | U0004 | U0004 High Speed CAN-Kommunikationsbus (+) - niedrig |
| 0xC005 | U0005 | U0005 High Speed CAN-Kommunikationsbus (+) - hoch |
| 0xC006 | U0006 | U0006 High Speed CAN-Kommunikationsbus (-) - Leitungsunterbrechung |
| 0xC007 | U0007 | U0007 High Speed CAN-Kommunikationsbus (-) - niedrig |
| 0xC008 | U0008 | U0008 High Speed CAN-Kommunikationsbus (-) - hoch |
| 0xC009 | U0009 | U0009 High Speed CAN-Kommunikationsbus (-) - Kurzschluss mit Bus (+) |
| 0xC010 | U0010 | U0010 Medium Speed CAN-Kommunikationsbus - Fehlfunktion |
| 0xC011 | U0011 | U0011 Medium Speed CAN-Kommunikationsbus - Leistungsproblem |
| 0xC012 | U0012 | U0012 Medium Speed CAN-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0xC013 | U0013 | U0013 Medium Speed CAN-Kommunikationsbus (+) - niedrig |
| 0xC014 | U0014 | U0014 Medium Speed CAN-Kommunikationsbus (+) - hoch |
| 0xC015 | U0015 | U0015 Medium Speed CAN-Kommunikationsbus (-) - Leitungsunterbrechung |
| 0xC016 | U0016 | U0016 Medium Speed CAN-Kommunikationsbus (-) - niedrig |
| 0xC017 | U0017 | U0017 Medium Speed CAN-Kommunikationsbus (-) - hoch |
| 0xC018 | U0018 | U0018 Medium Speed CAN-Kommunikationsbus (-) - Kurzschluss mit Bus (+) |
| 0xC019 | U0019 | U0019 Low Speed CAN-Kommunikationsbus - Fehlfunktion |
| 0xC020 | U0020 | U0020 Low Speed CAN-Kommunikationsbus - Leistungsproblem |
| 0xC021 | U0021 | U0021 Low Speed CAN-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0xC022 | U0022 | U0022 Low Speed CAN-Kommunikationsbus (+) - niedrig |
| 0xC023 | U0023 | U0023 Low Speed CAN-Kommunikationsbus (+) - hoch |
| 0xC024 | U0024 | U0024 Low Speed CAN-Kommunikationsbus (-) - Leitungsunterbrechung |
| 0xC025 | U0025 | U0025 Low Speed CAN-Kommunikationsbus (-) - niedrig |
| 0xC026 | U0026 | U0026 Low Speed CAN-Kommunikationsbus (-) - hoch |
| 0xC027 | U0027 | U0027 Low Speed CAN-Kommunikationsbus (-) - Kurzschluss mit Bus (+) |
| 0xC028 | U0028 | U0028 Fahrzeug-Kommunikationsbus A - Fehlfunktion |
| 0xC029 | U0029 | U0029 Fahrzeug-Kommunikationsbus A - Leistungsproblem |
| 0xC030 | U0030 | U0030 Fahrzeug-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0xC031 | U0031 | U0031 Fahrzeug-Kommunikationsbus A (+) - niedrig |
| 0xC032 | U0032 | U0032 Fahrzeug-Kommunikationsbus A (+) - hoch |
| 0xC033 | U0033 | U0033 Fahrzeug-Kommunikationsbus A (-) - Leitungsunterbrechung |
| 0xC034 | U0034 | U0034 Fahrzeug-Kommunikationsbus A (-) - niedrig |
| 0xC035 | U0035 | U0035 Fahrzeug-Kommunikationsbus A (-) - hoch |
| 0xC036 | U0036 | U0036 Fahrzeug-Kommunikationsbus A (-) - Kurzschluss mit Bus A (+) |
| 0xC037 | U0037 | U0037 Fahrzeug-Kommunikationsbus B - Fehlfunktion |
| 0xC038 | U0038 | U0038 Fahrzeug-Kommunikationsbus B - Leistungsproblem |
| 0xC039 | U0039 | U0039 Fahrzeug-Kommunikationsbus B (+) - Leitungsunterbrechung |
| 0xC040 | U0040 | U0040 Fahrzeug-Kommunikationsbus B (+) - niedrig |
| 0xC041 | U0041 | U0041 Fahrzeug-Kommunikationsbus B (+) - hoch |
| 0xC042 | U0042 | U0042 Fahrzeug-Kommunikationsbus B (-) - Leitungsunterbrechung |
| 0xC043 | U0043 | U0043 Fahrzeug-Kommunikationsbus B (-) - niedrig |
| 0xC044 | U0044 | U0044 Fahrzeug-Kommunikationsbus B (-) - niedrig |
| 0xC045 | U0045 | U0045 Fahrzeug-Kommunikationsbus B (-) - Kurzschluss mit Bus B (+) |
| 0xC046 | U0046 | U0046 Fahrzeug-Kommunikationsbus C - Fehlfunktion |
| 0xC047 | U0047 | U0047 Fahrzeug-Kommunikationsbus C - Leistungsproblem |
| 0xC048 | U0048 | U0048 Fahrzeug-Kommunikationsbus C (+) - Leitungsunterbrechung |
| 0xC049 | U0049 | U0049 Fahrzeug-Kommunikationsbus C (+) - niedrig |
| 0xC050 | U0050 | U0050 Fahrzeug-Kommunikationsbus C (+) - hoch |
| 0xC051 | U0051 | U0051 Fahrzeug-Kommunikationsbus C (-) - Leitungsunterbrechung |
| 0xC052 | U0052 | U0052 Fahrzeug-Kommunikationsbus C (-) - niedrig |
| 0xC053 | U0053 | U0053 Fahrzeug-Kommunikationsbus C (-) - hoch |
| 0xC054 | U0054 | U0054 Fahrzeug-Kommunikationsbus C (-) - Kurzschluss mit Bus C (+) |
| 0xC055 | U0055 | U0055 Fahrzeug-Kommunikationsbus D - Fehlfunktion |
| 0xC056 | U0056 | U0056 Fahrzeug-Kommunikationsbus D - Leistungsproblem |
| 0xC057 | U0057 | U0057 Fahrzeug-Kommunikationsbus D (+) - Leitungsunterbrechung |
| 0xC058 | U0058 | U0058 Fahrzeug-Kommunikationsbus D (+) - niedrig |
| 0xC059 | U0059 | U0059 Fahrzeug-Kommunikationsbus D (+) - hoch |
| 0xC060 | U0060 | U0060 Fahrzeug-Kommunikationsbus D (-) - Leitungsunterbrechung |
| 0xC061 | U0061 | U0061 Fahrzeug-Kommunikationsbus D (-) - niedrig |
| 0xC062 | U0062 | U0062 Fahrzeug-Kommunikationsbus D (-) - hoch |
| 0xC063 | U0063 | U0063 Fahrzeug-Kommunikationsbus D (-) - Kurzschluss mit Bus D (+) |
| 0xC064 | U0064 | U0064 Fahrzeug-Kommunikationsbus E - Fehlfunktion |
| 0xC065 | U0065 | U0065 Fahrzeug-Kommunikationsbus E - Leistungsproblem |
| 0xC066 | U0066 | U0066 Fahrzeug-Kommunikationsbus E (+) - Leitungsunterbrechung |
| 0xC067 | U0067 | U0067 Fahrzeug-Kommunikationsbus E (+) - niedrig |
| 0xC068 | U0068 | U0068 Fahrzeug-Kommunikationsbus E (+) - hoch |
| 0xC069 | U0069 | U0069 Fahrzeug-Kommunikationsbus E (-) - Leitungsunterbrechung |
| 0xC070 | U0070 | U0070 Fahrzeug-Kommunikationsbus E (-) - niedrig |
| 0xC071 | U0071 | U0071 Fahrzeug-Kommunikationsbus E (-) - hoch |
| 0xC072 | U0072 | U0072 Fahrzeug-Kommunikationsbus E (-) - Kurzschluss mit Bus E (+) |
| 0xC073 | U0073 | U0073 Steuergerätekommunikation - Bus 'A' Off |
| 0xC074 | U0074 | U0074 Steuergerätekommunikation - Bus 'B' Off |
| 0xC075 | U0075 | U0075 Steuergerätekommunikation - Bus 'C' Off |
| 0xC076 | U0076 | U0076 Steuergerätekommunikation - Bus 'D' Off |
| 0xC080 | U0080 | U0080 Fahrzeug-Kommunikationsbus F - Fehlfunktion |
| 0xC081 | U0081 | U0081 Fahrzeug-Kommunikationsbus F - Leistungsproblem |
| 0xC082 | U0082 | U0082 Fahrzeug-Kommunikationsbus F (+) - Leitungsunterbrechung |
| 0xC083 | U0083 | U0083 Fahrzeug-Kommunikationsbus F (+) - niedrig |
| 0xC084 | U0084 | U0084 Fahrzeug-Kommunikationsbus F (+) - hoch |
| 0xC085 | U0085 | U0085 Fahrzeug-Kommunikationsbus F (-) - Leitungsunterbrechung |
| 0xC086 | U0086 | U0086 Fahrzeug-Kommunikationsbus F (-) - niedrig |
| 0xC087 | U0087 | U0087 Fahrzeug-Kommunikationsbus F (-) - hoch |
| 0xC088 | U0088 | U0088 Fahrzeug-Kommunikationsbus F (-) - Kurzschluss mit Bus F (+) |
| 0xC100 | U0100 | U0100 Kommunikationsverlust mit Motorsteuergerät/Powertrain Steuergerät 1 |
| 0xC101 | U0101 | U0101 Kommunikationsverlust mit Getriebesteuergerät |
| 0xC102 | U0102 | U0102 Kommunikationsverlust mit Verteilergetriebe Steuergerät |
| 0xC103 | U0103 | U0103 Kommunikationsverlust mit Schaltungs-Steuergerät 1 |
| 0xC104 | U0104 | U0104 Kommunikationsverlust mit Fahrgeschwindigkeitsregelungs-Steuergerät |
| 0xC105 | U0105 | U0105 Kommunikationsverlust mit Einspritzventil-Steuergerät |
| 0xC106 | U0106 | U0106 Kommunikationsverlust mit Glühkerzen-Steuergerät |
| 0xC107 | U0107 | U0107 Kommunikationsverlust mit Drosselklappensteller-Steuergerät (Bank 1) |
| 0xC108 | U0108 | U0108 Kommunikationsverlust mit Alternativkraftstoff-Steuergerät |
| 0xC109 | U0109 | U0109 Kommunikationsverlust mit Kraftstoffpumpen-Steuergerät |
| 0xC10A | U010A | U010A Kommunikationsverlust mit Abgasrückführungs-Steuergerät 1 |
| 0xC10B | U010B | U010B Kommunikationsverlust mit Abgasrückführungs-Steuergerät 2 |
| 0xC10C | U010C | U010C Kommunikationsverlust mit Turbolader/Verdichter-Steuergerät (Bank 1) |
| 0xC10D | U010D | U010D Kommunikationsverlust mit Turbolader/Verdichter-Steuergerät (Bank 2) |
| 0xC10E | U010E | U010E Kommunikationsverlust mit Reduktionsmittel-Steuergerät |
| 0xC10F | U010F | U010F Kommunikationsverlust mit Klimaanlagen-Steuergerät |
| 0xC110 | U0110 | U0110 Kommunikationsverlust mit Antriebsmotor-Steuergerät 1 |
| 0xC111 | U0111 | U0111 Kommunikationsverlust mit Batterie-Steuergerät 1 |
| 0xC112 | U0112 | U0112 Kommunikationsverlust mit Batterie-Steuergerät 2 |
| 0xC114 | U0114 | U0114 Kommunikationsverlust mit Kupplungs-Steuergerät Allrad |
| 0xC115 | U0115 | U0115 Kommunikationsverlust mit Motorsteuergerät/Powertrain Steuergerät 2 |
| 0xC116 | U0116 | U0116 Kommunikationsverlust mit Kühlmitteltemperatur-Steuergerät |
| 0xC117 | U0117 | U0117 Kommunikationsverlust mit Nebenabtriebs-Steuergerät |
| 0xC118 | U0118 | U0118 Kommunikationsverlust mit Kraftstoffadditiv-Steuergerät |
| 0xC119 | U0119 | U0119 Kommunikationsverlust mit Brennstoffzellen-Steuergerät |
| 0xC11E | U011E | U011E Kommunikationsverlust mit Drosselklappensteller-Steuergerät (Bank 2) |
| 0xC120 | U0120 | U0120 Kommunikationsverlust mit Anlasser-/Generator-Steuergerät |
| 0xC121 | U0121 | U0121 Kommunikationsverlust mit ABS Bremssystem-Steuergerät |
| 0xC122 | U0122 | U0122 Kommunikationsverlust mit Fahrdynamik-Steuergerät |
| 0xC123 | U0123 | U0123 Kommunikationsverlust mit Gierratensensor-Modul |
| 0xC124 | U0124 | U0124 Kommunikationsverlust mit Querbeschleunigungssensor-Modul |
| 0xC125 | U0125 | U0125 Kommunikationsverlust mit Mehrachsen-Beschleunigungssensor-Modul |
| 0xC126 | U0126 | U0126 Kommunikationsverlust mit Lenkwinkelsensor (LWS)-Modul |
| 0xC127 | U0127 | U0127 Kommunikationsverlust mit Reifendruck-Überwachungsmodul |
| 0xC128 | U0128 | U0128 Kommunikationsverlust mit Feststellbremsen-Steuergerät |
| 0xC129 | U0129 | U0129 Kommunikationsverlust mit Bremssystem-Steuergerät |
| 0xC12A | U012A | U012A Kommunikationsverlust mit Fahrgestell-Steuergerät 1 |
| 0xC12B | U012B | U012B Kommunikationsverlust mit Fahrgestell-Steuergerät 2 |
| 0xC130 | U0130 | U0130 Kommunikationsverlust mit Lenkkraft-Steuergerät |
| 0xC131 | U0131 | U0131 Kommunikationsverlust mit Servolenkungs-Steuergerät |
| 0xC132 | U0132 | U0132 Kommunikationsverlust mit Federungs-Steuergerät 1 |
| 0xC134 | U0134 | U0134 Kommunikationsverlust mit Servolenkungs-Steuergerät (hinten) |
| 0xC135 | U0135 | U0135 Kommunikationsverlust mit Differential-Steuergerät (vorne) |
| 0xC136 | U0136 | U0136 Kommunikationsverlust mit Differential-Steuergerät (hinten) |
| 0xC137 | U0137 | U0137 Kommunikationsverlust mit Anhängerbremsen-Steuergerät |
| 0xC138 | U0138 | U0138 Kommunikationsverlust mit Gelände-Steuergerät |
| 0xC139 | U0139 | U0139 Kommunikationsverlust mit Federungs-Steuergerät 2 |
| 0xC140 | U0140 | U0140 Kommunikationsverlust mit Karosserie-Steuergerät |
| 0xC141 | U0141 | U0141 Kommunikationsverlust mit Karosserie-Steuergerät 1 |
| 0xC142 | U0142 | U0142 Kommunikationsverlust mit Karosserie-Steuergerät 2 |
| 0xC143 | U0143 | U0143 Kommunikationsverlust mit Karosserie-Steuergerät 3 |
| 0xC144 | U0144 | U0144 Kommunikationsverlust mit Karosserie-Steuergerät 4 |
| 0xC145 | U0145 | U0145 Kommunikationsverlust mit Karosserie-Steuergerät 5 |
| 0xC146 | U0146 | U0146 Kommunikationsverlust mit Gateway 1 |
| 0xC147 | U0147 | U0147 Kommunikationsverlust mit Gateway 2 |
| 0xC148 | U0148 | U0148 Kommunikationsverlust mit Gateway 3 |
| 0xC149 | U0149 | U0149 Kommunikationsverlust mit Gateway 4 |
| 0xC150 | U0150 | U0150 Kommunikationsverlust mit Gateway 5 |
| 0xC151 | U0151 | U0151 Kommunikationsverlust mit Rückhaltesystem-Steuergerät |
| 0xC152 | U0152 | U0152 Kommunikationsverlust mit seitlichem Rückhaltesystem-Steuergerät (links) |
| 0xC153 | U0153 | U0153 Kommunikationsverlust mit seitlichem Rückhaltesystem-Steuergerät (rechts) |
| 0xC155 | U0155 | U0155 Kommunikationsverlust mit Instrumentenkombination-Steuergerät |
| 0xC156 | U0156 | U0156 Kommunikationsverlust mit Informationszentrum 1 |
| 0xC157 | U0157 | U0157 Kommunikationsverlust mit Informationszentrum 2 |
| 0xC158 | U0158 | U0158 Kommunikationsverlust mit Head Up Display |
| 0xC159 | U0159 | U0159 Kommunikationsverlust mit Einparkhilfe-Steuergerät 1 |
| 0xC160 | U0160 | U0160 Kommunikationsverlust mit akustischem Warn-Steuergerät |
| 0xC161 | U0161 | U0161 Kommunikationsverlust mit Kompass-Modul |
| 0xC162 | U0162 | U0162 Kommunikationsverlust mit Navigations-Dispay-Modul |
| 0xC163 | U0163 | U0163 Kommunikationsverlust mit Navigations-Steuergerät |
| 0xC164 | U0164 | U0164 Kommunikationsverlust mit Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät |
| 0xC165 | U0165 | U0165 Kommunikationsverlust mit Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät (hinten) |
| 0xC166 | U0166 | U0166 Kommunikationsverlust mit Zusatzheizer-Steuergerät |
| 0xC167 | U0167 | U0167 Kommunikationsverlust mit EWS (elektronische Wegfahrsperre)-Steuergerät |
| 0xC168 | U0168 | U0168 Kommunikationsverlust mit Fahrzeugsicherheits-Steuergerät |
| 0xC169 | U0169 | U0169 Kommunikationsverlust mit Schiebedach-Steuergerät |
| 0xC16A | U016A | U016A Kommunikationsverlust mit GPS-Modul |
| 0xC170 | U0170 | U0170 Kommunikationsverlust mit Rückhaltesystem Sensor 1 |
| 0xC171 | U0171 | U0171 Kommunikationsverlust mit Rückhaltesystem Sensor 2 |
| 0xC172 | U0172 | U0172 Kommunikationsverlust mit Rückhaltesystem Sensor 3 |
| 0xC173 | U0173 | U0173 Kommunikationsverlust mit Rückhaltesystem Sensor 4 |
| 0xC174 | U0174 | U0174 Kommunikationsverlust mit Rückhaltesystem Sensor 5 |
| 0xC175 | U0175 | U0175 Kommunikationsverlust mit Rückhaltesystem Sensor 6 |
| 0xC176 | U0176 | U0176 Kommunikationsverlust mit Rückhaltesystem Sensor 7 |
| 0xC177 | U0177 | U0177 Kommunikationsverlust mit Rückhaltesystem Sensor 8 |
| 0xC178 | U0178 | U0178 Kommunikationsverlust mit Rückhaltesystem Sensor 9 |
| 0xC179 | U0179 | U0179 Kommunikationsverlust mit Rückhaltesystem Sensor 10 |
| 0xC17A | U017A | U017A Kommunikationsverlust mit Rückhaltesystem Sensor 11 |
| 0xC17B | U017B | U017B Kommunikationsverlust mit Rückhaltesystem Sensor 12 |
| 0xC17C | U017C | U017C Kommunikationsverlust mit Rückhaltesystem Sensor 13 |
| 0xC17D | U017D | U017D Kommunikationsverlust mit Rückhaltesystem Sensor 14 |
| 0xC180 | U0180 | U0180 Kommunikationsverlust mit autom. Beleuchtungs-Steuergerät |
| 0xC181 | U0181 | U0181 Kommunikationsverlust mit Leuchtweitenregulierungs-Steuergerät |
| 0xC182 | U0182 | U0182 Kommunikationsverlust mit Beleuchtungs-Steuergerät (vorne) |
| 0xC183 | U0183 | U0183 Kommunikationsverlust mit Beleuchtungs-Steuergerät (hinten A) |
| 0xC184 | U0184 | U0184 Kommunikationsverlust mit Radio |
| 0xC185 | U0185 | U0185 Kommunikationsverlust mit Antennen-Steuergerät |
| 0xC186 | U0186 | U0186 Kommunikationsverlust mit Audio Verstärker 1 |
| 0xC187 | U0187 | U0187 Kommunikationsverlust mit Digital-Disk Spieler/-Wechsler Steuergerät 1 |
| 0xC188 | U0188 | U0188 Kommunikationsverlust mit Digital-Disk Spieler/-Wechsler Steuergerät 2 |
| 0xC189 | U0189 | U0189 Kommunikationsverlust mit Digital-Disk Spieler/-Wechsler Steuergerät 3 |
| 0xC190 | U0190 | U0190 Kommunikationsverlust mit Digital-Disk Spieler/-Wechsler Steuergerät 4 |
| 0xC191 | U0191 | U0191 Kommunikationsverlust mit Fernsehen |
| 0xC192 | U0192 | U0192 Kommunikationsverlust mit Personalcomputer |
| 0xC196 | U0196 | U0196 Kommunikationsverlust mit Entertainment-Steuergerät - (hinten A) |
| 0xC197 | U0197 | U0197 Kommunikationsverlust mit Telefon-Steuergerät |
| 0xC198 | U0198 | U0198 Kommunikationsverlust mit Telematik-Steuergerät |
| 0xC199 | U0199 | U0199 Kommunikationsverlust mit Tür-Steuergerät 1 |
| 0xC200 | U0200 | U0200 Kommunikationsverlust mit Tür-Steuergerät 2 |
| 0xC201 | U0201 | U0201 Kommunikationsverlust mit Tür-Steuergerät 3 |
| 0xC202 | U0202 | U0202 Kommunikationsverlust mit Tür-Steuergerät 4 |
| 0xC203 | U0203 | U0203 Kommunikationsverlust mit Tür-Steuergerät 5 |
| 0xC204 | U0204 | U0204 Kommunikationsverlust mit Tür-Steuergerät 6 |
| 0xC205 | U0205 | U0205 Kommunikationsverlust mit Tür-Steuergerät 7 |
| 0xC206 | U0206 | U0206 Kommunikationsverlust mit Verdeck-Steuergerät |
| 0xC208 | U0208 | U0208 Kommunikationsverlust mit Sitz-Steuergerät 1 |
| 0xC209 | U0209 | U0209 Kommunikationsverlust mit Sitz-Steuergerät 2 |
| 0xC210 | U0210 | U0210 Kommunikationsverlust mit Sitz-Steuergerät 3 |
| 0xC211 | U0211 | U0211 Kommunikationsverlust mit Sitz-Steuergerät 4 |
| 0xC212 | U0212 | U0212 Kommunikationsverlust mit Lenksäulen-Steuergerät |
| 0xC213 | U0213 | U0213 Kommunikationsverlust mit Spiegel-Steuergerät |
| 0xC214 | U0214 | U0214 Kommunikationsverlust mit Fernbedienungsfunktion |
| 0xC215 | U0215 | U0215 Kommunikationsverlust mit Türschalter 1 |
| 0xC216 | U0216 | U0216 Kommunikationsverlust mit Türschalter 2 |
| 0xC217 | U0217 | U0217 Kommunikationsverlust mit Türschalter 3 |
| 0xC218 | U0218 | U0218 Kommunikationsverlust mit Türschalter 4 |
| 0xC219 | U0219 | U0219 Kommunikationsverlust mit Türschalter 5 |
| 0xC220 | U0220 | U0220 Kommunikationsverlust mit Türschalter 6 |
| 0xC221 | U0221 | U0221 Kommunikationsverlust mit Türschalter 7 |
| 0xC222 | U0222 | U0222 Kommunikationsverlust mit Fensterhebermotor 1 |
| 0xC223 | U0223 | U0223 Kommunikationsverlust mit Fensterhebermotor 2 |
| 0xC224 | U0224 | U0224 Kommunikationsverlust mit Fensterhebermotor 3 |
| 0xC225 | U0225 | U0225 Kommunikationsverlust mit Fensterhebermotor 4 |
| 0xC226 | U0226 | U0226 Kommunikationsverlust mit Fensterhebermotor 5 |
| 0xC227 | U0227 | U0227 Kommunikationsverlust mit Fensterhebermotor 6 |
| 0xC228 | U0228 | U0228 Kommunikationsverlust mit Fensterhebermotor 7 |
| 0xC229 | U0229 | U0229 Kommunikationsverlust mit Modul heizbarem Lenkrad |
| 0xC230 | U0230 | U0230 Kommunikationsverlust mit Heckklappenmodul |
| 0xC231 | U0231 | U0231 Kommunikationsverlust mit Regensensor-Modul |
| 0xC235 | U0235 | U0235 Kommunikationsverlust mit Fahrgeschwindigkeitsregelung Abstandsmesser vorn (Einzeln oder Mitte) |
| 0xC236 | U0236 | U0236 Kommunikationsverlust mit Lenksäulenschloss-Modul |
| 0xC23D | U023D | U023D Kommunikationsverlust mit Fahrgeschwindigkeitsregelung Abstandsmesser vorn links |
| 0xC23E | U023E | U023E Kommunikationsverlust mit Fahrgeschwindigkeitsregelung Abstandsmesser vorn rechts |
| 0xC241 | U0241 | U0241 Kommunikationsverlust mit Scheinwerfer-Steuergerät 1 |
| 0xC242 | U0242 | U0242 Kommunikationsverlust mit Scheinwerfer-Steuergerät 2 |
| 0xC243 | U0243 | U0243 Kommunikationsverlust mit Einparkhilfe-Steuergerät 2 |
| 0xC244 | U0244 | U0244 Kommunikationsverlust mit Trittbrett-Steuergerät 1 |
| 0xC245 | U0245 | U0245 Kommunikationsverlust mit Entertainment-Steuergerät (vorne) |
| 0xC246 | U0246 | U0246 Kommunikationsverlust mit Sitz-Steuergerät 5 |
| 0xC247 | U0247 | U0247 Kommunikationsverlust mit Sitz-Steuergerät 6 |
| 0xC249 | U0249 | U0249 Kommunikationsverlust mit Entertainment-Steuergerät (hinten B) |
| 0xC24A | U024A | U024A Kommunikationsverlust mit Innenlicht-Steuergerät |
| 0xC24B | U024B | U024B Kommunikationsverlust mit Sitz-Steuergerät 7 |
| 0xC24C | U024C | U024C Kommunikationsverlust mit Sitz-Steuergerät 8 |
| 0xC251 | U0251 | U0251 Kommunikationsverlust mit Trittbrett-Steuergerät 2 |
| 0xC252 | U0252 | U0252 Kommunikationsverlust mit Beleuchtungs-Steuergerät (hinten B) |
| 0xC254 | U0254 | U0254 Kommunikationsverlust mit Fernstart-Modul |
| 0xC258 | U0258 | U0258 Kommunikationsverlust mit Funksender/-empfänger |
| 0xC259 | U0259 | U0259 Kommunikationsverlust mit Spezialfahrzeug-Steuergerät 1 |
| 0xC25A | U025A | U025A Kommunikationsverlust mit Spezialfahrzeug-Steuergerät 2 |
| 0xC25B | U025B | U025B Kommunikationsverlust mit Spezialfahrzeug-Steuergerät 3 |
| 0xC25C | U025C | U025C Kommunikationsverlust mit Spezialfahrzeug-Steuergerät 4 |
| 0xC260 | U0260 | U0260 Kommunikationsverlust mit Sitzverstellschalter 1 |
| 0xC261 | U0261 | U0261 Kommunikationsverlust mit Sitzverstellschalter 2 |
| 0xC262 | U0262 | U0262 Kommunikationsverlust mit Audio Verstärker 2 |
| 0xC263 | U0263 | U0263 Kommunikationsverlust mit Spracherkennungs-Modul |
| 0xC264 | U0264 | U0264 Kommunikationsverlust mit Kameramodul (hinten) |
| 0xC265 | U0265 | U0265 Kommunikationsverlust mit Bildverarbeitungssensor 1 |
| 0xC266 | U0266 | U0266 Kommunikationsverlust mit Bildverarbeitungssensor 2 |
| 0xC267 | U0267 | U0267 Kommunikationsverlust mit Bildverarbeitungssensor 3 |
| 0xC268 | U0268 | U0268 Kommunikationsverlust mit Bildverarbeitungssensor 4 |
| 0xC269 | U0269 | U0269 Kommunikationsverlust mit Bildverarbeitungssensor 5 |
| 0xC26A | U026A | U026A Kommunikationsverlust mit Bildverarbeitungssensor 6 |
| 0xC26B | U026B | U026B Kommunikationsverlust mit Bildverarbeitungssensor 7 |
| 0xC26C | U026C | U026C Kommunikationsverlust mit Bildverarbeitungssensor 8 |
| 0xC26D | U026D | U026D Kommunikationsverlust mit Bildverarbeitungssensor 9 |
| 0xC26E | U026E | U026E Kommunikationsverlust mit Bildverarbeitungssensor 10 |
| 0xC26F | U026F | U026F Kommunikationsverlust mit Bildverarbeitungssensor 11 |
| 0xC270 | U0270 | U0270 Kommunikationsverlust mit Bildverarbeitungssensor 12 |
| 0xC287 | U0287 | U0287 Kommunikationsverlust mit Getriebeölpumpen-Modul |
| 0xC291 | U0291 | U0291 Kommunikationsverlust mit Schaltungs-Steuergerät 2 |
| 0xC292 | U0292 | U0292 Kommunikationsverlust mit Antriebsmotor-Steuergerät 2 |
| 0xC293 | U0293 | U0293 Kommunikationsverlust mit Hybridantriebs-Steuergerät |
| 0xC294 | U0294 | U0294 Kommunikationsverlust mit Powertrain-Überwachungsmodul |
| 0xC295 | U0295 | U0295 Kommunikationsverlust mit AC/AC-Wandler-Steuergerät |
| 0xC296 | U0296 | U0296 Kommunikationsverlust mit AC/DC-Wandler-Steuergerät 1 |
| 0xC297 | U0297 | U0297 Kommunikationsverlust mit AC/DC-Wandler-Steuergerät 2 |
| 0xC298 | U0298 | U0298 Kommunikationsverlust mit DC/DC-Wandler-Steuergerät 1 |
| 0xC299 | U0299 | U0299 Kommunikationsverlust mit DC/DC-Wandler-Steuergerät 2 |
| 0xC29D | U029D | U029D Kommunikationsverlust mit NOx-Sensor (Bank 1) |
| 0xC29E | U029E | U029E Kommunikationsverlust mit NOx-Sensor (Bank 2) |
| 0xC300 | U0300 | U0300 Steuergerät - interner Software-Kompatibilitätsfehler |
| 0xC301 | U0301 | U0301 Software-Inkompatibilität mit Motorsteuergerät/Powertrain Steuergerät |
| 0xC302 | U0302 | U0302 Software-Inkompatibilität mit Getriebesteuergerät |
| 0xC303 | U0303 | U0303 Software-Inkompatibilität mit Verteilergetriebe Steuergerät |
| 0xC304 | U0304 | U0304 Software-Inkompatibilität mit Schaltungs-Steuergerät 1 |
| 0xC305 | U0305 | U0305 Software-Inkompatibilität mit Fahrgeschwindigkeitsregelungs-Steuergerät |
| 0xC306 | U0306 | U0306 Software-Inkompatibilität mit Einspritzventil-Steuergerät |
| 0xC307 | U0307 | U0307 Software-Inkompatibilität mit Glühkerzen-Steuergerät |
| 0xC308 | U0308 | U0308 Software-Inkompatibilität mit Drosselklappensteller-Steuergerät |
| 0xC309 | U0309 | U0309 Software-Inkompatibilität mit Alternativkraftstoff-Steuergerät |
| 0xC310 | U0310 | U0310 Software-Inkompatibilität mit Kraftstoffpumpen-Steuergerät |
| 0xC311 | U0311 | U0311 Software-Inkompatibilität mit Antriebsmotor-Steuergerät 1 |
| 0xC312 | U0312 | U0312 Software-Inkompatibilität mit Batterie-Steuergerät 1 |
| 0xC313 | U0313 | U0313 Software-Inkompatibilität mit Batterie-Steuergerät 2 |
| 0xC314 | U0314 | U0314 Software-Inkompatibilität mit Kupplungs-Steuergerät Allrad |
| 0xC315 | U0315 | U0315 Software-Inkompatibilität mit ABS Bremssystem-Steuergerät |
| 0xC316 | U0316 | U0316 Software-Inkompatibilität mit Fahrdynamik-Steuergerät |
| 0xC317 | U0317 | U0317 Software-Inkompatibilität mit Feststellbremsen-Steuergerät |
| 0xC318 | U0318 | U0318 Software-Inkompatibilität mit Bremssystem-Steuergerät |
| 0xC319 | U0319 | U0319 Software-Inkompatibilität mit Lenkkraft-Steuergerät |
| 0xC320 | U0320 | U0320 Software-Inkompatibilität mit Servolenkungs-Steuergerät |
| 0xC321 | U0321 | U0321 Software-Inkompatibilität mit Federungs-Steuergerät 1 |
| 0xC322 | U0322 | U0322 Software-Inkompatibilität mit Karosserie-Steuergerät |
| 0xC323 | U0323 | U0323 Software-Inkompatibilität mit Instrumententafel-Steuergerät |
| 0xC324 | U0324 | U0324 Software-Inkompatibilität mit Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät |
| 0xC325 | U0325 | U0325 Software-Inkompatibilität mit Zusatzheizer-Steuergerät |
| 0xC326 | U0326 | U0326 Software-Inkompatibilität mit EWS (elektronische Wegfahrsperre)-Steuergerät |
| 0xC327 | U0327 | U0327 Software-Inkompatibilität mit Fahrzeugsicherheits-Steuergerät |
| 0xC328 | U0328 | U0328 Software-Inkompatibilität mit Lenkwinkelsensor (LWS)-Modul |
| 0xC329 | U0329 | U0329 Software-Inkompatibilität mit Lenksäulen-Steuergerät |
| 0xC330 | U0330 | U0330 Software-Inkompatibilität mit Reifendruck-Überwachungsmodul |
| 0xC331 | U0331 | U0331 Software-Inkompatibilität mit Karosserie-Steuergerät 1 |
| 0xC332 | U0332 | U0332 Software-Inkompatibilität mit Mehrachsen-Beschleunigungssensor-Modul |
| 0xC333 | U0333 | U0333 Software-Inkompatibilität mit Schaltungs-Steuergerät 2 |
| 0xC334 | U0334 | U0334 Software-Inkompatibilität mit Radio |
| 0xC400 | U0400 | U0400 Ungültige Daten erhalten |
| 0xC401 | U0401 | U0401 Ungültige Daten erhalten vom Motorsteuergerät/Powertrain Steuergerät 1 |
| 0xC402 | U0402 | U0402 Ungültige Daten erhalten vom Getriebesteuergerät |
| 0xC403 | U0403 | U0403 Ungültige Daten erhalten vom Verteilergetriebe Steuergerät |
| 0xC404 | U0404 | U0404 Ungültige Daten erhalten vom Schaltungs-Steuergerät 1 |
| 0xC405 | U0405 | U0405 Ungültige Daten erhalten vom Fahrgeschwindigkeitsregelungs-Steuergerät |
| 0xC406 | U0406 | U0406 Ungültige Daten erhalten vom Einspritzventil-Steuergerät |
| 0xC407 | U0407 | U0407 Ungültige Daten erhalten vom Glühkerzen-Steuergerät |
| 0xC408 | U0408 | U0408 Ungültige Daten erhalten vom Drosselklappensteller-Steuergerät (Bank 1) |
| 0xC409 | U0409 | U0409 Ungültige Daten erhalten vom Alternativkraftstoff-Steuergerät |
| 0xC40A | U040A | U040A Kommunikationsverlust mit Klimaanlagen-Steuergerät |
| 0xC40B | U040B | U040B Ungültige Daten erhalten vom Abgasrückführungs-Steuergerät 1 |
| 0xC40C | U040C | U040C Ungültige Daten erhalten vom Abgasrückführungs-Steuergerät 2 |
| 0xC40D | U040D | U040D Ungültige Daten erhalten vom Turbolader/Verdichter-Steuergerät (Bank 1) |
| 0xC40E | U040E | U040E Ungültige Daten erhalten vom Turbolader/Verdichter-Steuergerät (Bank 2) |
| 0xC40F | U040F | U040F Ungültige Daten erhalten vom Reduktionsmittel-Steuergerät |
| 0xC410 | U0410 | U0410 Ungültige Daten erhalten vom Kraftstoffpumpen-Steuergerät |
| 0xC411 | U0411 | U0411 Ungültige Daten erhalten vom Antriebsmotor-Steuergerät 1 |
| 0xC412 | U0412 | U0412 Ungültige Daten erhalten vom Batterie-Steuergerät 1 |
| 0xC413 | U0413 | U0413 Ungültige Daten erhalten vom Batterie-Steuergerät 2 |
| 0xC414 | U0414 | U0414 Ungültige Daten erhalten vom Kupplungs-Steuergerät Allrad |
| 0xC415 | U0415 | U0415 Ungültige Daten erhalten vom ABS Bremssystem-Steuergerät |
| 0xC416 | U0416 | U0416 Ungültige Daten erhalten vom Fahrdynamik-Steuergerät |
| 0xC417 | U0417 | U0417 Ungültige Daten erhalten vom Feststellbremsen-Steuergerät |
| 0xC418 | U0418 | U0418 Ungültige Daten erhalten vom Bremssystem-Steuergerät |
| 0xC419 | U0419 | U0419 Ungültige Daten erhalten vom Lenkkraft-Steuergerät |
| 0xC41F | U041F | U041F Ungültige Daten erhalten vom Drosselklappensteller-Steuergerät (Bank 2) |
| 0xC420 | U0420 | U0420 Ungültige Daten erhalten vom Servolenkungs-Steuergerät |
| 0xC421 | U0421 | U0421 Ungültige Daten erhalten vom Federungs-Steuergerät 1 |
| 0xC422 | U0422 | U0422 Ungültige Daten erhalten vom Karosserie-Steuergerät |
| 0xC423 | U0423 | U0423 Ungültige Daten erhalten vom Instrumententafel-Steuergerät |
| 0xC424 | U0424 | U0424 Ungültige Daten erhalten vom Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät |
| 0xC425 | U0425 | U0425 Ungültige Daten erhalten vom Zusatzheizer-Steuergerät |
| 0xC426 | U0426 | U0426 Ungültige Daten erhalten vom EWS (elektronische Wegfahrsperre)-Steuergerät |
| 0xC427 | U0427 | U0427 Ungültige Daten erhalten vom Fahrzeugsicherheits-Steuergerät |
| 0xC428 | U0428 | U0428 Ungültige Daten erhalten vom Lenkwinkelsensor (LWS)-Modul |
| 0xC429 | U0429 | U0429 Ungültige Daten erhalten vom Lenksäulen-Steuergerät |
| 0xC42B | U042B | U042B Ungültige Daten erhalten vom Fahrgestell-Steuergerät 1 |
| 0xC42C | U042C | U042C Ungültige Daten erhalten vom Fahrgestell-Steuergerät 2 |
| 0xC430 | U0430 | U0430 Ungültige Daten erhalten vom Reifendruck-Überwachungsmodul |
| 0xC431 | U0431 | U0431 Ungültige Daten erhalten vom Karosserie-Steuergerät 1 |
| 0xC432 | U0432 | U0432 Ungültige Daten erhalten vom Mehrachsen-Beschleunigungssensor-Modul |
| 0xC433 | U0433 | U0433 Ungültige Daten erhalten vom Fahrgeschwindigkeitsregelung Abstandsmesser vorn (Einzeln oder Mitte) |
| 0xC435 | U0435 | U0435 Ungültige Daten erhalten vom Servolenkungs-Steuergerät hinten |
| 0xC436 | U0436 | U0436 Ungültige Daten erhalten vom Differential-Steuergerät (vorne) |
| 0xC437 | U0437 | U0437 Ungültige Daten erhalten vom Differential-Steuergerät (hinten) |
| 0xC438 | U0438 | U0438 Ungültige Daten erhalten vom Anhängerbremsen-Steuergerät |
| 0xC43A | U043A | U043A Ungültige Daten erhalten vom Federungs-Steuergerät 2 |
| 0xC43B | U043B | U043B Ungültige Daten erhalten vom Fahrgeschwindigkeitsregelung Abstandsmesser vorn links |
| 0xC43C | U043C | U043C Ungültige Daten erhalten vom Fahrgeschwindigkeitsregelung Abstandsmesser vorn rechts |
| 0xC442 | U0442 | U0442 Ungültige Daten erhalten vom Motorsteuergerät/Powertrain Steuergerät 2 |
| 0xC443 | U0443 | U0443 Ungültige Daten erhalten vom Karosserie-Steuergerät 2 |
| 0xC444 | U0444 | U0444 Ungültige Daten erhalten vom Karosserie-Steuergerät 3 |
| 0xC445 | U0445 | U0445 Ungültige Daten erhalten vom Karosserie-Steuergerät 4 |
| 0xC446 | U0446 | U0446 Ungültige Daten erhalten vom Karosserie-Steuergerät 5 |
| 0xC447 | U0447 | U0447 Ungültige Daten erhalten vom Gateway 1 |
| 0xC448 | U0448 | U0448 Ungültige Daten erhalten vom Gateway 2 |
| 0xC449 | U0449 | U0449 Ungültige Daten erhalten vom Gateway 3 |
| 0xC450 | U0450 | U0450 Ungültige Daten erhalten vom Gateway 4 |
| 0xC451 | U0451 | U0451 Ungültige Daten erhalten vom Gateway 5 |
| 0xC452 | U0452 | U0452 Ungültige Daten erhalten vom Rückhaltesystem-Steuergerät |
| 0xC453 | U0453 | U0453 Ungültige Daten erhalten vom seitlichem Rückhaltesystem-Steuergerät (links) |
| 0xC454 | U0454 | U0454 Ungültige Daten erhalten vom seitlichem Rückhaltesystem-Steuergerät (rechts) |
| 0xC456 | U0456 | U0456 Ungültige Daten erhalten vom Kühlmitteltemperatur-Steuergerät |
| 0xC457 | U0457 | U0457 Ungültige Daten erhalten vom Informationszentrum 1 |
| 0xC458 | U0458 | U0458 Ungültige Daten erhalten vom Informationszentrum 2 |
| 0xC459 | U0459 | U0459 Ungültige Daten erhaltem vom Head Up Display |
| 0xC462 | U0462 | U0462 Ungültige Daten erhalten vom Kompass-Modul |
| 0xC465 | U0465 | U0465 Ungültige Daten erhalten vom Nebenabtriebs-Steuergerät |
| 0xC468 | U0468 | U0468 Ungültige Datern erhalten vom Brennstoffzellen-Steuergerät |
| 0xC469 | U0469 | U0469 Ungültige Daten erhalten vom Anlasser-/Generator-Steuergerät |
| 0xC46A | U046A | U046A Ungültige Daten erhalten vom Schiebedach-Steuergerät |
| 0xC46B | U046B | U046B ungültige Daten erhalten vom GPS-Modul |
| 0xC471 | U0471 | U0471 Ungültige Daten erhalten vom Rückhaltesystem Sensor 1 |
| 0xC472 | U0472 | U0472 Ungültige Daten erhalten vom Rückhaltesystem Sensor 2 |
| 0xC473 | U0473 | U0473 Ungültige Daten erhalten vom Rückhaltesystem Sensor 3 |
| 0xC474 | U0474 | U0474 Ungültige Daten erhalten vom Rückhaltesystem Sensor 4 |
| 0xC475 | U0475 | U0475 Ungültige Daten erhalten vom Rückhaltesystem Sensor 5 |
| 0xC476 | U0476 | U0476 Ungültige Daten erhalten vom Rückhaltesystem Sensor 6 |
| 0xC477 | U0477 | U0477 Ungültige Daten erhalten vom Rückhaltesystem Sensor 7 |
| 0xC478 | U0478 | U0478 Ungültige Daten erhalten vom Rückhaltesystem Sensor 8 |
| 0xC479 | U0479 | U0479 Ungültige Daten erhalten vom Rückhaltesystem Sensor 9 |
| 0xC47A | U047A | U047A Ungültige Daten erhalten vom Rückhaltesystem Sensor 10 |
| 0xC47B | U047B | U047B Ungültige Daten erhalten vom Rückhaltesystem Sensor 11 |
| 0xC47C | U047C | U047C Ungültige Daten erhalten vom Rückhaltesystem Sensor 12 |
| 0xC47D | U047D | U047D Ungültige Daten erhalten vom Rückhaltesystem Sensor 13 |
| 0xC47E | U047E | U047E Ungültige Daten erhalten vom Rückhaltesystem Sensor 14 |
| 0xC482 | U0482 | U0482 Ungültige Daten erhalten vom Leuchtweitenregulierungs-Steuergerät |
| 0xC485 | U0485 | U0485 Ungültige Daten erhalten vom Radio |
| 0xC486 | U0486 | U0486 Ungültige Daten erhalten vom Antennen-Steuergerät |
| 0xC487 | U0487 | U0487 Ungültige Daten erhalten vom Audio Verstärker 1 |
| 0xC488 | U0488 | U0488 Ungültige Dater erhalten vom Digital-Disk Spieler/-Wechsler Steuergerät 1 |
| 0xC489 | U0489 | U0489 Ungültige Dater erhalten vom Digital-Disk Spieler/-Wechsler Steuergerät 2 |
| 0xC48A | U048A | U048A Ungültige Dater erhalten vom Digital-Disk Spieler/-Wechsler Steuergerät 3 |
| 0xC491 | U0491 | U0491 Ungültige Dater erhalten vom Digital-Disk Spieler/-Wechsler Steuergerät 4 |
| 0xC492 | U0492 | U0492 Ungültige Daten erhalten vom Fernsehen |
| 0xC493 | U0493 | U0493 Ungültige Daten erhalten vom Personalcomputer |
| 0xC498 | U0498 | U0498 Ungültige Daten erhalten vom Telefon-Steuergerät |
| 0xC499 | U0499 | U0499 Ungültige Daten erhalten vom Telematik-Steuergerät |
| 0xC49A | U049A | U049A Ungültige Daten erhalten vom Tür-Steuergerät 1 |
| 0xC501 | U0501 | U0501 Ungültige Daten erhalten vom Tür-Steuergerät 2 |
| 0xC502 | U0502 | U0502 Ungültige Daten erhalten vom Tür-Steuergerät 3 |
| 0xC503 | U0503 | U0503 Ungültige Daten erhalten vom Tür-Steuergerät 4 |
| 0xC504 | U0504 | U0504 Ungültige Daten erhalten vom Tür-Steuergerät 5 |
| 0xC505 | U0505 | U0505 Ungültige Daten erhalten vom Tür-Steuergerät 6 |
| 0xC506 | U0506 | U0506 Ungültige Daten erhalten vom Tür-Steuergerät 7 |
| 0xC509 | U0509 | U0509 Ungültige Daten erhalten vom Sitz-Steuergerät 1 |
| 0xC50A | U050A | U050A Ungültige Daten erhalten vom Sitz-Steuergerät 2 |
| 0xC511 | U0511 | U0511 Ungültige Daten erhalten vom Sitz-Steuergerät 3 |
| 0xC512 | U0512 | U0512 Ungültige Daten erhalten vom Sitz-Steuergerät 4 |
| 0xC513 | U0513 | U0513 Ungültige Daten erhalten vom Gierratensensor-Modul |
| 0xC514 | U0514 | U0514 Ungültige Daten erhalten vom Spiegel-Steuergerät |
| 0xC516 | U0516 | U0516 Ungültige Daten erhalten vom Türschalter 1 |
| 0xC517 | U0517 | U0517 Ungültige Daten erhalten vom Türschalter 2 |
| 0xC518 | U0518 | U0518 Ungültige Daten erhalten vom Türschalter 3 |
| 0xC519 | U0519 | U0519 Ungültige Daten erhalten vom Türschalter 4 |
| 0xC51A | U051A | U051A Ungültige Daten erhalten vom Türschalter 5 |
| 0xC521 | U0521 | U0521 Ungültige Daten erhalten vom Türschalter 6 |
| 0xC522 | U0522 | U0522 Ungültige Daten erhalten vom Türschalter 7 |
| 0xC523 | U0523 | U0523 Ungültige Daten erhalten vom Fensterhebermotor 1 |
| 0xC524 | U0524 | U0524 Ungültige Daten erhalten vom Fensterhebermotor 2 |
| 0xC525 | U0525 | U0525 Ungültige Daten erhalten vom Fensterhebermotor 3 |
| 0xC526 | U0526 | U0526 Ungültige Daten erhalten vom Fensterhebermotor 4 |
| 0xC527 | U0527 | U0527 Ungültige Daten erhalten vom Fensterhebermotor 5 |
| 0xC528 | U0528 | U0528 Ungültige Daten erhalten vom Fensterhebermotor 6 |
| 0xC529 | U0529 | U0529 Ungültige Daten erhalten vom Fensterhebermotor 7 |
| 0xC52A | U052A | U052A Ungültige Daten erhalten vom Modul heizbarem Lenkrad |
| 0xC532 | U0532 | U0532 ungültige Daten erhalten vom Regensensor-Modul |
| 0xC536 | U0536 | U0536 Ungültige Daten erhalten vom Querbeschleunigungssensor-Modul |
| 0xC537 | U0537 | U0537 Ungültige Daten erhalten vom Lenksäulenschloss-Modul |
| 0xC542 | U0542 | U0542 Ungültige Daten erhalten vom Scheinwerfer-Steuergerät 1 |
| 0xC543 | U0543 | U0543 Ungültige Daten erhalten vom Scheinwerfer-Steuergerät 2 |
| 0xC545 | U0545 | U0545 Ungültige Daten erhalten vom Trittbrett-Steuergerät 1 |
| 0xC547 | U0547 | U0547 Ungültige Daten erhalten vom Sitz-Steuergerät 5 |
| 0xC548 | U0548 | U0548 Ungültige Daten erhalten vom Sitz-Steuergerät 6 |
| 0xC54B | U054B | U054B Ungültige Daten erhalten vom Innenlicht-Steuergerät |
| 0xC54C | U054C | U054C Ungültige Daten erhalten vom Sitz-Steuergerät 7 |
| 0xC54D | U054D | U054D Ungültige Daten erhalten vom Sitz-Steuergerät 8 |
| 0xC552 | U0552 | U0552 Ungültige Daten erhalten vom Trittbrett-Steuergerät 2 |
| 0xC553 | U0553 | U0553 Ungültige Daten erhalten vom Beleuchtungs-Steuergerät (hinten 'B') |
| 0xC555 | U0555 | U0555 Ungültige Daten erhalten vom Fernstart-Modul |
| 0xC559 | U0559 | U0559 Ungültige Daten erhalten vom Funksender/-empfänger |
| 0xC55A | U055A | U055A Ungültige Daten erhalten vom Spezialfahrzeug-Steuergerät 1 |
| 0xC55B | U055B | U055B Ungültige Daten erhalten vom Spezialfahrzeug-Steuergerät 2 |
| 0xC55C | U055C | U055C Ungültige Daten erhalten vom Spezialfahrzeug-Steuergerät 3 |
| 0xC55D | U055D | U055D Ungültige Daten erhalten vom Spezialfahrzeug-Steuergerät 4 |
| 0xC561 | U0561 | U0561 Ungültige Daten erhalten vom Sitzverstellschalter 1 |
| 0xC562 | U0562 | U0562 Ungültige Daten erhalten vom Sitzverstellschalter 2 |
| 0xC563 | U0563 | U0563 Ungültige Daten erhalten vom Audio Verstärker 2 |
| 0xC564 | U0564 | U0564 Ungültige Daten erhalten vom Spracherkennungs-Modul |
| 0xC565 | U0565 | U0565 Ungültige Daten erhalten vom Kameramodul (hinten) |
| 0xC566 | U0566 | U0566 Ungültige Daten erhalten vom Bildverarbeitungssensor 1 |
| 0xC567 | U0567 | U0567 Ungültige Daten erhalten vom Bildverarbeitungssensor 2 |
| 0xC568 | U0568 | U0568 Ungültige Daten erhalten vom Bildverarbeitungssensor 3 |
| 0xC569 | U0569 | U0569 Ungültige Daten erhalten vom Bildverarbeitungssensor 4 |
| 0xC56A | U056A | U056A Ungültige Daten erhalten vom Bildverarbeitungssensor 5 |
| 0xC56B | U056B | U056B Ungültige Daten erhalten vom Bildverarbeitungssensor 6 |
| 0xC56C | U056C | U056C Ungültige Daten erhalten vom Bildverarbeitungssensor 7 |
| 0xC56D | U056D | U056D Ungültige Daten erhalten vom Bildverarbeitungssensor 8 |
| 0xC56E | U056E | U056E Ungültige Daten erhalten vom Bildverarbeitungssensor 9 |
| 0xC56F | U056F | U056F Ungültige Daten erhalten vom Bildverarbeitungssensor 10 |
| 0xC570 | U0570 | U0570 Ungültige Daten erhalten vom Bildverarbeitungssensor 11 |
| 0xC571 | U0571 | U0571 Ungültige Daten erhalten vom Bildverarbeitungssensor 12 |
| 0xC588 | U0588 | U0588 Ungültige Daten erhalten vom Getriebeölpumpen-Modul |
| 0xC592 | U0592 | U0592 Ungültige Daten erhalten vom Schaltungs-Steuergerät 2 |
| 0xC593 | U0593 | U0593 Ungültige Daten erhalten vom Antriebsmotor-Steuergerät 2 |
| 0xC594 | U0594 | U0594 Ungültige Daten erhalten vom Hybridantriebs-Steuergerät |
| 0xC59B | U059B | U059B Ungültige Daten erhalten vom Batteriesatz Sensormodul |
| 0xC59E | U059E | U059E Ungültige Daten erhalten vom NOx-Sensor (Bank 1) |
| 0xC59F | U059F | U059F Ungültige Daten erhalten vom NOx-Sensor (Bank 2) |
| 0xD100 | U1100 | U1100 Kommunikationsverlust mit ASC/DSC (Automatic Stability Control/Dynamic Stability Control) |
| 0xD101 | U1101 | U1101 Kommunikationsverlust mit Umgebungstemperatur/Relativzeit |
| 0xD102 | U1102 | U1102 Botschaftsüberwachung Bedienung Fahrgeschwindigkeitsregelung/ACC (Adaptive Cruise Control) - Aliveprüfung |
| 0xD103 | U1103 | U1103 Kommunikationsverlust mit Bedienung Fahrgeschwindigkeitsregelung/ACC (Adaptive Cruise Control) |
| 0xD104 | U1104 | U1104 Botschaftsüberwachung Bedienung Fahrgeschwindigkeitsregelung/ACC (Adaptive Cruise Control) - Prüfsummenfehler |
| 0xD105 | U1105 | U1105 Botschaftsüberwachung Drehmomentanforderung ACC (Adaptive Cruise Control) - Aliveprüfung |
| 0xD106 | U1106 | U1106 Kommunikationsverlust mit Drehmomentanforderung ACC (Adaptive Cruise Control) |
| 0xD107 | U1107 | U1107 Botschaftsüberwachung Drehmomentanforderung ACC (Adaptive Cruise Control) - Prüfsummenfehler |
| 0xD108 | U1108 | U1108 Botschaftsüberwachung Drehmomentanforderung Lenkung - Aliveprüfung |
| 0xD109 | U1109 | U1109 Kommunikationsverlust mit Drehmomentanforderung Lenkung |
| 0xD10A | U110A | U110A Botschaftsüberwachung Drehmomentanforderung Lenkung - Prüfsummenfehler |
| 0xD10B | U110B | U110B Botschaftsüberwachung Drehmomentanforderung DSC (Dynamic Stability Control) - Aliveprüfung |
| 0xD10C | U110C | U110C Kommunikationsverlust mit Drehmomentanforderung DSC (Dynamic Stability Control) |
| 0xD10D | U110D | U110D Botschaftsüberwachung Drehmomentanforderung DSC (Dynamic Stability Control) - Prüfsummenfehler |
| 0xD10E | U110E | U110E Botschaftsüberwachung Drehmomentanforderung EGS (elektronische Getriebesteuerung) - Aliveprüfung |
| 0xD10F | U110F | U110F Kommunikationsverlust mit Drehmomentanforderung EGS (elektronische Getriebesteuerung) |
| 0xD110 | U1110 | U1110 Botschaftsüberwachung Drehmomentanforderung EGS (elektronische Getriebesteuerung) - Prüfsummenfehler |
| 0xD111 | U1111 | U1111 Botschaftsüberwachung Drehmomentanforderung SSG (sequentielles Schaltgetriebe) - Aliveprüfung |
| 0xD112 | U1112 | U1112 Kommunikationsverlust mit Drehmomentanforderung SSG (sequentielles Schaltgetriebe) |
| 0xD113 | U1113 | U1113 Botschaftsüberwachung Drehmomentanforderung SSG (sequentielles Schaltgetriebe) - Prüfsummenfehler |
| 0xD114 | U1114 | U1114 Botschaftsüberwachung Status Fahrzeugmodus - Aliveprüfung |
| 0xD115 | U1115 | U1115 Kommunikationsverlust mit Status Fahrzeugmodus |
| 0xD116 | U1116 | U1116 Botschaftsüberwachung Status Fahrzeugmodus - Prüfsummenfehler |
| 0xD117 | U1117 | U1117 Botschaftsüberwachung Geschwindigkeit - Aliveprüfung |
| 0xD118 | U1118 | U1118 Kommunikationsverlust mit Geschwindigkeit |
| 0xD119 | U1119 | U1119 Botschaftsüberwachung Geschwindigkeit - Prüfsummenfehler |
| 0xD11A | U111A | U111A Kommunikationsverlust mit Getriebedaten |
| 0xD11B | U111B | U111B Kommunikationsverlust mit Getriebedaten2 |
| 0xD11C | U111C | U111C Kommunikationsverlust mit Kilometerstand/Reichweite |
| 0xD11D | U111D | U111D Botschaftsüberwachung Klemmenstatus - Aliveprüfung |
| 0xD11E | U111E | U111E Kommunikationsverlust mit Klemmenstatus |
| 0xD11F | U111F | U111F Botschaftsüberwachung Klemmenstatus - Prüfsummenfehler |
| 0xD120 | U1120 | U1120 Kommunikationsverlust mit Lenkradwinkel |
| 0xD121 | U1121 | U1121 Kommunikationsverlust mit Powermanagement Batteriespannung |
| 0xD122 | U1122 | U1122 Kommunikationsverlust mit Powermanagement Ladespannung |
| 0xD123 | U1123 | U1123 Botschaftsüberwachung Status Modul ARS (Active Roll Stabilisation) - Aliveprüfung |
| 0xD124 | U1124 | U1124 Kommunikationsverlust mit Status Modul ARS (Active Roll Stabilisation) |
| 0xD125 | U1125 | U1125 Botschaftsüberwachung Status DSC (Dynamic Stability Control) - Aliveprüfung |
| 0xD126 | U1126 | U1126 Kommunikationsverlust mit Status DSC (Dynamic Stability Control) |
| 0xD127 | U1127 | U1127 Botschaftsüberwachung Status DSC (Dynamic Stability Control) - Prüfsummenfehler |
| 0xD128 | U1128 | U1128 Kommunikationsverlust mit Status EKP (Elektrische Kraftstoffpumpe) |
| 0xD129 | U1129 | U1129 Kommunikationsverlust mit Status Rückwärtsgang |
| 0xD12A | U112A | U112A Botschaftsüberwachung Status Instrumentenkombination - Aliveprüfung |
| 0xD12B | U112B | U112B Kommunikationsverlust mit Status Instrumentenkombination |
| 0xD12C | U112C | U112C Kommunikationsverlust mit Wärmestrom/Lastmoment Klima |
| 0xD12D | U112D | U112D Kommunikationsverlust mit Steuerung Crashabschaltung EKP (elektrische Kraftstoffpumpe) |
| 0xD12E | U112E | U112E Kommunikationsverlust mit Pedalwertgeber |
| 0xD12F | U112F | U112F Botschaftsüberwachung Status Instrumentenkombination - Prüfsummenfehler |
| 0xD130 | U1130 | U1130 Kommunikationsverlust mit gesteuerter Luftführung oben |
| 0xD131 | U1131 | U1131 Kommunikationsverlust mit CAS (Car Access System) |
| 0xD132 | U1132 | U1132 Kommunikationsverlust mit Generator über BSD (Bitserielle Datenschnittstelle) |
| 0xD133 | U1133 | U1133 Kommunikationsverlust mit Generator 2 über BSD (Bitserielle Datenschnittstelle) |
| 0xD134 | U1134 | U1134 Kommunikationsverlust mit Lampenzustand |
| 0xD135 | U1135 | U1135 Kommunikationsverlust mit Status Wasserventil |
| 0xD136 | U1136 | U1136 Kommunikationsverlust mit Leerlaufsteller (Bank 1) |
| 0xD137 | U1137 | U1137 Botschaftsüberwachung Leerlaufsteller (Bank 1) - Aliveprüfung |
| 0xD138 | U1138 | U1138 Botschaftsüberwachung Leerlaufsteller (Bank 1) - DPR Überschreibungsfehler |
| 0xD139 | U1139 | U1139 Leerlaufsteller- / SMG-Kommunikation - Bus Off |
| 0xD13A | U113A | U113A Kommunikationsverlust mit Status Zentralverriegelung |
| 0xD13B | U113B | U113B Kommunikationsverlust mit Status Sitzbelegung Gurtkontakte |
| 0xD13C | U113C | U113C Kommunikationsverlust mit Uhrzeit/Datum |
| 0xD13D | U113D | U113D Kommunikationsverlust mit Radmomentanforderung/Antriebstrang |
| 0xD13E | U113E | U113E Kommunikationsverlust mit Anzeige Getriebedaten |
| 0xD13F | U113F | U113F Kommunikationsverlust mit Leerlaufsteller / SMG |
| 0xD140 | U1140 | U1140 Drosselklappenkommunikation - Bus Off |
| 0xD141 | U1141 | U1141 Kommunikationsverlust mit Drosselklappensteller (Bank 1) |
| 0xD142 | U1142 | U1142 Botschaftsüberwachung Drosselklappensteller (Bank 1) - Aliveprüfung |
| 0xD143 | U1143 | U1143 Botschaftsüberwachung Drosselklappensteller (Bank 1) - DPR Überschreibungsfehler |
| 0xD144 | U1144 | U1144 Kommunikationsverlust mit NOx-Sensor (Bank 1) |
| 0xD145 | U1145 | U1145 Kommunikationsverlust mit NOx-Sensor (Bank 2) |
| 0xD146 | U1146 | U1146 Kommunikationsverlust mit Leerlaufsteller (Bank 2) |
| 0xD147 | U1147 | U1147 Botschaftsüberwachung Leerlaufsteller (Bank 2) - Aliveprüfung |
| 0xD148 | U1148 | U1148 Botschaftsüberwachung Leerlaufsteller (Bank 2) - DPR Überschreibungsfehler |
| 0xD149 | U1149 | U1149 Botschaftsüberwachung CAS (Car Access System) - Aliveprüfung |
| 0xD14A | U114A | U114A Botschaftsüberwachung Motorsteuerung Drehmoment 1 - Aliveprüfung |
| 0xD14B | U114B | U114B Kommunikationsverlust mit Motorsteuerung Drehmoment 1 |
| 0xD14C | U114C | U114C Botschaftsüberwachung Motorsteuerung Drehmoment 1 - Prüfsummenfehler |
| 0xD14D | U114D | U114D Botschaftsüberwachung Motorsteuerung Drehmoment 2 - Aliveprüfung |
| 0xD14E | U114E | U114E Kommunikationsverlust mit Motorsteuerung Drehmoment 2 |
| 0xD14F | U114F | U114F Botschaftsüberwachung Motorsteuerung Drehmoment 2 - Prüfsummenfehler |
| 0xD150 | U1150 | U1150 Botschaftsüberwachung CAS (Car Access System) - Prüfsummenfehler |
| 0xD151 | U1151 | U1151 Kommunikationsverlust mit Drosselklappensteller (Bank 2) |
| 0xD152 | U1152 | U1152 Botschaftsüberwachung Drosselklappensteller (Bank 2) - Aliveprüfung |
| 0xD153 | U1153 | U1153 Botschaftsüberwachung Drosselklappensteller (Bank 2) - DPR Überschreibungsfehler |
| 0xD154 | U1154 | U1154 Kommunikationsverlust mit Botschaft 2 Getriebesteuergerät |
| 0xD155 | U1155 | U1155 Botschaftsüberwachung 2 Getriebesteuergerät - Prüfsummenfehler |
| 0xD156 | U1156 | U1156 Botschaftsüberwachung 2 Getriebesteuergerät - Aliveprüfung |
| 0xD157 | U1157 | U1157 Botschaftsüberwachung Motorsteuerung Drehmoment 1 - Plausibilitätsfehler |
| 0xD158 | U1158 | U1158 Botschaftsüberwachung Motorsteuerung Drehmoment 2 - Plausibilitätsfehler |
| 0xD159 | U1159 | U1159 Botschaftsüberwachung Motorsteuerung Drehmoment 3 - Plausibilitätsfehler |
| 0xD15A | U115A | U115A Botschaftsüberwachung Motorsteuerung Drehmoment 3 - Aliveprüfung |
| 0xD15B | U115B | U115B Kommunikationsverlust mit Motorsteuerung Drehmoment 3 |
| 0xD15C | U115C | U115C Botschaftsüberwachung Motorsteuerung Drehmoment 3 - Prüfsummenfehler |
| 0xD15D | U115D | U115D Botschaftsüberwachung Motordaten - Aliveprüfung |
| 0xD15E | U115E | U115E Kommunikationsverlust mit Motordaten |
| 0xD15F | U115F | U115F Botschaftsüberwachung Motordaten - Prüfsummenfehler |
| 0xD160 | U1160 | U1160 Kommunikationsverlust mit Botschaft 3 Getriebesteuergerät |
| 0xD161 | U1161 | U1161 Botschaftsüberwachung 3 Getriebesteuergerät - Aliveprüfung |
| 0xD162 | U1162 | U1162 Botschaftsüberwachung 3 Getriebesteuergerät - Prüfsummenfehler |
| 0xD163 | U1163 | U1163 Botschaftsüberwachung Motorsteuerung - Aliveprüfung |
| 0xD164 | U1164 | U1164 Botschaftsüberwachung Motorsteuerung - Prüfsummenfehler |
| 0xD165 | U1165 | U1165 Botschaftsüberwachung Radmomentanforderung/Antriebstrang - Aliveprüfung/Prüfsummenfehler |
| 0xD166 | U1166 | U1166 Botschaftsüberwachung EWS (elektronische Wegfahrsperre) - Framefehler |
| 0xD167 | U1167 | U1167 Botschaftsüberwachung direkte Ozon-Reduzierung Katalysatortemperaturfühler - Framefehler |
| 0xD168 | U1168 | U1168 Botschaftsüberwachung direkte Ozon-Reduzierung Katalysatortemperaturfühler - Prüfsummenfehler |
| 0xD169 | U1169 | U1169 Kommunikationsverlust mit OBD-Sensor |
| 0xD16A | U116A | U116A Botschaftsüberwachung Fahrgeschwindigkeitsregelung - Aliveprüfung |
| 0xD16B | U116B | U116B Kommunikationsverlust mit Fahrgeschwindigkeitsregelung |
| 0xD16C | U116C | U116C Botschaftsüberwachung Fahrgeschwindigkeitsregelung - Prüfsummenfehler |
| 0xD16D | U116D | U116D Kommunikationsverlust mit Radgeschwindigkeit |
| 0xD16E | U116E | U116E Kommunikationsverlust mit Radtoleranzausgleich |
| 0xD16F | U116F | U116F Kommunikationsverlust mit Sportmodus EGS (elektronische Getriebesteuerung) |
| 0xD170 | U1170 | U1170 Kühlmittelpumpe - Kommunikationsfehler |
| 0xD171 | U1171 | U1171 Kühlmittelpumpe Kommunikation - Plausibilitätsfehler |
| 0xD172 | U1172 | U1172 Kommunikationsverlust mit VVT-Steuergerät |
| 0xD173 | U1173 | U1173 Kommunikationsverlust mit Stromverbrauch Verbraucher Gruppe 1 |
| 0xD174 | U1174 | U1174 Botschaftsüberwachung VVT-Steuergerät - Aliveprüfung/Prüfsummenfehler |
| 0xD175 | U1175 | U1175 Kommunikationsverlust mit MSA (Motor-Start-Automatik) |
| 0xD176 | U1176 | U1176 Kommunikationsverlust mit CEM (Clean Energy Module) |
| 0xD177 | U1177 | U1177 Kommunikationsverlust mit Motorsteuergerät/Powertrain Steuergerät über A-CAN |
| 0xD178 | U1178 | U1178 Botschaftsüberwachung Status EKP (Elektrische Kraftstoffpumpe) - Aliveprüfung |
| 0xD179 | U1179 | U1179 Botschaftsüberwachung Status EKP (Elektrische Kraftstoffpumpe) - Prüfsummenfehler |
| 0xD17A | U117A | U117A Ladeluftkühler Kühlmittelpumpe - Kommunikationsfehler |
| 0xD17B | U117B | U117B Ladeluftkühler Kühlmittelpumpe Kommunikation - Plausibilitätsfehler |
| 0xD17C | U117C | U117C Botschaftsüberwachung TFE (Tank Function Electronics) - Aliveprüfung |
| 0xD17D | U117D | U117D Kommunikatonsverlust mit TFE (Tank Function Electronics) |
| 0xD17E | U117E | U117E Botschaftsüberwachung TFE (Tank Function Electronics) - Prüfsummenfehler |
| 0xD17F | U117F | U117F Kommunikationsverlust mit Tankentlüftungssystem Drucksensor/-schalter |
| 0xD180 | U1180 | U1180 Botschaftsüberwachung Motorsteuerung über A-CAN - Prüfsummenfehler |
| 0xD181 | U1181 | U1181 Botschaftsüberwachung Motordaten Gruppe 1 - Aliveprüfung |
| 0xD182 | U1182 | U1182 Kommunikationsverlust mit Motordaten Gruppe 1  |
| 0xD183 | U1183 | U1183 Botschaftsüberwachung Motordaten Gruppe 1 - Prüfsummenfehler |
| 0xD184 | U1184 | U1184 Kommunikationsverlust mit  A-CAN |
| 0xD185 | U1185 | U1185 Kommunikationsverlust mit FA-CAN |
| 0xD186 | U1186 | U1186 Botschaftsüberwachung Motordaten Gruppe 2 - Aliveprüfung |
| 0xD187 | U1187 | U1187 Kommunikationsverlust mit Motordaten Gruppe 2 |
| 0xD188 | U1188 | U1188 Botschaftsüberwachung Motordaten Gruppe 2 - Prüfsummenfehler |
| 0xD189 | U1189 | U1189 Botschaftsüberwachung Daten DSC (Dynamic Stability Control) Gruppe 2 - Aliveprüfung |
| 0xD18A | U118A | U118A Kommunikationsverlust mit Daten DSC (Dynamic Stability Control) Gruppe 2 |
| 0xD18B | U118B | U118B Botschaftsüberwachung Daten DSC (Dynamic Stability Control) Gruppe 2 - Prüfsummenfehler |
| 0xD18C | U118C | U118C Botschaftsüberwachung Daten ICM (Integrated Chassis Module) Gruppe 2 - Aliveprüfung |
| 0xD18D | U118D | U118D Kommunikationsverlust mit Daten ICM (Integrated Chassis Module) Gruppe 2 |
| 0xD18E | U118E | U118E Botschaftsüberwachung Daten ICM (Integrated Chassis Module) Gruppe 2 - Prüfsummenfehler |
| 0xD18F | U118F | U118F Kommunikationsverlust mit Getriebewählschalter |
| 0xD190 | U1190 | U1190 Kommunikationsverlust mit Getriebesteuergerät über A- und FA-CAN |
| 0xD191 | U1191 | U1191 Botschaftsüberwachung Radmomentanforderung/Antriebstrang - Aliveprüfung |
| 0xD192 | U1192 | U1192 Botschaftsüberwachung Radmomentanforderung/Antriebstrang - Prüfsummenfehler |
| 0xD193 | U1193 | U1193 Botschaftsüberwachung Getriebedaten über FA-CAN - Aliveprüfung |
| 0xD194 | U1194 | U1194 Botschaftsüberwachung Getriebedaten über FA-CAN - Prüfsummenfehler |
| 0xD195 | U1195 | U1195 Botschaftsüberwachung Radgeschwindigkeit - Aliveprüfung |
| 0xD196 | U1196 | U1196 Botschaftsüberwachung Radgeschwindigkeit - Prüfsummenfehler |
| 0xD197 | U1197 | U1197 Botschaftsüberwachung Bremsmoment - Aliveprüfung |
| 0xD198 | U1198 | U1198 Kommunikationsverlust mit Bremsmoment  |
| 0xD199 | U1199 | U1199 Botschaftsüberwachung Bremsmoment - Prüfsummenfehler |
| 0xD19A | U119A | U119A Botschaftsüberwachung Umgebungstemperatur - Aliveprüfung |
| 0xD19B | U119B | U119B Kommunikationsverlust mit  Umgebungstemperatur |
| 0xD19C | U119C | U119C Botschaftsüberwachung Umgebungstemperatur - Prüfsummenfehler |
| 0xD19D | U119D | U119D Kommunikationsverlust mit BSD (Bitserielle Datenschnittstelle) |
| 0xD19E | U119E | U119E Kommunikationsverlust mit FlexRay |
| 0xD19F | U119F | U119F Kommunikationsverlust mit OBD-Daten Motor |
| 0xD1A0 | U11A0 | U11A0 Kommunikationsverlust mit Getriebedaten über FA-CAN |
| 0xD1A1 | U11A1 | U11A1 Botschaftsüberwachung Getriebedaten über A-CAN - Aliveprüfung |
| 0xD1A2 | U11A2 | U11A2 Kommunikationsverlust mit Getriebedaten über A-CAN |
| 0xD1A3 | U11A3 | U11A3 Botschaftsüberwachung Getriebedaten über A-CAN - Prüfsummenfehler |
| 0xD1A4 | U11A4 | U11A4 Kommunikationsverlust mit OBD-Daten Getriebe über A-CAN |
| 0xD1A5 | U11A5 | U11A5 Kommunikationsverlust mit Status Getriebesteuergerät über FA-CAN |
| 0xD1A6 | U11A6 | U11A6 Kommunikationsverlust mit Status Getriebesteuergerät über A-CAN |
| 0xD1A7 | U11A7 | U11A7 Kommunikationsverlust mit OBD-Daten Getriebe über FA-CAN |
| 0xD1A8 | U11A8 | U11A8 Kommunikationsverlust mit EWS (elektronische Wegfahrsperre)-Botschaft vom CAS (Car Access System) |
| 0xD1A9 | U11A9 | U11A9 Ladeluftkühler Kühlmittelpumpe 2 Kommunikation - Plausibilitätsfehler |
| 0xD1AA | U11AA | U11AA Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten über FA-CAN - Aliveprüfung |
| 0xD1AB | U11AB | U11AB Kommunikationsverlust mit Drehmomentanforderung Kurbelwelle Getriebedaten über FA-CAN |
| 0xD1AC | U11AC | U11AC Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten über FA-CAN - Prüfsummenfehler |
| 0xD1AD | U11AD | U11AD Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten über A-CAN - Aliveprüfung |
| 0xD1AE | U11AE | U11AE Kommunikationsverlust mit Drehmomentanforderung Kurbelwelle Getriebedaten über A-CAN |
| 0xD1AF | U11AF | U11AF Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten über A-CAN - Prüfsummenfehler |
| 0xD1B0 | U11B0 | U11B0 Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten2 über FA-CAN - Aliveprüfung |
| 0xD1B1 | U11B1 | U11B1 Kommunikationsverlust mit Drehmomentanforderung Kurbelwelle Getriebedaten2 über FA-CAN |
| 0xD1B2 | U11B2 | U11B2 Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten2 über FA-CAN - Prüfsummenfehler |
| 0xD1B3 | U11B3 | U11B3 Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten2 über A-CAN - Aliveprüfung |
| 0xD1B4 | U11B4 | U11B4 Kommunikationsverlust mit Drehmomentanforderung Kurbelwelle Getriebedaten2 über A-CAN |
| 0xD1B5 | U11B5 | U11B5 Botschaftsüberwachung Drehmomentanforderung Kurbelwelle Getriebedaten2 über A-CAN - Prüfsummenfehler |
| 0xD1B6 | U11B6 | U11B6 Kommunikationsverlust mit gesteuerter Luftführung oben über LIN |
| 0xD1B7 | U11B7 | U11B7 Botschaftsüberwachung Tankentlüftungssystem Leckdiagnose Tank - Aliveprüfung |
| 0xD1B8 | U11B8 | U11B8 Kommunikationsverlust mit Tankentlüftungssystem Leckdiagnose Tank |
| 0xD1B9 | U11B9 | U11B9 Botschaftsüberwachung Tankentlüftungssystem Leckdiagnose Tank - Prüfsummenfehler |
| 0xD1BA | U11BA | U11BA Komunikationsverlust mit Getriebeöltemperatur |
| 0xD1BB | U11BB | U11BB Kommunikationsverlust mit Antriebsmotor Inverter Temperatur |
| 0xD1BC | U11BC | U11BC Kommunikationsverlust mit Motorelektronik Temperatur Kühlsystem |
| 0xD1BD | U11BD | U11BD Kommunikationsverlust mit Hybridantriebs-Steuergerät über HL-CAN |
| 0xD1BE | U11BE | U11BE Kommunikationsverlust mit Hybridantriebs-Steuergerät über HS-CAN |
| 0xD1BF | U11BF | U11BF Botschaftsüberwachung Hybridantriebs-Steuergerät über HS-CAN - Aliveprüfung |
| 0xD1C0 | U11C0 | U11C0 Botschaftsüberwachung Antriebsmotor Drehzahl - Aliveprüfung |
| 0xD1C1 | U11C1 | U11C1 Kommunikationsverlust Antriebsmotor Drehzahl |
| 0xD1C2 | U11C2 | U11C2 Botschaftsüberwachung Antriebsmotor Drehzahl - Prüfsummenfehler |
| 0xD200 | U1200 | U1200 Botschaftsüberwachung Getriebesteuergerät - Prüfsummenfehler |
| 0xD202 | U1202 | U1202 Botschaftsüberwachung Getriebesteuergerät - Aliveprüfung |
| 0xD800 | U1800 | U1800 Hybridbatterie Kommunikationsverlust mit Kühlmittelpumpe |
| 0xD801 | U1801 | U1801 Hybridantriebs-Steuergerät Kommunikationsverlust mit Motorsteuergerät über HL-CAN |
| 0xD802 | U1802 | U1802 Hybridantriebs-Steuergerät Kommunikationsverlust mit Getriebesteuergerät |
| 0xD803 | U1803 | U1803 Hybridantriebs-Steuergerät Kommunikationsverlust mit Hybridbatterie-Steuergerät |
| 0xD804 | U1804 | U1804 Hybridantriebs-Steuergerät Kommunikationsverlust mit HIM (Hybrid Interface Module) über HL-CAN |
| 0xD805 | U1805 | U1805 Hybridantriebs-Steuergerät Kommunikationsverlust mit Getriebeöl-Zusatzpumpe Steuergerät |
| 0xD806 | U1806 | U1806 Hybridantriebs-Steuergerät Kommunikationsverlust mit DSM (Direct Shift Module)-Steuergerät |
| 0xD807 | U1807 | U1807 Hybridantriebs-Steuergerät Kommunikationsverlust mit HIM (Hybrid Interface Module) Steuergerät über HS-CAN |
| 0xD808 | U1808 | U1808 Hybridantriebs-Steuergerät Kommunikationsverlust mit 14 Volt Powermodul |
| 0xD809 | U1809 | U1809 Getriebesteuergerät Kommunikationsverlust mit HIM (Hybrid Interface Module) über HL-CAN |
| 0xD80A | U180A | U180A Bremssystem-Steuergerät Kommunikationsverlust mit DSC (Dynamic Stability Control) |
| 0xD80B | U180B | U180B Bremssystem-Steuergerät Kommunikationsverlust mit Hybridantriebs-Steuergerät |
| 0xD80C | U180C | U180C Bremssystem-Steuergerät - High Speed CAN-Kommunikationsbus Off |
| 0xD80D | U180D | U180D Bremssystem-Steuergerät - Bus 'B' Off |
| 0xD80E | U180E | U180E Bremssystem-Steuergerät Kommunikationsverlust mit Motorsteuergerät |
| 0xD810 | U1810 | U1810 Botschaftsüberwachung Bremssystem-Steuergerät / Motorsteuergerät - Aliveprüfung |
| 0xD811 | U1811 | U1811 Botschaftsüberwachung Bremssystem-Steuergerät / Motorsteuergerät - Prüfsummenfehler |
| 0xD812 | U1812 | U1812 Botschaftsüberwachung Bremssystem-Steuergerät / Motorsteuergerät - Signal ungültig |
| 0xD815 | U1815 | U1815 Hybridantriebs-Steuergerät Kommunikationsverlust mit Antriebsmotor 1 Steuergerät über HS-CAN |
| 0xD818 | U1818 | U1818 Hybridantriebs-Steuergerät Kommunikationsverlust mit Motorsteuergerät über HS-CAN |
| 0xD820 | U1820 | U1820 Hybridantriebs-Steuergerät Kommunikationsverlust mit SBA (Sensotronic Brake Actuation) über HS-CAN |
| 0xD870 | U1870 | U1870 Antriebsmotor 1 Steuergerät Kommunikationsverlust mit Motorsteuergerät über HS-CAN |
| 0xD871 | U1871 | U1871 Antriebsmotor 2 Steuergerät Kommunikationsverlust mit Motorsteuergerät über HS-CAN |
| 0xD872 | U1872 | U1872 Antriebsmotor 2 Steuergerät Kommunikationsverlust mit Antriebsmotor 1 Steuergerät |
| 0xD875 | U1875 | U1875 Antriebsmotor 1 Steuergerät Kommunikationsverlust mit Hybridbatterie-Steuergerät |
| 0xD876 | U1876 | U1876 Antriebsmotor 1 Steuergerät Kommunikationsverlust mit Motorsteuergerät über HL-CAN |
| 0xD878 | U1878 | U1878 Antriebsmotor 2 Steuergerät Kommunikationsverlust mit Hybridbatterie-Steuergerät |
| 0xD879 | U1879 | U1879 Antriebsmotor 2 Steuergerät Kommunikationsverlust mit Motorsteuergerät über HL-CAN |
| 0xD880 | U1880 | U1880 Antriebsmotor 1 Steuergerät Kommunikationsverlust mit Hybridantriebs-Steuergerät |
| 0xD881 | U1881 | U1881 Antriebsmotor 2 Steuergerät Kommunikationsverlust mit Hybridantriebs-Steuergerät |
| 0xD885 | U1885 | U1885 Hybridbatterie-Steuergerät Kommunikationsverlust mit Hybridantriebs-Steuergerät |
| 0xD886 | U1886 | U1886 Hybridbatterie-Steuergerät Kommunikationsverlust mit HIM (Hybrid Interface Module) |
| 0xD891 | U1891 | U1891 Getriebeöl-Zusatzpumpenmotor Steuergerät Kommunikationsverlust mit Hybridantriebs-Steuergerät |
| 0xD892 | U1892 | U1892 Getriebeöl-Zusatzpumpenmotor Steuergerät Kommunikationsverlust mit Getriebesteuergerät |
| 0xD89A | U189A | U189A 14 Volt Powermodul Kommunikationsverlust mit Hybridantriebs-Steuergerät |
| 0xD89B | U189B | U189B Antriebsmotor 1 Steuergerät Kommunikationsverlust mit Getriebesteuergerät |
| 0xD89C | U189C | U189C Antriebsmotor 2 Steuergerät Kommunikationsverlust mit Getriebesteuergerät |
| 0xF000 | U3000 | U3000 Steuergerät - Fehlfunktion |
| 0xF001 | U3001 | U3001 Steuergerät - unsachgemäße Abschaltung |
| 0xF002 | U3002 | U3002 Fahrgestellnummer - ungültig |
| 0xF003 | U3003 | U3003 Batteriespannung - Fehlfunktion |
| 0xF004 | U3004 | U3004 Nebenaggregat Hauptrelais - Fehlfunktion |
| 0xF005 | U3005 | U3005 Einbehaltene Nebenaggreagts-Leistung |
| 0xF006 | U3006 | U3006 Steuergerät Eingangsleistung 'A' - Fehlfunktion |
| 0xF007 | U3007 | U3007 Steuergerät Eingangsleistung 'B' - Fehlfunktion |
| 0xF008 | U3008 | U3008 Steuergerät Masse 'A - Fehlfunktion |
| 0xF009 | U3009 | U3009 Steuergerät Masse 'B - Fehlfunktion |
| 0xF00A | U300A | U300A Zündschalter - Fehlfunktion |
| 0xF00B | U300B | U300B Zündung Eingang Nebenaggregat/EIN/Start |
| 0xF00C | U300C | U300C Zündung Eingang AUS/EIN/Start |
| 0xF00D | U300D | U300D Zündung Eingang EIN/Start |
| 0xF00E | U300E | U300E Zündung Eingang EIN |
| 0xF00F | U300F | U300F Zündung Eingang Nebenaggregat |
| 0xF010 | U3010 | U3010 Zündung Eingang Start |
| 0xF011 | U3011 | U3011 Zündung Eingang AUS |
| 0xXYXY | ?? | unbekannter P-Code |
