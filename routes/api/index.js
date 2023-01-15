import express from 'express';
const router = express.Router();
import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';

router.use('/thoughts', thoughtRoutes);

export default router;