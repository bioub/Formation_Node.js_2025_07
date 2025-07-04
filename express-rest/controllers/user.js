import * as User from '../models/user.js';

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function login(req, res, next) {
  try {
    const token = await User.login(req.body);

    if (!token) {
      res.statusCode = 400;
      return res.json({
        msg: 'Wrong username/password',
      });
    }

    res.json({token});
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
export async function create(req, res, next) {
  try {
    const user = await User.createUser(req.body);
    res.statusCode = 201;
    res.json(user);
  }
  catch (err) {
    if (err.message === 'Username already exists') {
      res.statusCode = 400;
      return res.json({
        msg: err.message,
      });
    }
    next(err);
  }
}
