import { Schema, model } from 'mongoose';
import reaction from './Reaction.js';


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reaction]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

thoughtSchema.virtual('reactionCount').get(() => {
  return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

export default Thought;

