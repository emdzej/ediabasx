import { beforeEach, describe, expect, it, vi } from "vitest";
import { RegisterSet } from "./registers";
import {
  xsetpar,
  xawlen,
  xsendf,
  xrequf,
  xstopf,
  xkeyb,
  xstate,
  xboot,
  xreps,
  xgetport,
  xsetport,
  xignit,
  xloopt,
  xprog,
  xraw,
  xsireset,
  xopen,
  xclose,
  xcloseex,
  xswitch,
  xsendex,
  xrecvex,
  type CommunicationInterface,
} from "./operations/communication";

const I0 = { kind: "I", index: 0 } as const;
const I1 = { kind: "I", index: 1 } as const;
const S0 = { kind: "S", index: 0 } as const;
const S1 = { kind: "S", index: 1 } as const;

describe("Extended communication operations", () => {
  let registers: RegisterSet;
  let iface: CommunicationInterface;

  beforeEach(() => {
    registers = new RegisterSet();
    iface = {
      connect: vi.fn(),
      disconnect: vi.fn(),
      send: vi.fn(),
      receive: vi.fn().mockResolvedValue(Uint8Array.from([0x41])),
      isConnected: () => true,
      setParameter: vi.fn(),
      setAnswerLength: vi.fn(),
      sendFormatted: vi.fn(),
      requestFormatted: vi.fn().mockResolvedValue(Uint8Array.from([0x42])),
      stopFormatted: vi.fn(),
      readKeyboard: vi.fn().mockResolvedValue("X"),
      getState: () => 7,
      boot: vi.fn(),
      setResponse: vi.fn(),
      getPort: vi.fn().mockResolvedValue(3),
      setPort: vi.fn(),
      ignitionVoltage: 1,
      loopTest: 9,
      setProgramVoltage: vi.fn(),
      rawData: vi.fn().mockResolvedValue(Uint8Array.from([0x43])),
      switchSiRelais: vi.fn(),
      open: vi.fn(),
      close: vi.fn(),
      closeEx: vi.fn(),
      switchInterface: vi.fn(),
      sendExtended: vi.fn(),
      receiveExtended: vi.fn().mockResolvedValue(Uint8Array.from([0x44])),
    };
  });

  it("xsetpar forwards parameter and value", async () => {
    registers.setI(0, 5);
    registers.setI(1, 11);
    await xsetpar(registers, iface, I0, I1);
    expect(iface.setParameter).toHaveBeenCalledWith(5, 11);
  });

  it("xawlen forwards answer length", async () => {
    registers.setI(0, 128);
    await xawlen(registers, iface, I0);
    expect(iface.setAnswerLength).toHaveBeenCalledWith(128);
  });

  it("xsendf sends formatted payload", async () => {
    registers.setS(0, "%d");
    registers.setS(1, "42");
    await xsendf(registers, iface, S0, S1);
    expect(iface.sendFormatted).toHaveBeenCalledWith("%d", "42");
  });

  it("xrequf writes response", async () => {
    registers.setS(0, "%s");
    registers.setS(1, "REQ");
    await xrequf(registers, iface, S0, S1, S1);
    expect(registers.getS(1)).toBe("B");
  });

  it("xstopf stops formatted communication", async () => {
    await xstopf(iface);
    expect(iface.stopFormatted).toHaveBeenCalled();
  });

  it("xkeyb reads keyboard input", async () => {
    await xkeyb(registers, iface, S0);
    expect(registers.getS(0)).toBe("X");
  });

  it("xstate returns interface state", () => {
    xstate(registers, iface, I0);
    expect(registers.getI(0)).toBe(7);
  });

  it("xboot triggers boot sequence", async () => {
    await xboot(iface);
    expect(iface.boot).toHaveBeenCalled();
  });

  it("xreps sets response bytes", async () => {
    registers.setS(0, "A");
    await xreps(registers, iface, S0);
    expect(iface.setResponse).toHaveBeenCalledWith(Uint8Array.from([0x41]));
  });

  it("xgetport returns port", async () => {
    registers.setI(1, 2);
    await xgetport(registers, iface, I0, registers.getI(1));
    expect(iface.getPort).toHaveBeenCalledWith(2);
    expect(registers.getI(0)).toBe(3);
  });

  it("xsetport updates port", async () => {
    registers.setS(0, String.fromCharCode(2));
    await xsetport(registers, iface, S0, 9);
    expect(iface.setPort).toHaveBeenCalledWith(2, 9);
  });

  it("xignit returns ignition state", async () => {
    await xignit(registers, iface, I0);
    expect(registers.getI(0)).toBe(1);
  });

  it("xloopt runs loop test", async () => {
    await xloopt(registers, iface, I0);
    expect(registers.getI(0)).toBe(9);
  });

  it("xprog sets program voltage", async () => {
    registers.setI(0, 12);
    await xprog(registers, iface, registers.getI(0));
    expect(iface.setProgramVoltage).toHaveBeenCalledWith(12);
  });

  it("xraw uses raw data when available", async () => {
    registers.setS(0, "req");
    await xraw(registers, iface, S1, S0);
    expect(registers.getS(1)).toBe("C");
  });

  it("xsireset resets service interval", async () => {
    await xsireset(iface, 5);
    expect(iface.switchSiRelais).toHaveBeenCalledWith(5);
  });

  it("xopen/xclose/xcloseex call interface controls", async () => {
    registers.setI(0, 2);
    await xopen(registers, iface, I0);
    await xclose(iface);
    await xcloseex(registers, iface, I0);
    expect(iface.open).toHaveBeenCalledWith(2);
    expect(iface.close).toHaveBeenCalled();
    expect(iface.closeEx).toHaveBeenCalledWith(2);
  });

  it("xswitch switches interface", async () => {
    registers.setI(0, 4);
    await xswitch(registers, iface, I0);
    expect(iface.switchInterface).toHaveBeenCalledWith(4);
  });

  it("xsendex/xrecvex use extended methods", async () => {
    registers.setS(0, "D");
    await xsendex(registers, iface, S0);
    await xrecvex(registers, iface, S1);
    expect(iface.sendExtended).toHaveBeenCalled();
    expect(registers.getS(1)).toBe("D");
  });
});
