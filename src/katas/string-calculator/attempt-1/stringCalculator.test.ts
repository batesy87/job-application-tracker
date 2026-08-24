import { describe, expect, it } from "vitest";

import { add } from "./stringCalculator";

describe("String calculator", () => {
  it("returns zero for an empty string", () => {
    const input = "";
    const result = add(input);
    expect(result).toBe(0);
  });
  it("returns the correct number for a single number", () => {
    const input = "1";
    const result = add(input);
    expect(result).toBe(1)
  })
  it("returns the sum of a comma separated list of numbers", () => {
    const input = "1,2";
    const result = add(input);
    expect(result).toBe(3);
  })
  it("returns the sum of any amount of comma separated list of numbers", () => {
    const input = "1,2,3,4";
    const result = add(input);
    expect(result).toBe(10);
  })
  it("returns the sum of numbers with newlines or comma separators", () => {
    const input = "1\n2,3";
    const result = add(input);
    expect(result).toBe(6);
  })
});
