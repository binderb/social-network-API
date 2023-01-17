import express from 'express';
const router = express.Router();
import {
  createUser
} from '../../controllers/userController.js';

router.route('/').post(createUser);

export default router;