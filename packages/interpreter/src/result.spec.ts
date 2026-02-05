import { beforeEach, describe, expect, it } from "vitest";
import { RegisterSet } from "./registers";
import {
  ResultCollector,
  type StringRegisterRef,
  type IntRegisterRef,
  type FloatRegisterRef,
  ergb,
  ergw,
  ergd,
  ergi,
  ergr,
  ergs,
  ergy,
} from "./operations/result";

type IntRefCase = {
  label: string;
  ref: IntRegisterRef;
  set: (registers: RegisterSet, value: number) => void;
};

const S0: StringRegisterRef = { kind: "S", index: 0 };
const S1: StringRegisterRef = { kind: "S", index: 1 };
const B0: IntRegisterRef = { kind: "B", index: 0 };
const A0: IntRegisterRef = { kind: "A", index: 0 };
const I0: IntRegisterRef = { kind: "I", index: 0 };
const L0: IntRegisterRef = { kind: "L", index: 0 };
const F0: FloatRegisterRef = { kind: "F", index: 0 };

const INT_CASES: IntRefCase[] = [
  {
    label: "B0",
    ref: B0,
    set: (registers, value) => registers.setB(0, value),
  },
  {
    label: "A0",
    ref: A0,
    set: (registers, value) => registers.setA(0, value),
  },
  {
    label: "I0",
    ref: I0,
    set: (registers, value) => registers.setI(0, value),
  },
  {
    label: "L0",
    ref: L0,
    set: (registers, value) => registers.setL(0, value),
  },
];

function maskUnsigned(value: number, bits: 8 | 16 | 32): number {
  const unsigned = value >>> 0;
  switch (bits) {
    case 8:
      return unsigned & 0xff;
    case 16:
      return unsigned & 0xffff;
    case 32:
      return unsigned >>> 0;
  }
}

function maskRegisterValue(ref: IntRegisterRef, value: number): number {
  switch (ref.kind) {
    case "B":
    case "A":
      return maskUnsigned(value, 8);
    case "I":
      return maskUnsigned(value, 16);
    case "L":
      return maskUnsigned(value, 32);
  }
}

function toSigned16(value: number): number {
  const masked = maskUnsigned(value, 16);
  if ((masked & 0x8000) !== 0) {
    return masked - 0x10000;
  }
  return masked;
}

describe("ResultCollector", () => {
  it("adds and retrieves results by name", () => {
    const collector = new ResultCollector();
    collector.add({ name: "RPM", type: "word", value: 2500 });

    expect(collector.get("RPM")).toEqual({
      name: "RPM",
      type: "word",
      value: 2500,
    });
  });

  it.each(["rpm", "RpM", "RPM", "rPm"])(
    "is case-insensitive for get/has (%s)",
    (name) => {
      const collector = new ResultCollector();
      collector.add({ name: "RPM", type: "word", value: 2500 });

      expect(collector.has(name)).toBe(true);
      expect(collector.get(name)?.value).toBe(2500);
    }
  );

  it("overwrites existing results with the same name", () => {
    const collector = new ResultCollector();
    collector.add({ name: "RPM", type: "word", value: 2500 });
    collector.add({ name: "rpm", type: "word", value: 2600 });

    expect(collector.size).toBe(1);
    expect(collector.get("RPM")?.value).toBe(2600);
  });

  it("list preserves insertion order", () => {
    const collector = new ResultCollector();
    collector.add({ name: "A", type: "byte", value: 1 });
    collector.add({ name: "B", type: "byte", value: 2 });
    collector.add({ name: "C", type: "byte", value: 3 });

    expect(collector.list().map((item) => item.name)).toEqual(["A", "B", "C"]);
  });

  it("clears all results", () => {
    const collector = new ResultCollector();
    collector.add({ name: "A", type: "byte", value: 1 });
    collector.add({ name: "B", type: "byte", value: 2 });

    collector.clear();

    expect(collector.size).toBe(0);
    expect(collector.list()).toEqual([]);
  });

  it("record clones binary values", () => {
    const collector = new ResultCollector();
    const payload = new Uint8Array([1, 2, 3]);

    collector.record("BIN", "binary", payload);

    payload[0] = 9;
    const stored = collector.get("bin")?.value as Uint8Array;
    expect(Array.from(stored)).toEqual([1, 2, 3]);
  });
});

describe("ergb", () => {
  let registers: RegisterSet;
  let collector: ResultCollector;

  beforeEach(() => {
    registers = new RegisterSet();
    collector = new ResultCollector();
  });

  const valueCases = [0, 1, 0x7f, 0x80, 0xff, 0x100, 0x1ff, -1];
  const ergbCases = INT_CASES.flatMap((entry) =>
    valueCases.map((value) => ({
      label: entry.label,
      ref: entry.ref,
      set: entry.set,
      value,
      expected: maskUnsigned(value, 8),
    }))
  );

  it.each(ergbCases)(
    "stores byte results from %s with value %s",
    ({ label, ref, set, value, expected }) => {
      registers.setS(0, `BYTE_${label}`);
      set(registers, value);

      ergb(registers, collector, S0, ref);

      const result = collector.get(`byte_${label}`);
      expect(result).toEqual({
        name: `BYTE_${label}`,
        type: "byte",
        value: expected,
      });
    }
  );

  it("accepts direct string names", () => {
    registers.setB(0, 12);

    ergb(registers, collector, "DIRECT_NAME", B0);

    expect(collector.get("direct_name")?.name).toBe("DIRECT_NAME");
  });
});

describe("ergw", () => {
  let registers: RegisterSet;
  let collector: ResultCollector;

  beforeEach(() => {
    registers = new RegisterSet();
    collector = new ResultCollector();
  });

  const valueCases = [0, 1, 0x7fff, 0x8000, 0xffff, 0x1_0000, 0x1_ffff, -1];
  const ergwCases = INT_CASES.flatMap((entry) =>
    valueCases.map((value) => ({
      label: entry.label,
      ref: entry.ref,
      set: entry.set,
      value,
      expected: maskUnsigned(maskRegisterValue(entry.ref, value), 16),
    }))
  );

  it.each(ergwCases)(
    "stores word results from %s with value %s",
    ({ label, ref, set, value, expected }) => {
      registers.setS(0, `WORD_${label}`);
      set(registers, value);

      ergw(registers, collector, S0, ref);

      const result = collector.get(`word_${label}`);
      expect(result).toEqual({
        name: `WORD_${label}`,
        type: "word",
        value: expected,
      });
    }
  );
});

describe("ergd", () => {
  let registers: RegisterSet;
  let collector: ResultCollector;

  beforeEach(() => {
    registers = new RegisterSet();
    collector = new ResultCollector();
  });

  const valueCases = [
    0,
    1,
    0x7fffffff,
    0x80000000,
    0xffffffff,
    0x1_0000_0000,
    -1,
  ];
  const ergdCases = INT_CASES.flatMap((entry) =>
    valueCases.map((value) => ({
      label: entry.label,
      ref: entry.ref,
      set: entry.set,
      value,
      expected: maskUnsigned(maskRegisterValue(entry.ref, value), 32),
    }))
  );

  it.each(ergdCases)(
    "stores dword results from %s with value %s",
    ({ label, ref, set, value, expected }) => {
      registers.setS(0, `DWORD_${label}`);
      set(registers, value);

      ergd(registers, collector, S0, ref);

      const result = collector.get(`dword_${label}`);
      expect(result).toEqual({
        name: `DWORD_${label}`,
        type: "dword",
        value: expected,
      });
    }
  );
});

describe("ergi", () => {
  let registers: RegisterSet;
  let collector: ResultCollector;

  beforeEach(() => {
    registers = new RegisterSet();
    collector = new ResultCollector();
  });

  const valueCases = [0, 1, 0x7fff, 0x8000, 0xffff, 0x1234, 0x9000, -1];
  const ergiCases = INT_CASES.flatMap((entry) =>
    valueCases.map((value) => ({
      label: entry.label,
      ref: entry.ref,
      set: entry.set,
      value,
      expected: toSigned16(maskRegisterValue(entry.ref, value)),
    }))
  );

  it.each(ergiCases)(
    "stores int results from %s with value %s",
    ({ label, ref, set, value, expected }) => {
      registers.setS(0, `INT_${label}`);
      set(registers, value);

      ergi(registers, collector, S0, ref);

      const result = collector.get(`int_${label}`);
      expect(result).toEqual({
        name: `INT_${label}`,
        type: "int",
        value: expected,
      });
    }
  );
});

describe("ergr", () => {
  let registers: RegisterSet;
  let collector: ResultCollector;

  beforeEach(() => {
    registers = new RegisterSet();
    collector = new ResultCollector();
  });

  const valueCases = [0, 1.25, -3.5, Math.PI, Number.NaN, Number.POSITIVE_INFINITY];

  it.each(valueCases)("stores real result %s", (value) => {
    registers.setS(0, "REAL");
    registers.setF(0, value);

    ergr(registers, collector, S0, F0);

    const result = collector.get("real")!;
    const resultValue = result.value as number;
    if (Number.isNaN(value)) {
      expect(Number.isNaN(resultValue)).toBe(true);
    } else {
      expect(result).toEqual({ name: "REAL", type: "real", value });
    }
  });
});

describe("ergs", () => {
  let registers: RegisterSet;
  let collector: ResultCollector;

  beforeEach(() => {
    registers = new RegisterSet();
    collector = new ResultCollector();
  });

  it("stores string results from registers", () => {
    registers.setS(0, "TITLE");
    registers.setS(1, "Hello");

    ergs(registers, collector, S0, S1);

    expect(collector.get("title")).toEqual({
      name: "TITLE",
      type: "string",
      value: "Hello",
    });
  });

  it("stores string results with immediate value", () => {
    registers.setS(0, "MODE");

    ergs(registers, collector, S0, "READY");

    expect(collector.get("mode")).toEqual({
      name: "MODE",
      type: "string",
      value: "READY",
    });
  });

  it("stores string results with immediate name", () => {
    registers.setS(1, "DATA");

    ergs(registers, collector, "NAME", S1);

    expect(collector.get("name")).toEqual({
      name: "NAME",
      type: "string",
      value: "DATA",
    });
  });

  it.each(["", " ", "  trim  ", "\u263a"])(
    "stores string values verbatim (%s)",
    (value) => {
      registers.setS(0, "TEXT");
      registers.setS(1, value);

      ergs(registers, collector, S0, S1);

      expect(collector.get("text")?.value).toBe(value);
    }
  );
});

describe("ergy", () => {
  let registers: RegisterSet;
  let collector: ResultCollector;

  beforeEach(() => {
    registers = new RegisterSet();
    collector = new ResultCollector();
  });

  it("stores binary results", () => {
    registers.setS(0, "BIN");
    const payload = new Uint8Array([1, 2, 3, 4]);

    ergy(registers, collector, S0, payload);

    const result = collector.get("bin")!;
    expect(result.type).toBe("binary");
    expect(Array.from(result.value as Uint8Array)).toEqual([1, 2, 3, 4]);
  });

  it("clones binary buffers", () => {
    registers.setS(0, "BIN");
    const payload = new Uint8Array([5, 6, 7]);

    ergy(registers, collector, S0, payload);
    payload[0] = 9;

    const stored = collector.get("bin")?.value as Uint8Array;
    expect(Array.from(stored)).toEqual([5, 6, 7]);
  });
});
