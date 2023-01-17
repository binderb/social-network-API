import express from 'express';
const router = express.Router();
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} from '../../controllers/thoughtController.js';

router.route('/')
// Get all thoughts.
.get(getAllThoughts)
// Create 1 thought.
.post(createThought);

router.route('/:id')
// Get 1 thought by id.
.get(getThoughtById)
// Update 1 thought.
.put(updateThought)
// Delete 1 thought.
.delete(deleteThought);

export default router;