import { EdiabasInterface } from "@ediabas/interface-base";

export class SerialInterface extends EdiabasInterface {
  async connect(): Promise<void> {
    throw new Error("Not implemented");
  }

  async disconnect(): Promise<void> {
    throw new Error("Not implemented");
  }

  async send(_data: Uint8Array): Promise<void> {
    throw new Error("Not implemented");
  }

  async receive(_timeoutMs?: number): Promise<Uint8Array> {
    throw new Error("Not implemented");
  }

  getPort(_index: number): number {
    throw new Error("Not implemented");
  }

  setPort(_index: number, _value: number): void {
    throw new Error("Not implemented");
  }

  get ignitionVoltage(): number {
    throw new Error("Not implemented");
  }

  get loopTest(): number {
    throw new Error("Not implemented");
  }

  setProgramVoltage(_value: number): void {
    throw new Error("Not implemented");
  }

  rawData(_request: Uint8Array): Uint8Array {
    throw new Error("Not implemented");
  }

  switchSiRelais(_time: number): void {
    throw new Error("Not implemented");
  }
}
