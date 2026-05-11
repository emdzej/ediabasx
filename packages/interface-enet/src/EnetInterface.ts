import { EdiabasInterface } from "@emdzej/ediabasx-interface-base";

export class EnetInterface extends EdiabasInterface {
  async connect(): Promise<void> {
    throw new Error("Not implemented");
  }

  async disconnect(): Promise<void> {
    throw new Error("Not implemented");
  }

  async send(data: Uint8Array): Promise<void> {
    void data;
    throw new Error("Not implemented");
  }

  async receive(timeoutMs?: number): Promise<Uint8Array> {
    void timeoutMs;
    throw new Error("Not implemented");
  }

  getPort(index: number): number {
    void index;
    throw new Error("Not implemented");
  }

  setPort(index: number, value: number): void {
    void index;
    void value;
    throw new Error("Not implemented");
  }

  get ignitionVoltage(): number {
    throw new Error("Not implemented");
  }

  get batteryVoltage(): number {
    // ENET cables don't measure battery voltage on-wire; EdiabasLib's
    // `EdInterfaceEnet.BatteryVoltageValue` defaults to 12000 mV (the
    // "EnetBatteryVoltage" config property overrides it). Returning a
    // plausible default keeps scripts like UTILITY.PRG/STATUS_UBATT
    // happy when running against an ENET gateway.
    return 12000;
  }

  get loopTest(): number {
    throw new Error("Not implemented");
  }

  setProgramVoltage(value: number): void {
    void value;
    throw new Error("Not implemented");
  }

  rawData(request: Uint8Array): Uint8Array {
    void request;
    throw new Error("Not implemented");
  }

  switchSiRelais(time: number): void {
    void time;
    throw new Error("Not implemented");
  }
}
