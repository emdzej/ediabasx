# Plan implementacji interfejsów komunikacyjnych (priorytet: Serial K+DCAN)

## Cel
Dostarczyć produkcyjny interfejs Serial K+DCAN do użycia z INPA, z zachowaniem architektury EdiabasLib i dobrą testowalnością.

---

## 1) Analiza EdiabasLib (C#)

### Wspierane protokoły i koncepty
**EdInterfaceObd.cs**
- **K-line (UART/KWP)**:
  - KWP1281 (ISO 9141)
  - KWP2000 (BMW i „*”)
  - BMW-FAST
- **DS1/DS2** (starsze koncepty)
- **CAN**:
  - TP2.0 (TP20)
  - ISO-TP (UDS/ISO14229)
- **D-CAN** (concept 0x0110, 500k)

**EdInterfaceEnet.cs**
- **HSFZ** (TCP) + **DoIP** (ISO 13400), z trybem SSL/S29

**EdInterfaceEdic.cs**
- EDIC jako „symulacja” transportu, w praktyce forwarding do EdInterfaceObd z inną konfiguracją

### Inicjalizacja
- **5-baud init**: `SendWakeAddress5Baud()` — bit time ~200ms, używa BREAK (serial break) do formowania bitów, opcjonalnie DTR i „both lines”.
- **Fast init**: `SendWakeFastInit()` — 25ms BREAK + 25ms idle, opcjonalnie DTR.
- **KWP key bytes**: po init odbierane 2 bajty klucza; **0x8F => KWP2000**, w innym wypadku KWP1281.
- **Auto key byte response** dla starszych adapterów (w `EdCustomAdapterCommon`).

### Timery i parametry
- **W1–W5**: timery init (EDIC param set 1).
- **P1–P4**: mapowane na standardowe timeouty:
  - P2 -> `ParTimeoutStd`
  - P1 -> `ParTimeoutTelEnd`
  - P4 -> `ParInterbyteTime`
  - P3 -> `ParRegenTime`
- **P2Ext**: `ParTimeoutNr78` (response pending / NR78).
- **AddRecTimeout**: globalny offset do timeoutów odbioru.

### Obsługa błędów i retry
- **KWP1281**: `Kwp1281ErrorDelay = 150ms`, `Kwp1281ErrorRetries = 3`.
- **NR78**: słownik `Nr78Dict` + `ParRetryNr78` (limit retries).
- **Echo handling** w adapterze K+DCAN (sprawdzenie echa, opcjonalny reconnect).

### Adapter K+DCAN (EdCustomAdapterCommon)
- Ramkowanie K-line/CAN, obsługa DTR/RTS, przełączanie protokołów.
- **Fast init detection**: `IsFastInit(0x02, 2, 25)`.
- **Tworzenie telegramów**: `CreateAdapterTelegram`, `CreatePulseTelegram`, `CreateCanTelegram`.
- **UpdateAdapterInfo**: odczyt adapter type/version/serial/voltage.

---

## 2) Analiza obecnego kodu (repo emdzej/ediabas)

- **packages/interface-base**: minimalny `EdiabasInterface` + `SimulationInterface` (timeouty, kolejka odpowiedzi).
- **packages/interpreter/src/operations/communication.ts**: pełen zestaw operacji X* (xconnect, xsend, xrecv, xraw, itp.) z oczekiwaniami na opcjonalne API (setParameter, setAnswerLength, sendFormatted…).
- **packages/interface-serial**: **placeholder**.
- **packages/interface-enet**: **placeholder**.
- **packages/protocol-kwp / protocol-uds / protocol-doip**: **placeholders**.

---

## 3) Luki i ryzyka duplikacji

### Braki
- Brak transportu serial (konfiguracja portu, DTR/RTS, BREAK, timeouts).
- Brak adaptera K+DCAN (ramkowanie, echo, update info, CAN telegramy).
- Brak KWP1281/KWP2000 state machine (init, timery, retry/NR78).
- Brak ISO-TP/UDS integracji po CAN.

### Ryzyko duplikacji
- Logika protokołów (KWP/UDS) może się powielić w interface-serial i interface-enet.
- Rekomendacja: **wydzielenie protokołów do `protocol-*`**, a interfejsy zapewniają tylko transport + adapter.

---

## 4) Plan architektury (TS)

### Warstwy
1. **interface-base**: minimalny interfejs transportu + Simulation.
2. **interface-serial**: low-level serial I/O + K+DCAN adapter layer.
3. **protocol-kwp**: KWP1281/KWP2000 (init, timery, retry, NR78).
4. **protocol-uds**: ISO-TP/UDS (CAN).
5. **interface-enet**: HSFZ/DoIP (później, po serial).

### Podział modułów
- `interface-serial`:
  - `SerialTransport` (open/close/read/write, DTR/RTS, break, purge).
  - `KdcAdapter` (port EdCustomAdapterCommon).
- `protocol-kwp`:
  - `KwpSession` (init, key bytes, P/W timers, NR78, tester present).
- `protocol-uds`:
  - `IsoTpSession` + UDS framing (na start minimalne hooks).

### Kolejność implementacji (priorytet K+DCAN)
1. Transport serial (konfiguracja portu, timeouty, DTR/RTS, break) — **Issue #56**
2. Port EdCustomAdapterCommon (ramkowanie K+DCAN) — **Issue #57**
3. Init K-line (5-baud + fast init, key bytes) — **Issue #58**
4. KWP1281/KWP2000 state machine (timery, NR78) — **Issue #59**
5. D-CAN (CAN telegramy + ISO-TP hooks) — **Issue #60**

### Zależności
- KWP zależy od transportu i adaptera.
- D-CAN zależy od adaptera (CAN telegramy).

---

## 5) Testowalność
- **Mock serial port** (symulacja timeouts, echo, brak odpowiedzi).
- **SimulationInterface** do testów logiki protokołów bez hardware.
- Testy jednostkowe dla:
  - check-sumów i formatów telegramów,
  - init (5-baud/fast init),
  - NR78/retry,
  - CAN framing.

---

## 6) INPA Minimal Subset
**Założenie:** INPA używa głównie **BMW-FAST (KWP2000 over K-line)** oraz **D-CAN (UDS over CAN)**. Na start nie potrzebujemy 5-baud init, KWP1281 ani TP2.0.

### Minimum wymagane (INPA)
- **Transport:** Serial + K+DCAN adapter
- **Init:** fast-init + key bytes
- **Protokoły:** BMW-FAST (KWP2000) + D-CAN (ISO-TP/UDS)

### Issues wymagane (label: `inpa-required`)
- #56 interface-serial: serial transport (DTR/RTS/break/timeouts)
- #57 K+DCAN adapter framing (EdCustomAdapterCommon)
- #58 K-line fast-init + key bytes
- #59 KWP2000 session (BMW-FAST) + timers/NR78
- #60 D-CAN over K+DCAN: CAN telegrams + ISO-TP hooks

### Opcjonalne poza INPA (na później)
- #61 K-line 5-baud init (legacy ECUs)
- KWP1281 flow (legacy)
- TP2.0/DS2
- ENET/DoIP

---

## 7) Kolejne etapy (po K+DCAN)
- Implementacja `interface-enet` + `protocol-doip` (HSFZ/DoIP), wzorowana na EdInterfaceEnet.
- Wsparcie TP2.0/DS2 w `protocol-kwp` (jeśli potrzebne przez INPA).

---

## 8) Summary
Priorytetem jest stabilny K+DCAN na Serial. Klucz to poprawna warstwa transportowa + adapter, potem logika protokołów (KWP/UDS) z pełnymi timerami i retry. Całość powinna być testowalna przez mocki i SimulationInterface.
