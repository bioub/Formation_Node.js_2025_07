import { expect, test, vi } from "vitest";
import authenticate from "./authenticate";

test('authenticate middleware', () => {
  // Arrange
  const req = {
    headers: {
      authorization: "Bearer token"
    }
  };
  const res = {
    json: vi.fn(),
  };
  const next = () => {};

  // Act
  authenticate(req, res, next);

  // Assert
  expect(res.statusCode).toBe(401);
  expect(res.json).toHaveBeenCalledWith({
    msg: 'Unauthorized',
  });
});
