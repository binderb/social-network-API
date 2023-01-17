import { Thought, User } from '../models/index.js';

// Get all thoughts.
export async function getAllThoughts (req, res) {
  try {
    const allThoughts = await Thought.find().select('-__v');
    res.status(200).json(allThoughts);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Get one thought by id.
export async function getThoughtById (req, res) {
  try {
    const thought = await Thought.findOne({_id: req.params.id}).select('-__v');
    if (!thought) {
      res.status(404).json({message: `No thought found with the given ID.`});
      return;
    }
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Create 1 thought.
export async function createThought (req, res) {
  try {
    // Must have a username that matches an existing user.
    if (!req.body.username) {
      res.status(403).json({message: `Must provide an author username!`});
      return;
    }
    const user = await User.findOne({username : req.body.username});
    if (!user) {
      res.status(404).json({message: `Author username not found!`});
      return;
    }
    // Create the new document in the db.
    const newThought = await Thought.create(req.body);
    // Update the associated user document.
    const updatedUser = await User.findOneAndUpdate(
      {username: req.body.username},
      {$addToSet: {thoughts: newThought._id}},
      {new: true}
    );
    res.status(201).json(updatedUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Update one thought.
export async function updateThought (req, res) {
  try {
    const updatedUser = await Thought.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {runValidators: true, new: true}
    );
    if (!updatedUser) {
      res.status(404).json({message: `No thought found with the given ID.`});
      return;
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}

// Delete one user.
export async function deleteThought (req, res) {
  try {
    const deletedThought = await Thought.findOneAndRemove(
      {_id: req.params.id}
    );
    if (!deletedThought) {
      res.status(404).json({message: `No thought found with the given ID.`});
      return;
    }
    await User.findOneAndUpdate(
      {thoughts: req.params.id},
      {$pull: {thoughts: req.params.id}},
      {new: true}
    );
    res.status(200).json({message: `Thought successfully deleted!`});
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}