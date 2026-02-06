import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  EdiabasTimeoutError,
  SimulationInterface
} from "../src/index";

const makeBytes = (length: number, seed = 0): Uint8Array => {
  return Uint8Array.from({ length }, (_, i) => (seed + i) & 0xff);
};

describe("SimulationInterface connection lifecycle", () => {
  it("starts disconnected", () => {
    const sim = new SimulationInterface();
    expect(sim.isConnected()).toBe(false);
  });

  it("connect marks connected", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    expect(sim.isConnected()).toBe(true);
  });

  it("disconnect marks disconnected", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    await sim.disconnect();
    expect(sim.isConnected()).toBe(false);
  });

  it("send throws when disconnected", async () => {
    const sim = new SimulationInterface();
    await expect(sim.send(makeBytes(2))).rejects.toThrow("Not connected");
  });

  it("receive throws when disconnected", async () => {
    const sim = new SimulationInterface();
    await expect(sim.receive()).rejects.toThrow("Not connected");
  });

  it("pending receive rejects on disconnect", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    const pending = sim.receive(1000);
    await sim.disconnect();
    await expect(pending).rejects.toThrow("Disconnected");
  });

  it("disconnect clears multiple pending receivers", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    const pending = [sim.receive(1000), sim.receive(1000), sim.receive(1000)];
    await sim.disconnect();
    for (const task of pending) {
      await expect(task).rejects.toThrow("Disconnected");
    }
  });

  it("connect does not auto-resolve pending receivers", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    const pending = sim.receive(10);
    await sim.disconnect();
    await sim.connect();
    await expect(pending).rejects.toThrow("Disconnected");
  });
});

describe("SimulationInterface send/receive", () => {
  it("returns queued response immediately", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x10], [0x20]);
    await sim.send(Uint8Array.from([0x10]));
    const response = await sim.receive();
    expect([...response]).toEqual([0x20]);
  });

  it("queues responses in order", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x01], [0x11]);
    sim.setResponse([0x02], [0x22]);
    await sim.send(Uint8Array.from([0x01]));
    await sim.send(Uint8Array.from([0x02]));
    const first = await sim.receive();
    const second = await sim.receive();
    expect([...first]).toEqual([0x11]);
    expect([...second]).toEqual([0x22]);
  });

  it("resolves pending receive when response arrives", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x0a], [0xa0]);
    const pending = sim.receive(1000);
    await sim.send(Uint8Array.from([0x0a]));
    await expect(pending).resolves.toEqual(Uint8Array.from([0xa0]));
  });

  it("keeps queue when no pending receivers", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x55], [0xaa]);
    await sim.send(Uint8Array.from([0x55]));
    const response = await sim.receive();
    expect(response[0]).toBe(0xaa);
  });

  it("send without response does not enqueue", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    await sim.send(Uint8Array.from([0xff]));
    const pending = sim.receive(10);
    await expect(pending).rejects.toThrow(EdiabasTimeoutError);
  });

  it("setResponse overwrites existing mapping", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x01], [0x10]);
    sim.setResponse([0x01], [0x20]);
    await sim.send(Uint8Array.from([0x01]));
    const response = await sim.receive();
    expect([...response]).toEqual([0x20]);
  });

  it("handles multiple pending receivers with multiple responses", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x10], [0x91]);
    sim.setResponse([0x20], [0x92]);
    const pending = [sim.receive(1000), sim.receive(1000)];
    await sim.send(Uint8Array.from([0x10]));
    await sim.send(Uint8Array.from([0x20]));
    await expect(pending[0]).resolves.toEqual(Uint8Array.from([0x91]));
    await expect(pending[1]).resolves.toEqual(Uint8Array.from([0x92]));
  });

  it("respects response order with mixed pending and queued", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x01], [0xa1]);
    sim.setResponse([0x02], [0xa2]);
    const pending = sim.receive(1000);
    await sim.send(Uint8Array.from([0x01]));
    await sim.send(Uint8Array.from([0x02]));
    const first = await pending;
    const second = await sim.receive();
    expect([...first]).toEqual([0xa1]);
    expect([...second]).toEqual([0xa2]);
  });

  it("supports number[] inputs for setResponse", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([1, 2, 3], [4, 5]);
    await sim.send(Uint8Array.from([1, 2, 3]));
    const response = await sim.receive();
    expect([...response]).toEqual([4, 5]);
  });

  it("supports Uint8Array inputs for setResponse", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse(Uint8Array.from([7, 8]), Uint8Array.from([9]));
    await sim.send(Uint8Array.from([7, 8]));
    const response = await sim.receive();
    expect([...response]).toEqual([9]);
  });
});

describe("SimulationInterface frequent mode", () => {
  it("stores frequent data on transmit", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    await sim.transmitFrequent(Uint8Array.from([0x10, 0x20]));
    const received = await sim.receiveFrequent();
    expect([...received]).toEqual([0x10, 0x20]);
  });

  it("returns buffered frequent data", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    await sim.transmitFrequent(Uint8Array.from([0xaa, 0xbb, 0xcc]));
    const received = await sim.receiveFrequent();
    expect([...received]).toEqual([0xaa, 0xbb, 0xcc]);
  });

  it("clears frequent buffer on stop", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    await sim.transmitFrequent(Uint8Array.from([0x01]));
    await sim.stopFrequent();
    const received = await sim.receiveFrequent();
    expect(received.length).toBe(0);
  });
});

describe("SimulationInterface timeout handling", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("rejects with EdiabasTimeoutError", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    const pending = sim.receive(50);
    vi.advanceTimersByTime(50);
    await expect(pending).rejects.toThrow(EdiabasTimeoutError);
  });

  it("does not reject when response arrives before timeout", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x01], [0x02]);
    const pending = sim.receive(100);
    await sim.send(Uint8Array.from([0x01]));
    vi.advanceTimersByTime(100);
    await expect(pending).resolves.toEqual(Uint8Array.from([0x02]));
  });

  it("clears timeout when resolved", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x03], [0x04]);
    const pending = sim.receive(100);
    await sim.send(Uint8Array.from([0x03]));
    vi.runAllTimers();
    await expect(pending).resolves.toEqual(Uint8Array.from([0x04]));
  });

  it("keeps pending receiver if timeout is zero", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x05], [0x06]);
    const pending = sim.receive(0);
    await sim.send(Uint8Array.from([0x05]));
    await expect(pending).resolves.toEqual(Uint8Array.from([0x06]));
  });

  it("timeout only removes timed receiver", async () => {
    const sim = new SimulationInterface();
    await sim.connect();
    sim.setResponse([0x07], [0x08]);
    const pending1 = sim.receive(50);
    const pending2 = sim.receive(0);
    vi.advanceTimersByTime(50);
    await sim.send(Uint8Array.from([0x07]));
    await expect(pending1).rejects.toThrow(EdiabasTimeoutError);
    await expect(pending2).resolves.toEqual(Uint8Array.from([0x08]));
  });
});

describe("SimulationInterface response matching", () => {
  const cases: Array<{ length: number; seed: number }> = [];
  for (let length = 1; length <= 35; length += 1) {
    cases.push({ length, seed: length });
    cases.push({ length, seed: length * 3 });
  }

  for (const { length, seed } of cases) {
    it(`matches response for length ${length} seed ${seed}`, async () => {
      const sim = new SimulationInterface();
      await sim.connect();
      const request = makeBytes(length, seed);
      const response = makeBytes(length, seed + 7);
      sim.setResponse(request, response);
      await sim.send(Uint8Array.from(request));
      const received = await sim.receive();
      expect([...received]).toEqual([...response]);
    });
  }

  for (let i = 0; i < 30; i += 1) {
    it(`distinguishes different requests (${i})`, async () => {
      const sim = new SimulationInterface();
      await sim.connect();
      const requestA = makeBytes(4, i);
      const requestB = makeBytes(4, i + 1);
      const responseA = makeBytes(2, i + 10);
      const responseB = makeBytes(2, i + 20);
      sim.setResponse(requestA, responseA);
      sim.setResponse(requestB, responseB);
      await sim.send(Uint8Array.from(requestB));
      const received = await sim.receive();
      expect([...received]).toEqual([...responseB]);
    });
  }
});
