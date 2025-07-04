import { expect, test, vi } from "vitest";
import authenticate from "./authenticate";
import { tokens } from '../models/user.js';


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


test('authenticate middleware with valid token', () => {
  // Arrange
  const valid = "valid-token";
  tokens.push(valid);
  const req = {
    headers: {
      authorization: `Bearer ${valid}`
    }
  };
  const res = {};
  const next = vi.fn();

  // Act
  authenticate(req, res, next);

  // Assert
  expect(next).toHaveBeenCalled();

  // Clean up
  tokens.pop(); // Clean up after test
});
