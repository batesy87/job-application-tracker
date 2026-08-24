import { describe, expect, it } from "vitest";

import { add } from "./stringCalculator";

describe("String calculator", () => {
  it("returns zero for an empty string", () => {
    // Arrange
    const input = "";

    // Act
    const result = add(input);

    // Assert
    expect(result).toBe(0);
  });
});
