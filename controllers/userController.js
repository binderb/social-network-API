import { User, Thought } from '../models/index.js';

// Get all users.
export async function getAllUsers (req, res) {
  try {
    const allUsers = await User.find().select('-__v');
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Get one user by id.
export async function getUserById (req, res) {
  try {
    const user = await User.findOne({_id: req.params.id}).select('-__v');
    if (!user) {
      res.status(404).json({message: `No user found with the given ID.`});
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Create 1 user.
export async function createUser (req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Update one user.
export async function updateUser (req, res) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {runValidators: true, new: true}
    );
    if (!updatedUser) {
      res.status(404).json({message: `No user found with the given ID.`});
      return;
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Delete one user.
export async function deleteUser (req, res) {
  try {
    const deletedUser = await User.findOneAndDelete(
      {_id: req.params.id}
    );
    if (!deletedUser) {
      res.status(404).json({message: `No user found with the given ID.`});
      return;
    }
    await Thought.deleteMany(
      {_id: {$in: deletedUser.thoughts}}
    );
    res.status(200).json({message: `User and associated thoughts deleted!`});
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

