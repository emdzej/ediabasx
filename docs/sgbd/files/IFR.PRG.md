# IFR.PRG

## General

|  |  |
| --- | --- |
| File | IFR.PRG |
| Type | PRG |
| Jobs | 65 |
| Tables | 1 |
| Origin | BMW TI-430 Haase |
| Revision | 10.01 |
| Author | BMW TI-430 Penzenstadler, BMW TI-430 Huber, BMW TI-430 Drexel, |
| ECU Comment | communication with MDA as pseudo ECU |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | IFR |  |  |
| ORIGIN | string | BMW TI-430 Haase |  |  |
| REVISION | string | 10.01 |  |  |
| AUTHOR | string | BMW TI-430 Penzenstadler, BMW TI-430 Huber, BMW TI-430 Drexel,  |  |  |
| COMMENT | string | communication with MDA as pseudo ECU |  |  |
| PACKAGE | string | 1.05 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### INIT_IFR

Initialisierung mit Zuordnung Adresse

| Name | Type | Description |
| --- | --- | --- |
| FZS | string | Fahrzeug-Steuerschluessel wenn nur numerisch wird in  4 Byte-long   gewandelt wenn alphanumerisch wird in 7 Byte-String gewandelt |
| ADRESSE_IFR | string | Adresse Mobiladapter (muss ungleich 0 sein) |
| AUTOMATIK | long | 0 = Automatische CAN / K-Line Umschaltung aus 1 = Automatische CAN / K-Line Umschaltung ein |
| CAN_EIN | long | 0 = K-Line 1 = CAN |

### START_PRUEFUNG

Start mit FZS

| Name | Type | Description |
| --- | --- | --- |
| FZS | string | Fahrzeug-Steuerschluessel wenn nur numerisch wird in  4 Byte-long   gewandelt wenn alphanumerisch wird in 7 Byte-String gewandelt |

### ENDE_PRUEFUNG

Trennt logische Verbindung zum Slave-MDA Ab V3.07: 3s Wartezeit wenn Antwort nicht OK (0x00) war gewaehrleistet Umschaltung des Slave in Koordinierungskanal bei entsprechender Slave-Konfiguration

_No arguments._

### SET_COMMUNICATION_PARA

Setzen Kommunikationsparameter AUTOMATIK und CAN_EIN aus INIT_IFR

| Name | Type | Description |
| --- | --- | --- |
| AUTOMATIK | long | 0 = Automatische CAN / K-Line Umschaltung aus 1 = Automatische CAN / K-Line Umschaltung ein |
| CAN_EIN | long | 0 = K-Line 1 = CAN |

### GET_COMMUNICATION_PARA

Auslesen Kommunikationsparameter AUTOMATIK und CAN_EIN aus INIT_IFR

_No arguments._

### SET_CONFIRMED_COM

Setzt den MDA in Kommunikationsmodus ConfirmedCom

| Name | Type | Description |
| --- | --- | --- |
| COM_PORT | int | Parameter Confirmed Communication 0 = K-Line, 1 = D-CAN |

### CPU_PORT_K1_EIN

Einschalten des Relais K1 im Funk-Mobilteil

_No arguments._

### CPU_PORT_K1_AUS

Ausschalten des Relais K1 im Funk-Mobilteil

_No arguments._

### CPU_PORT_K1_LESEN

Lesen ob das Relais K1 im Funk-Mobilteil aktiv ist

_No arguments._

### CPU_PORT_K2_EIN

Einschalten des Relais K2 im Funk-Mobilteil

_No arguments._

### CPU_PORT_K2_AUS

Ausschalten des Relais K2 im Funk-Mobilteil

_No arguments._

### CPU_PORT_K2_LESEN

Lesen ob das Relais K2 im Funk-Mobilteil aktiv ist

_No arguments._

### CPU_CAN_EIN

Einschalten des CAN Relais im Funk-Mobilteil

_No arguments._

### CPU_CAN_AUS

Ausschalten des CAN Relais im Funk-Mobilteil

_No arguments._

### CPU_CAN_LESEN

Lesen ob das CAN Relais im Funk-Mobilteil aktiv ist

_No arguments._

### STATUS_CPU_K1_K2_CAN

Lesen ob das CAN Relais im Funk-Mobilteil aktiv ist

_No arguments._

### CPU_PORT_STROMREGELUNG_EIN

Einschalten des Stromregelung im Funk-Mobilteil

_No arguments._

### CPU_PORT_STROMREGELUNG_AUS

Einschalten des Stromregelung im Funk-Mobilteil

_No arguments._

### CPU_PORT_STROMREGELUNG_LESEN

Lesen ob die Stromregelung im Funk-Mobilteil aktiv ist

_No arguments._

### ADRESSE_LESEN

Abfrage Adresse des Mobiladapters (Slave-MDA) HINWEIS: wird nur noch aus Kompatibilaetsgruenden unterstuetzt HINWEIS: neuer Job ADRESSEN_LESEN_SLAVE

_No arguments._

### ADRESSE_LESEN_MASTER

Abfrage der Adresse des Master-MDA HINWEIS: schnelle Ausfuehrung, da keine Funk-Kommunikation

_No arguments._

### ADRESSE_LESEN_SLAVE

Abfrage der Adresse des Slave-MDA

_No arguments._

### ADRESSEN_LESEN

Abfrage der Adressen des Master- und des Slave-MDA HINWEIS: Verbindung zum Slave-MDA erforderlich

_No arguments._

### SLEEP_IFR

Abbruch der Infrarot-Verbindung (IFR-ADS -> SLEEP-Mode) Es kommt keine Antwort zurueck !

_No arguments._

### VERSION_LESEN

Abfrage der Version des Masters und des Mobiladapters Abfrage der Adresse des Masters und des Mobiladapters

_No arguments._

### CHECK_SLEEP

Test ob MDA in den Sleepmodus geschaltet hat bei Sleep Modus Adresse = 0 und Softwareversion = 0000

_No arguments._

### STATUS_KLEMMEN

Abfrage der Klemmenstati des Mobiladapters

_No arguments._

### STATUS_SLAVE_ZIELNUMMER

Abfrage der Slave Zielnummer

_No arguments._

### STATUS_STATISTIK_MASTER

Statistik aus dem Master lesen

_No arguments._

### STATUS_STATISTIK_SLAVE

Statistik aus dem Slave lesen

_No arguments._

### LOESCHEN_STATISTIK_MASTER

Statistik im Master loeschen

_No arguments._

### LOESCHEN_STATISTIK_SLAVE

Statistik im Slave loeschen

_No arguments._

### ZIEL_MASTER_LESEN

Zieladresse des Masters lesen (Auto-Update) Erweiteter ADS-Befehl: 0x01

_No arguments._

### BIN_DOWNLOAD_START

Download Start, binären Datentransfer vom PC in den SDA-RAM starten (Auto-Update) Erweiteter ADS-Befehl: 0x10

| Name | Type | Description |
| --- | --- | --- |
| FILE_LEN | long | Uebergabe File-Laenge |

### BIN_FILE_DOWNLOAD

Download, binaeren Datentransfer vom PC in den SDA-RAM (Auto-Update) Erweiteter ADS-Befehl: 0x11

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Puffer zur Aufnahme der Firmware-Daten-Bloecke |

### BIN_DOWNLOAD_ENDE

Download Ende, binaeren Datentransfer vom PC in den SDA-RAM beenden (Auto-Update) Erweiteter ADS-Befehl: 0x12

| Name | Type | Description |
| --- | --- | --- |
| FILE_LEN | long | Uebergabe File-Länge |

### START_FLASHEN

Start des Flashens vom SDA-RAM in den MDA oder in den SDA Erweiteter ADS-Befehl: 0x19

| Name | Type | Description |
| --- | --- | --- |
| FLASH_TARGET | int | Ziel der Daten aus dem SDA-RAM "1" = Start des Flashens vom SDA-RAM in den SDA (Master) "2" = Start des Flashens vom SDA-RAM in den MDA (Slave) |

### CHECK_FIRMWARE

Versions- und Checksummenprüfung der mit 0x10-0x12 in den SDA-RAM geladenen Firmware Erweiteter ADS-Befehl: 0x18

| Name | Type | Description |
| --- | --- | --- |
| FW_VER | string | FW-Version der geladenen FW(wie im MDA-Display angezeigt) Eingabe als [HIGH-byte] [LOW-byte] |
| CHECK_SUM | string | Check-Summe der geladenen FW Eingabe als [HIGH-byte] [LOW-byte] |

### FORTSCHRITT_FLASHEN

Fortschrittsabfrage des Flashens Erweiteter ADS-Befehl: 0x1A

_No arguments._

### RUECKLESEN_FW_AUS_MDA

Start des Rücklesens vom MDA in den SDA-RAM Erweiteter ADS-Befehl: 0x1B

_No arguments._

### FORTSCHRITT_RUECKLESEN

Fortschrittsabfrage des Ruecklesens der FW aus MDA Erweiteter ADS-Befehl: 0x1C

_No arguments._

### KONFIG_LESEN

Konfiguration lesen Erweiteter ADS-Befehl: 0x20

| Name | Type | Description |
| --- | --- | --- |
| SOURCE | int | Quelle der Konfigurationsdaten 1 = Lesen aus SDA (Master) 2 = Lesen aus MDA (Slave) |

### KONFIG_SCHREIBEN

Konfiguration schreiben Erweiteter ADS-Befehl: 0x21

| Name | Type | Description |
| --- | --- | --- |
| TARGET | int | Wahl des Ziels zum schreiben der Konfigurationsdaten 1 = Schreiben in den SDA (Master) 2 = Schreiben in den MDA (Slave) |
| CONFIG_STRING | string | Konfigurationsstring ohne Checksum Byte |

### RESET

Reset MDA/SDA Erweiteter ADS-Befehl: 0x30

| Name | Type | Description |
| --- | --- | --- |
| TARGET | int | Wahl des Ziels für den RESET 1 = SDA (Master) 2 = MDA (Slave) |

### KL15_VER_LESEN

KL15 FW-Version lesen (incl. Checksum) Erweiteter ADS-Befehl: 0x40

_No arguments._

### KL15_RESET

Reset Klemme-15-Simulator Erweiteter ADS-Befehl: 0x41

_No arguments._

### KL15_START_FLASH

Start des Flashens KL15 vom MDA-RAM in die KL15 Erweiteter ADS-Befehl: 0x42

_No arguments._

### KL15_STATUS_FLASH

Fortschrittsabfrage des Ruecklesens der FW aus MDA Erweiteter ADS-Befehl: 0x1C

_No arguments._

### KL15_START_DOWNLOAD

Download Start, binären Datentransfer KL15-FW vom PC in den MDA-RAM starten Erweiteter ADS-Befehl: 0x44

| Name | Type | Description |
| --- | --- | --- |
| DATA_LEN | long | Uebergabe File-Laenge |

### KL15_DOWNLOAD_PCMDA

Download, binaeren Datentransfer KL15 FW vom PC in den MDA-RAM Erweiteter ADS-Befehl: 0x45

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Puffer zur Aufnahme der Firmware-Daten-Bloecke |

### KL15_ENDE_DOWNLOAD

Download Ende, binaeren Datentransfer KL15 Firmware beendet Erweiteter ADS-Befehl: 0x46

| Name | Type | Description |
| --- | --- | --- |
| DATA_LEN | long | Längeninformation der geschriebenen Daten |

### KL15_CHECK_FIRMWARE

Versions- und Checksummenprüfung der mit 0x44-0x46 in das MDA-RAM geladenen KL15-Firmware Erweiteter ADS-Befehl: 0x47

| Name | Type | Description |
| --- | --- | --- |
| FW_VER | string | KL15-FW-Version der geladenen FW Eingabe als [HIGH-byte] [LOW-byte] |
| CHECK_SUM | string | Check-Summe der geladenen KL15-FW Eingabe als [HIGH-byte] [LOW-byte] |

### SET_CAN_ACCEPT_FILTER

Set CAN Acceptance Filter (11 Bit ID) ID A und ID B geben den gültigen ID Bereich an Wird A = B = 0 übergeben, ist das Acceptance Filter nicht aktiv

| Name | Type | Description |
| --- | --- | --- |
| ACCEPTANCEFILTER_FROM | unsigned int | Kennzeichnet Bereichsstart --> erste gültige ID Eingabe als z.B. 0x700 |
| ACCEPTANCEFILTER_TO | unsigned int | Kennzeichnet Bereichsende --> letzte gültige ID Eingabe als z.B. 0x7FF |

### GET_CAN_MESSAGE

Emfangen von CAN-Botschaften Die erwartete ID muss sich im Bereich der mit "Set CAN Acceptance Filter" gesetzten Werte A und B befinden

_No arguments._

### SEND_CAN_MESSAGE

Send CAN Message (11 Bit ID) Sendet 0 bis 8 Datenbytes (0 = nur Frame)

| Name | Type | Description |
| --- | --- | --- |
| CANIDENTIFIER | unsigned int |  |
| DATALENGTH | unsigned char |  |
| D1 | unsigned char |  |
| D2 | unsigned char |  |
| D3 | unsigned char |  |
| D4 | unsigned char |  |
| D5 | unsigned char |  |
| D6 | unsigned char |  |
| D7 | unsigned char |  |
| D8 | unsigned char |  |

### SET_AUTO_ASSIGN

Aktivieren der Automatischen Taufe 0 == "OFF" 1 == "ON"

| Name | Type | Description |
| --- | --- | --- |
| SET_MODE | int | 0 == "OFF" 1 == "ON" |

### WRITE_AUTO_ASSIGN_DATA

Schreiben der Daten die für die automaische Taufe im MDA abgelegt werden sollen

| Name | Type | Description |
| --- | --- | --- |
| AUTO_ASSIGN_DATA | string | Auto-Assign-Daten sind auf 252 Zeichen durch SGBD begrenzt Hexadezimalwerte Daten für Auto-Taufstring --> 0x00,0x02,0x00,0x02,0x1A,0x90,.... String_Bsp: 000200021A90.... |

### READ_AUTO_ASSIGN_DATA

Auslesen der Daten die für die automatische Taufe im MDA abgelegt sind

_No arguments._

### READ_AUTO_ASSIGN_STATUS

Auslesen des aktuellen Status der automatischen Taufe

_No arguments._

### GET_RUNNING_TIME

Liefert Systemzeit nach dem Einschalten

| Name | Type | Description |
| --- | --- | --- |
| SET_TARGET | int | 1 == "Zeit des SDA" 2 == "Zeit des MDA" |

### GET_ERROR_COUNT

Liefert Fehlerspeicherausgaben

| Name | Type | Description |
| --- | --- | --- |
| SET_TARGET | int | 1 == "Zeit des SDA" 2 == "Zeit des MDA" |

### CLR_ERROR_COUNT

Rücksetzen des Fehlerspreichers

| Name | Type | Description |
| --- | --- | --- |
| SET_TARGET | int | 1 == "Zeit des SDA" 2 == "Zeit des MDA" |

### _SET_MASTER_COM_MODE

Einstellen Kommunikationsmode Master-to-Slave

| Name | Type | Description |
| --- | --- | --- |
| TARGET | int | Adresse SLAVE TARGET = 0  --> Verheiratungsmode TARGET > 0 (bis 9999) --> P2P-Mode |

## Tables

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| STAT_K1 | 3 | 0x01 | 0x01 |
| STAT_K2 | 3 | 0x02 | 0x02 |
| STAT_K15 | 3 | 0x20 | 0x20 |
| STAT_K30 | 3 | 0x10 | 0x10 |
| STAT_STROM | 3 | 0x80 | 0x80 |
