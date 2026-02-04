import { EdiabasInterface } from "./base";

type PendingReceive = {
  resolve: (data: Uint8Array) => void;
  reject: (error: Error) => void;
  timeoutId: NodeJS.Timeout;
};

type PatternEntry = {
  pattern: string;
  regex: RegExp;
  responses: Uint8Array[];
};

export class SimulationInterface extends EdiabasInterface {
  private connected = false;
  private exactResponses = new Map<string, Uint8Array[]>();
  private patternResponses: PatternEntry[] = [];
  private pendingReceives: PendingReceive[] = [];
  private bufferedResponses: Uint8Array[] = [];

  setResponse(request: Uint8Array, response: Uint8Array): void {
    const key = SimulationInterface.normalizeHex(
      SimulationInterface.toHex(request),
    );
    const bucket = this.exactResponses.get(key) ?? [];
    bucket.push(response);
    this.exactResponses.set(key, bucket);
  }

  setResponses(map: Map<string, Uint8Array>): void {
    this.exactResponses.clear();
    this.patternResponses = [];
    this.bufferedResponses = [];

    for (const [pattern, response] of map.entries()) {
      const normalized = SimulationInterface.normalizeHex(pattern);
      if (SimulationInterface.hasWildcard(normalized)) {
        this.patternResponses.push({
          pattern: normalized,
          regex: SimulationInterface.patternToRegex(normalized),
          responses: [response],
        });
      } else {
        this.exactResponses.set(normalized, [response]);
      }
    }
  }

  async connect(): Promise<void> {
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    if (!this.connected) {
      return;
    }
    this.connected = false;
    this.bufferedResponses = [];
    this.failPendingReceives(new Error("Simulation interface disconnected"));
  }

  async send(data: Uint8Array): Promise<void> {
    this.ensureConnected();
    const response = this.dequeueResponse(data);
    if (!response) {
      return;
    }

    const pending = this.pendingReceives.shift();
    if (pending) {
      pending.resolve(response);
      return;
    }
    this.bufferedResponses.push(response);
  }

  async receive(timeout: number): Promise<Uint8Array> {
    this.ensureConnected();
    if (this.bufferedResponses.length > 0) {
      return this.bufferedResponses.shift() as Uint8Array;
    }

    const timeoutMs = timeout ?? 0;

    return new Promise<Uint8Array>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        this.pendingReceives = this.pendingReceives.filter(
          (pending) => pending.timeoutId !== timeoutId,
        );
        reject(new Error(`Receive timeout after ${timeoutMs}ms`));
      }, timeoutMs);

      this.pendingReceives.push({
        resolve: (payload) => {
          clearTimeout(timeoutId);
          resolve(payload);
        },
        reject: (error) => {
          clearTimeout(timeoutId);
          reject(error);
        },
        timeoutId,
      });
    });
  }

  isConnected(): boolean {
    return this.connected;
  }

  private dequeueResponse(request: Uint8Array): Uint8Array | undefined {
    const requestHex = SimulationInterface.toHex(request);
    const exact = this.exactResponses.get(requestHex);
    if (exact && exact.length > 0) {
      const response = exact.shift();
      if (exact.length === 0) {
        this.exactResponses.delete(requestHex);
      }
      return response;
    }

    for (const entry of this.patternResponses) {
      if (!entry.regex.test(requestHex) || entry.responses.length === 0) {
        continue;
      }
      const response = entry.responses.shift();
      if (entry.responses.length === 0) {
        this.patternResponses = this.patternResponses.filter(
          (item) => item !== entry,
        );
      }
      return response;
    }

    return undefined;
  }

  private ensureConnected(): void {
    if (!this.connected) {
      throw new Error("Simulation interface is not connected");
    }
  }

  private failPendingReceives(error: Error): void {
    const pending = [...this.pendingReceives];
    this.pendingReceives = [];
    pending.forEach((entry) => entry.reject(error));
  }

  private static toHex(data: Uint8Array): string {
    return Array.from(data)
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();
  }

  private static normalizeHex(value: string): string {
    return value
      .replace(/0x/gi, "")
      .replace(/\s+/g, "")
      .toUpperCase();
  }

  private static hasWildcard(pattern: string): boolean {
    return pattern.includes("??") || pattern.includes("*");
  }

  private static patternToRegex(pattern: string): RegExp {
    let regex = "";
    for (let index = 0; index < pattern.length; index += 1) {
      const char = pattern[index];
      if (char === "*") {
        regex += ".*";
        continue;
      }
      if (char === "?" && pattern[index + 1] === "?") {
        regex += "[0-9A-F]{2}";
        index += 1;
        continue;
      }
      regex += char.replace(/[-/\\^$+?.()|[\]{}]/g, "\\$&");
    }
    return new RegExp(`^${regex}$`);
  }
}
