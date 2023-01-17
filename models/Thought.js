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
      default: Date.now,
      get: (date) => {
        if (date) return date.toLocaleString('en-us', { year:"numeric", month:"short", day:"numeric", hour12:"true", hour:"numeric", minute:"numeric"});
      }
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reaction]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

export default Thought;