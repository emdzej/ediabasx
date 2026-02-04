import { beforeEach, describe, expect, it, vi } from "vitest";
import { EdiabasInterface } from "../src/interfaces/base";
import { SimulationInterface } from "../src/interfaces/simulation";

const bytes = (...values: number[]) => Uint8Array.from(values);

const exactCases = Array.from({ length: 25 }, (_, index) => {
  const base = index + 1;
  return {
    request: bytes(base, base + 1),
    response: bytes(base + 2, base + 3),
  };
});

const multiByteCases = Array.from({ length: 25 }, (_, index) => {
  const base = index + 10;
  return {
    request: bytes(base, base + 1, base + 2),
    response: bytes(base + 3, base + 4, base + 5),
  };
});

const patternCases = Array.from({ length: 25 }, (_, index) => {
  const prefix = (index + 1).toString(16).padStart(2, "0");
  const suffix = (index + 2).toString(16).padStart(2, "0");
  return {
    pattern: `${prefix}??${suffix}`,
    request: bytes(index + 1, 0xaa, index + 2),
    response: bytes(0xfe, index + 1),
  };
});

const wildcardCases = Array.from({ length: 25 }, (_, index) => {
  const prefix = (index + 1).toString(16).padStart(2, "0");
  return {
    pattern: `${prefix}*`,
    request: bytes(index + 1, 0x10, 0x20),
    response: bytes(0xbe, 0xef, index + 1),
  };
});

describe("EdiabasInterface base", () => {
  it("is abstract and not meant to be instantiated", () => {
    // @ts-expect-error abstract class cannot be instantiated
    const create = () => new EdiabasInterface();
    expect(typeof create).toBe("function");
  });
});

describe("SimulationInterface initialization", () => {
  it("starts disconnected", () => {
    const iface = new SimulationInterface();
    expect(iface.isConnected()).toBe(false);
  });

  it("throws when sending while disconnected", async () => {
    const iface = new SimulationInterface();
    await expect(iface.send(bytes(0x01))).rejects.toThrow(/not connected/i);
  });

  it("throws when receiving while disconnected", async () => {
    const iface = new SimulationInterface();
    await expect(iface.receive(100)).rejects.toThrow(/not connected/i);
  });
});

describe("SimulationInterface lifecycle", () => {
  it("connects and disconnects", async () => {
    const iface = new SimulationInterface();
    await iface.connect();
    expect(iface.isConnected()).toBe(true);
    await iface.disconnect();
    expect(iface.isConnected()).toBe(false);
  });

  it("supports reconnect", async () => {
    const iface = new SimulationInterface();
    await iface.connect();
    await iface.disconnect();
    await iface.connect();
    expect(iface.isConnected()).toBe(true);
  });

  it("ignores disconnect when already disconnected", async () => {
    const iface = new SimulationInterface();
    await expect(iface.disconnect()).resolves.toBeUndefined();
  });
});

describe("Exact request-response mapping", () => {
  let iface: SimulationInterface;

  beforeEach(async () => {
    iface = new SimulationInterface();
    await iface.connect();
  });

  it.each(exactCases)("matches exact request %#", async ({ request, response }) => {
    iface.setResponse(request, response);
    await iface.send(request);
    await expect(iface.receive(100)).resolves.toEqual(response);
  });

  it.each(multiByteCases)(
    "matches multi-byte request %#",
    async ({ request, response }) => {
      iface.setResponse(request, response);
      await iface.send(request);
      await expect(iface.receive(100)).resolves.toEqual(response);
    },
  );

  it("buffers response when receive happens later", async () => {
    iface.setResponse(bytes(0x10), bytes(0x20));
    await iface.send(bytes(0x10));
    await expect(iface.receive(100)).resolves.toEqual(bytes(0x20));
  });

  it("supports multiple sequential responses for same request", async () => {
    iface.setResponse(bytes(0x01), bytes(0x02));
    iface.setResponse(bytes(0x01), bytes(0x03));

    await iface.send(bytes(0x01));
    await iface.send(bytes(0x01));

    await expect(iface.receive(100)).resolves.toEqual(bytes(0x02));
    await expect(iface.receive(100)).resolves.toEqual(bytes(0x03));
  });
});

describe("Pattern request-response mapping", () => {
  let iface: SimulationInterface;

  beforeEach(async () => {
    iface = new SimulationInterface();
    await iface.connect();
  });

  it.each(patternCases)(
    "matches wildcard byte pattern %#",
    async ({ pattern, request, response }) => {
      iface.setResponses(new Map([[pattern, response]]));
      await iface.send(request);
      await expect(iface.receive(100)).resolves.toEqual(response);
    },
  );

  it.each(wildcardCases)(
    "matches wildcard any-length pattern %#",
    async ({ pattern, request, response }) => {
      iface.setResponses(new Map([[pattern, response]]));
      await iface.send(request);
      await expect(iface.receive(100)).resolves.toEqual(response);
    },
  );

  it("normalizes hex strings with spaces and prefixes", async () => {
    iface.setResponses(new Map([["0x10 20 30", bytes(0xaa)]]));
    await iface.send(bytes(0x10, 0x20, 0x30));
    await expect(iface.receive(100)).resolves.toEqual(bytes(0xaa));
  });
});

describe("Response queue management", () => {
  let iface: SimulationInterface;

  beforeEach(async () => {
    iface = new SimulationInterface();
    await iface.connect();
  });

  it("delivers responses in order for multiple sends", async () => {
    iface.setResponse(bytes(0x01), bytes(0x10));
    iface.setResponse(bytes(0x02), bytes(0x20));

    await iface.send(bytes(0x01));
    await iface.send(bytes(0x02));

    await expect(iface.receive(100)).resolves.toEqual(bytes(0x10));
    await expect(iface.receive(100)).resolves.toEqual(bytes(0x20));
  });

  it("handles receive before send", async () => {
    iface.setResponse(bytes(0x05), bytes(0x50));

    const receivePromise = iface.receive(100);
    await iface.send(bytes(0x05));

    await expect(receivePromise).resolves.toEqual(bytes(0x50));
  });

  it("supports multiple concurrent receives", async () => {
    iface.setResponse(bytes(0x08), bytes(0x80));
    iface.setResponse(bytes(0x09), bytes(0x90));

    const first = iface.receive(100);
    const second = iface.receive(100);

    await iface.send(bytes(0x08));
    await iface.send(bytes(0x09));

    await expect(first).resolves.toEqual(bytes(0x80));
    await expect(second).resolves.toEqual(bytes(0x90));
  });
});

describe("Timeouts and errors", () => {
  let iface: SimulationInterface;

  beforeEach(async () => {
    iface = new SimulationInterface();
    await iface.connect();
  });

  it("times out when no response is queued", async () => {
    vi.useFakeTimers();
    const receivePromise = iface.receive(50);
    const expectation = expect(receivePromise).rejects.toThrow(/timeout/i);
    await vi.advanceTimersByTimeAsync(50);
    await expectation;
    vi.useRealTimers();
  });

  it("times out when request has no matching response", async () => {
    vi.useFakeTimers();
    iface.setResponse(bytes(0x01), bytes(0x02));
    await iface.send(bytes(0x03));
    const receivePromise = iface.receive(50);
    const expectation = expect(receivePromise).rejects.toThrow(/timeout/i);
    await vi.advanceTimersByTimeAsync(50);
    await expectation;
    vi.useRealTimers();
  });

  it("rejects pending receives on disconnect", async () => {
    const receivePromise = iface.receive(1000);
    await iface.disconnect();
    await expect(receivePromise).rejects.toThrow(/disconnected/i);
  });
});

describe("setResponses behavior", () => {
  let iface: SimulationInterface;

  beforeEach(async () => {
    iface = new SimulationInterface();
    await iface.connect();
  });

  it("replaces existing mappings", async () => {
    iface.setResponse(bytes(0x01), bytes(0x02));
    iface.setResponses(new Map([["0x03", bytes(0x04)]]));

    await iface.send(bytes(0x01));
    await iface.send(bytes(0x03));

    await expect(iface.receive(50)).resolves.toEqual(bytes(0x04));
  });

  it("clears mappings when empty map is provided", async () => {
    vi.useFakeTimers();
    iface.setResponse(bytes(0x01), bytes(0x02));
    iface.setResponses(new Map());

    await iface.send(bytes(0x01));
    const receivePromise = iface.receive(10);
    const expectation = expect(receivePromise).rejects.toThrow(/timeout/i);
    await vi.advanceTimersByTimeAsync(10);

    await expectation;
    vi.useRealTimers();
  });
});
