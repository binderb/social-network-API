import { User, Thought } from '../models/index.js';

export async function createUser (req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({message: `${err.name}: ${err.message}`});
  }
}