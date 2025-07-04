import { afterEach, expect, test, vi } from "vitest";
import Todo from "../models/todo.js";
import request from 'supertest';
import app from "../app.js";

afterEach(() => {
  vi.restoreAllMocks();
});

test('GET /api/todos', async () => {
  // Arrange
  const expectedTodos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
  ];

  vi.spyOn(Todo, 'find').mockResolvedValue(expectedTodos);

  // Act
  const res = await request(app).get('/api/todos');

  // Assert
  expect(res.status).toBe(200);
  expect(await res.body).toEqual(expectedTodos);
});

test('GET /api/todos/:id', async () => {
  // Arrange
  const expectedTodo = { id: 1, title: 'Todo 1', completed: false };
  vi.spyOn(Todo, 'findById').mockResolvedValue(expectedTodo);

  // Act
  const res = await request(app).get('/api/todos/1');

  // Assert
  expect(res.status).toBe(200);
  expect(await res.body).toEqual(expectedTodo);
  expect(Todo.findById).toHaveBeenCalledWith('1');
});
