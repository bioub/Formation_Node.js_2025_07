import { expect, test } from "vitest";
import greet from "./greet.js";

test("greet function", () => {
  // Arrange
  const name = "Alice";

  // Act
  const result = greet(name);

  // Assert
  expect(result).toBe("Hello, Alice!");
});
