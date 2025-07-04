import { describe, expect, test } from "vitest";
import { sum } from "./my-maths.js";

describe("sum function", () => {
  test("it should works with positive numbers", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(5);
  });

  test("it should works with negative numbers", () => {
    // Arrange
    const a = -2;
    const b = -3;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(-5);
  });
});
