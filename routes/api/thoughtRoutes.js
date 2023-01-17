import express from 'express';
const router = express.Router();
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
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

router.route('/:id/reactions')
// Create 1 reaction.
.post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
// Remove 1 reaction.
.delete(deleteReaction);

export default router;