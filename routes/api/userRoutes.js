import express from 'express';
const router = express.Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} from '../../controllers/userController.js';

router.route('/')
// Get all users.
.get(getAllUsers)
// Create 1 user.
.post(createUser);

router.route('/:id')
// Get 1 user by id.
.get(getUserById)
// Update 1 user.
.put(updateUser)
// Delete 1 user and associated thoughts.
.delete(deleteUser);

router.route('/:userId/friends/:friendId')
// Add 1 friend.
.post(addFriend)
// Delete 1 friend.
.delete(deleteFriend);

export default router;