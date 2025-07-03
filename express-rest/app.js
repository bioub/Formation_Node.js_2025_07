import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import joi from 'joi';

import todoRoutes from './routes/todo.js';
import userRoutes from './routes/user.js';

const app = express();

// Log Middleware
app.use(morgan('dev'));

// CORS Middleware (cross-domain requests)
app.use(cors());

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

app.use('/api', (req, res, _next) => {
  res.statusCode = 404;
  res.json({
    msg: res.locals.notFoundReason || 'Not Found',
  });
});

app.use('/api', (err, req, res, _next) => {
  res.statusCode = (err instanceof joi.ValidationError) ? 400 : 500;
  console.error(err);
  res.json({
    msg: err.message,
  });
});

export default app;
