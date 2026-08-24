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
    const result = add("1");
    expect(result).toBe(1)
  })
});
