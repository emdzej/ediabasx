import { describe, expect, it } from "vitest";
import { getInterfaceMetadata, listInterfaces } from "../registry";

describe("interface registry", () => {
  it("lists all registered interfaces", () => {
    const interfaces = listInterfaces();
    const names = interfaces.map((entry) => entry.name);

    expect(names).toEqual(expect.arrayContaining(["simulation", "serial", "kdcan", "enet"]));
  });

  it("exposes metadata for a known interface", () => {
    const metadata = getInterfaceMetadata("serial");

    expect(metadata).toBeDefined();
    expect(metadata?.description).toContain("serial");
    expect(metadata?.options?.some((option) => option.name === "port")).toBe(true);
  });
});
