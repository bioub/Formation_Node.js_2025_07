import express from 'express';
import * as userCtrl from '../controllers/user.js';

const router = express.Router();

// prettier-ignore
router.post('/login',
  express.json(),
  userCtrl.login
);

router.post('/register',
  express.json(),
  userCtrl.create
);

export default router;
