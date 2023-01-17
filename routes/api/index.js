import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes.js';
import thoughtRoutes from './thoughtRoutes.js';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;